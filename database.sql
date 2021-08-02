
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_type" BOOLEAN
);

CREATE TABLE "user_profile" (
"user_id" FOREIGN KEY "user".id,
"first_name" VARCHAR (100),
"last_name" VARCHAR (100),
"phone_number" INTEGER(12),
"email" VARCHAR(255),
"page_title" VARCHAR (100),
);

CREATE TABLE "farmer_products" (
"id" SERIAL PRIMARY KEY,
"user_id" FOREIGN KEY "user_profile".id,
"product_id" FOREIGN KEY "product".id, 
"asking_price" INTEGER(10000),
);

CREATE TABLE "products" (
"id" SERIAL PRIMARY KEY,
"item" VARCHAR (100)
);

CREATE TABLE "vendors" (
"id" SERIAL PRIMARY KEY,
"user_id" FOREIGN KEY "user_profile".id,
"farmers_markets_id" FOREIGN KEY "farmers_markets".id,
"location" json NOT NULL,
"address" VARCHAR(255),
"availability" VARCHAR(255),
"description" TEXT(500), 
);

CREATE TABLE "farmers_market" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(100),
);

CREATE TABLE "favorite_connections" (
"id" SERIAL PRIMARY KEY,
"farmer_type_id" FOREIGN KEY "user_profile".id,
"farmers_markets_id" FOREIGN KEY "farmers_markets".id,
"user_type_id" FOREIGN KEY "user_profile".id,
);

CREATE TABLE "raing_value" (
"id" SERIAL PRIMARY KEY,
"rating_value" INTEGER(1),
"review" TEXT(500),
);


-- TABLES CREATED WITH THIS

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_type" BOOLEAN );


CREATE TABLE "user_profile" (
"user_id" INT REFERENCES "user",
"first_name" VARCHAR (100),
"last_name" VARCHAR (100),
"phone_number" INTEGER,
"email" VARCHAR(255),
"page_title" VARCHAR (100)
);

CREATE TABLE "farmer_products" (
"id" SERIAL PRIMARY KEY,
"user_id" INTEGER,
"product_id" INTEGER,
"asking_price" INTEGER
);
-- PRIMARY KEY(farmers_product_id),
--   CONSTRAINT fk_customer
--      FOREIGN KEY(user_id) 
--	  REFERENCES user_profile(user_id)
--	  ON DELETE SET NULL

CREATE TABLE "products" (
"id" SERIAL PRIMARY KEY,
"item" VARCHAR (100)
);

CREATE TABLE "vendors" (
"id" SERIAL PRIMARY KEY,
"user_id" INTEGER,
"farmers_markets_id" INTEGER,
"location" json NOT NULL,
"address" VARCHAR(255),
"availability" VARCHAR(255),
"description" TEXT
);

CREATE TABLE "farmers_market" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(100)
);

CREATE TABLE "favorite_connections" (
"id" SERIAL PRIMARY KEY,
"farmer_type_id" INTEGER,
"farmers_markets_id" INTEGER,
"user_type_id" INTEGER
);

--CREATE TABLE "raing_value" (
--"id" SERIAL PRIMARY KEY,
--"rating_value" INTEGER(1),
--"review" TEXT(500),
--);