require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories (name) VALUES 
  ('Action'),
  ('RPG'),
  ('Puzzle');

INSERT INTO products (name, category_id) VALUES
  ('DOOM', 1),
  ('Elden Ring', 2),
  ('Tetris', 3),
  ('God of War', 1),
  ('Final Fantasy VII', 2);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
