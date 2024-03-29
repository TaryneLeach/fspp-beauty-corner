
DROP DATABASE IF EXISTS beauty;
CREATE DATABASE beauty; 

\c beauty; 

DROP TABLE IF EXISTS skincare;
CREATE TABLE skincare(
    id          SERIAL PRIMARY KEY,
    item_name   TEXT ,
    brand       TEXT NOT NULL,
    product_type TEXT NOT NULL,
    price       INT,
    is_clean_beauty  BOOLEAN,
    image       TEXT,
    where_to_purchase TEXT NOT NULL

);

DROP TABLE IF EXISTS makeup;
CREATE TABLE makeup(
    id          SERIAL PRIMARY KEY,
    item_name   TEXT ,
    brand       TEXT NOT NULL,
    category    TEXT NOT NULL,
    price       INT,
    is_vegan    BOOLEAN,
    image       TEXT,
    where_to_purchase TEXT NOT NULL
);


DROP TABLE IF EXISTS perfume;
CREATE TABLE perfume(
    id          SERIAL PRIMARY KEY,
    item_name   TEXT NOT NULL,
    brand       TEXT NOT NULL,
    scent_type  TEXT NOT NULL,
    key_notes   TEXT NOT NULL,
    fragrance_description TEXT NOT NULL,
    price       INT,
    is_long_lasting BOOLEAN,
    image       TEXT,
    where_to_purchase TEXT NOT NULL
);