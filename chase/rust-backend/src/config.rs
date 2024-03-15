use config::{Config, ConfigError};
#[derive(Debug, serde::Deserialize, PartialEq, Eq)]
pub struct AppConfig {
    pub port: u16,
    pub name: String,
    pub db: DbConfig,
}

#[derive(Debug, serde::Deserialize, PartialEq, Eq)]
pub struct DbConfig {
    pub port: u16,
    pub namespace: String,
    pub database: String,
}

pub fn read_config() -> Result<AppConfig, ConfigError> {
    #[cfg(debug_assertions)]
    dotenv::dotenv().ok();
    #[cfg(debug_assertions)]
    log::warn!("Running in development mode, reading env config vars from .env file!");

    let config = Config::builder()
        .add_source(
            config::Environment::with_convert_case(config::Case::Lower)
                .try_parsing(true)
                .separator("_"),
        )
        .set_default("port", 3001)?
        .set_default("name", "CHASE")?
        .set_default("db.namespace", "dev")?
        .set_default("db.database", "dev")?
        .build()?;

    config.try_deserialize()
}
