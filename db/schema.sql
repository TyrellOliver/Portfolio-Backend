DROP DATABASE IF EXISTS portfolio_dev;
CREATE DATABASE portfolio_dev;

\c portfolio_dev;

CREATE TABLE plants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price DECIMAL(10, 2),
    in_stock BOOL DEFAULT false,
    image_url VARCHAR(255),
    description TEXT NOT NULL,
    moisture_needs TEXT NOT NULL,
    safe_for_pets BOOL NOT NULL DEFAULT false
);