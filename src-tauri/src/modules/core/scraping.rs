use scraper::{Html, Selector};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct ScrapingResult {
    pub title: String,
    pub description: Option<String>,
}

pub async fn fetch_page_metadata(url: &str) -> Result<ScrapingResult, String> {
    //? Realizamos la petición HTTP
    let response = reqwest::get(url)
        .await
        .map_err(|e| format!("Failed to fetch URL: {}", e))?;

    let body = response
        .text()
        .await
        .map_err(|e| format!("Failed to read response body: {}", e))?;

    //? Parseamos el HTML
    let document = Html::parse_document(&body);
    
    //_ Extraemos el título
    let title_selector = Selector::parse("title").unwrap();
    let title = document
        .select(&title_selector)
        .next()
        .map(|el| el.inner_html())
        .unwrap_or_else(|| "No title found".to_string());

    //_ Extraemos la descripción (meta tag)
    let desc_selector = Selector::parse("meta[name='description']").unwrap();
    let description = document
        .select(&desc_selector)
        .next()
        .and_then(|el| el.value().attr("content"))
        .map(|s| s.to_string());

    Ok(ScrapingResult { title, description })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_html() {
        let html = r#"
            <html>
                <head>
                    <title>Test Page</title>
                    <meta name="description" content="This is a test description">
                </head>
                <body></body>
            </html>
        "#;
        let document = Html::parse_document(html);
        let title_selector = Selector::parse("title").unwrap();
        let title = document.select(&title_selector).next().unwrap().inner_html();
        
        assert_eq!(title, "Test Page");
    }
}
