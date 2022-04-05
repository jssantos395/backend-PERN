-- for hlep \?

-- list database \l

-- Create database CREATE DATABASE database_name;

-- Verify tables \d
-- See structure of the table \d table_name

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) values (123, 'mcdonalds', 'new york', 3);


CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >=1 and rating <=5)
);


heroku addons:create heroku-postgresql:hobby-dev --app sleepy-crag-81275

heroku pg:psql postgresql-deep-70025  --app sleepy-crag-81275

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT REFERENCES restaurants(id) ON DELETE CASCADE,
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(
    rating >= 1
    AND rating <= 5
  )
);

INSERT INTO restaurants(name, location, price_range)
VALUES ("McDonalds", "New York", 3);
