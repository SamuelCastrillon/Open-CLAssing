//? Módulo Core para lógica compartida en el backend
pub mod database;
pub mod scraping;

use scraping::ScrapingResult;

#[tauri::command]
pub async fn scrape_url(url: String) -> Result<ScrapingResult, String> {
    //? Delegamos la lógica al módulo de scraping
    scraping::fetch_page_metadata(&url).await
}


pub fn version() -> &'static str {
    "0.1.0"
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_version() {
        //_ Validamos que la versión sea la esperada siguiendo TDD
        assert_eq!(version(), "0.1.0");
    }
}
