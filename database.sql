
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



-- very importents lots of work 

CREATE TABLE "vendors" (
"id" SERIAL PRIMARY KEY,
"user_id" INTEGER,
"farmers_markets_id" INTEGER,
"location" json NOT NULL,
"address" VARCHAR(255),
"availability" VARCHAR(255),
"description" TEXT,
"img" TEXT
);

INSERT INTO "vendor"  ("farmers_markets_id", "location", "address", "availability", "description", "img")
VALUES 
( 1, '{"lat":44.9765, "lng":-93.5084}', 'Great Village Lawn, 850 Lake St N, Wayzata, MN 55391', 'Thursday, 1:30–5:30PM', '','http://www.wayzatafarmersmarket.com/uploads/1/0/1/4/101424422/wayzata-farmersmarket-logo-600_orig.jpg'),
( 2, '{"lat":44.9972, "lng":-93.3747}', '7800 Golden Valley Rd, Golden Valley, MN 55427', 'Sunday, 9AM–1PM', 'At the farmers’ market, you know that all products sold at our farmers’ markets are grown in Minnesota.', 'https://marketinthevalley.org/wp-content/uploads/2020/08/Generic-Vendor-400x284.jpg'),
( 3, '{"lat":44.9539,"lng": -93.4717}', 'Township Hall, 14600 Minnetonka Blvd, Minnetonka, MN 55345', 'Tuesday, 3–7PM', 'This summer, the Minnetonka Farmers Market is back in classic style, and with a sweet bonus: you can shop in-person, of course, and preorder for pick-up with some of our wonderful vendors!', 'https://www.minnetonkamn.gov/home/showpublishedimage/728/637049223613500000'),
( 4, '{"lat":45.0104, "lng":-93.3062}', '2027 W Broadway Ave, Minneapolis, MN 55411', 'Friday, 3–7PM', 'The WEST BROADWAY
FARMERS MARKET increases fresh food access, promotes economic development among Northsiders, and cultivates a dynamic gathering space.', 'https://appetiteforchangemn.org/wp-content/uploads/2020/04/VS001969-2048x2048.jpg'),
(5, '{"lat":44.9894, "lng":-93.2869}', '312 East Lyndale Ave N, Minneapolis, MN 55405', 'Every Day 6AM-1PM', 'Providing
fresh produce & products since 1876', 'https://www.mplsfarmersmarket.com/assets/img/home-hero-image.png?_cchid=b09944d36466877c65934c91b1044524'),
(6, '{"lat":44.9859, "lng":-93.2689}', '300 South 6th St, Minneapolis, MN 55487', 'Thursday, 6AM–6PM', 'Tuesday outpost for fruit, vegetable & flower vendors, located outside a municipal building.', 'https://lh5.googleusercontent.com/p/AF1QipPi8TUnznh98PLMruHreFQ0nGiWA03wcWifMHwY=w408-h725-k-no'),
(7, '{"lat":44.9889, "lng":-93.2565}', '750 S 2nd St, Minneapolis, MN 55401', 'Saturday, 8AM–1PM', 'Saturday marketplace open May–October for local produce, art, live music & kids’ activities.', 'https://millcityfarmersmarket.org/wp-content/uploads/Prairie-Hollow-Farm-e1589930592508-400x400.jpg'),
(8, '{"lat":45.0040, "lng":-93.2620}', '629 NE 2nd St, Minneapolis, MN 55413', 'Saturday, 9AM–1PM', 'Seasonal, Saturday market featuring food vendors, local produce, artisanal goods & entertainment.', 'https://static.wixstatic.com/media/6e6f28_5a60d5a9703b45a6a555fcdc1411b877~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_940,h_520,al_c,q_85,usm_0.66_1.00_0.01/NEFM%20Photo_JPG.webp'),
(9, '{"lat":44.9586, "lng":-93.2323}', '3032 Minnehaha Ave, Minneapolis, MN 55406', 'Tuesday, 3–7PM, Saturday, 8AM–1PM', 'The mission of the Midtown Farmers Market is to create a vibrant forum in South Minneapolis that connects community residents and nearby rural food producers in a mutually beneficial economic and cultural exchange.', 'http://midtownfarmersmarket.org/wp-content/uploads/2019/07/Henry-300x300.jpeg'),
(10, '{"lat":45.0421, "lng":-93.3857}', '4401 Xylon Ave N, Minneapolis, MN 55428', 'Saturday, 9AM–1PM', 'Building community in New Hope and the surrounding areas by providing locally grown and produced foods and merchandise in a vibrant open air market.', 'https://www.newhopemarket.org/wp-content/uploads/2021/04/NewHope-Logo-white.png'),
(11, '{"lat":44.9380, "lng":-93.2786}', '4055 Nicollet Ave, Minneapolis, MN 55409', 'Sunday, 8:30AM–1PM', 'NEW LOCATION: Kingfield Farmers Market has a new home at the north end of MLK Park at 40th & Nicollet!

Kingfield Farmers Market takes place every Sunday from 8:30 am to 1:00 pm. The 2021 outdoor season will run May 16th through October 24th.', 'http://neighborhoodrootsmn.org/wp-content/uploads/2014/04/IMG_4393-1024x768.jpg'),
(12, '{"lat":45.0167, "lng":-93.1791}', '2131 Fairview Ave N, Roseville, MN 55113', 'Tuesday, 8AM–12PM', '', 'https://lh5.googleusercontent.com/p/AF1QipMbrvm3HoanIAExW-q2LPZdk2PEZDuw6cOxpFTa=w408-h544-k-no'),
(13, '{"lat":44.9336, "lng":-93.3138}', '2813 W 43rd St, Minneapolis, MN 55410', 'Sunday, 10AM–1PM', 'Founded in 2012, The Linden Hills Farmers Market’s mission is to support and strengthen the connection between the local community, local growers, local artisans and musicians by creating opportunities for education about the environment, nutritional values and the importance of buying and consuming locally produced goods.', 'https://static.wixstatic.com/media/0b625f_3ebc96a010b648b2a86136cf405b7ad9~mv2.png/v1/crop/x_1,y_0,w_770,h_485/fill/w_181,h_114,al_c,q_85,usm_0.66_1.00_0.01/LHFM_Logo_OneColor_Large_edited_edited_p.webp'),
(14, '{"lat":44.9331, "lng":-93.4098}', '16 9th Ave S, Hopkins, MN 55343', 'Saturday, 7:30AM–12PM', 'Fresh Produce & farmstead products. ATM, EBT, free parking & family friendly!', 'https://www.hopkinsfarmersmarket.com/uploads/2/8/0/2/28026293/2055296_orig.jpg'),
(15, '{"lat":44.8981, "lng":-93.2663}', '6335 Portland Ave, Richfield, MN 55423', 'Saturday, 7AM–12PM', 'Held in the Veterans Park Picnic Pavilion and adjacent park space, no line, enter on the East or West side
Shoppers may pick up and choose their own items, or ask for vendors assistance', 'https://www.richfieldmn.gov/revize_photo_gallery/Department/Parks%20&%20Recreation/Farmers%20Market/ShowImage%20(1).png');

CREATE TABLE "farmers_markets" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(100),
"link" TEXT
);

INSERT INTO "farmers_Markets" ("name", "link")
VALUES 
('Wayzata Village Farmers Market','http://www.wayzatafarmersmarket.com/'),
('Market in the Valley','http://marketinthevalley.org/'),
('Minnetonka Township Farmers Market','https://www.minnetonkamn.gov/our-city/city-events/farmers-market'),
('West Broadway Farmers Market','https://appetiteforchangemn.org/wbfm/'),
('Minneapolis Farmers Market','https://www.mplsfarmersmarket.com/'),
('Downtown Farmers Market','http://www.mplsfarmersmarket.com/'),
('Mill City Farmers Market','http://www.millcityfarmersmarket.org/'),
('Northeast Minneapolis Farmers Market','http://www.northeastmarket.org/'),
('Midtown Farmers Market','http://www.midtownfarmersmarket.org/'),
('New Hope Community Farmers Market','http://newhopemarket.org/'),
('Kingfield Farmers Market','http://neighborhoodrootsmn.org/about/kingfield/'),
('Roseville Farmers Market',''),
('Linden Hills Farmers Market','http://www.lindenhillsfarmersmarket.org/'),
('Hopkins Farmers Market','http://www.hopkinsfarmersmarket.com/'),
('Richfield Farmers Market','http://www.richfieldfarmersmarket.org/');