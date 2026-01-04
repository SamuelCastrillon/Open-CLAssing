//? Módulo Core para lógica compartida en el backend

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
