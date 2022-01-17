CREATE TABLE users (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	phone VARCHAR ( 10 ) NOT NULL,
	created_on TIMESTAMP NOT NULL
);

CREATE TABLE orders (
	id serial PRIMARY KEY,
	user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	total INT NOT NULL,
	order_created TIMESTAMP NOT NULL,
	order_accepted TIMESTAMP,
	order_closed TIMESTAMP
);

CREATE TABLE pizza_sizes (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	price INT NOT NULL
);



CREATE TABLE ordered_items (
	id serial PRIMARY KEY,
	pizza_sizes_id INTEGER REFERENCES pizza_sizes (id) ON DELETE CASCADE,
	orders_id INTEGER REFERENCES orders (id) ON DELETE CASCADE
);

CREATE TABLE toppings (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) UNIQUE NOT NULL,
	price INT,
	icon_url VARCHAR ( 255 ) UNIQUE NOT NULL,
	preview_url VARCHAR ( 255 ) UNIQUE NOT NULL
);


CREATE TABLE toppings_selected (
	id serial PRIMARY KEY,
	toppings_id INTEGER REFERENCES toppings (id) ON DELETE CASCADE,
	ordered_items_id INTEGER REFERENCES ordered_items (id) ON DELETE CASCADE
);
