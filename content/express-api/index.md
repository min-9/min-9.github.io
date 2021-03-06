---
emoji: ๐ก
title: API ๊ฐ๋ฐ ๊ณต๋ถ
date: '2021-10-20 19:00:00'
author: min-9
tags: Dev
categories: Express API
---

## ๊ธ์ ์์ํ๊ธฐ์ ์์

์ด ๊ธ์ API์ ๋ํ ๊ฐ๋จํ ๋ด์ฉ๊ณผ ๊ฐ๋ฐ๊ณผ์ ์ ๋ด์๋ค.

## API๋?

`API`(Application Programming Interface)๋ ์ปดํจํฐ๋ ์ปดํจํฐ ํ๋ก๊ทธ๋จ ์ฌ์ด์ ์ฐ๊ฒฐ์ด๋ค. ์ผ์ข์ ์ํํธ์จ์ด ์ธํฐํ์ด์ค์ด๋ฉฐ ๋ค๋ฅธ ์ข๋ฅ์ ์ํํธ์จ์ด์ ์๋น์ค๋ฅผ ์ ๊ณตํ๋ค.

## ๊ฐ๋ฐ ํ๊ฒฝ ๊ตฌ์ถํ๊ธฐ

ํ์๋ ์น ์ ํ๋ฆฌ์ผ์ด์, API ๊ฐ๋ฐ์ ์ต์ ํ ๋์ด์๋ `Express`๋ก ๊ฐ๋ฐ์ ์งํํ๋๋ก ํ๊ฒ ๋ค.

Express๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์๋ Node.js๊ฐ ํ์ํ๋ค. Node.js๋ ํ์ฅ์ฑ ์๋ ๋คํธ์ํฌ ์ ํ๋ฆฌ์ผ์ด์ ๊ฐ๋ฐ์ ์ฌ์ฉ๋๋ ์ํํธ์จ์ด ํ๋ซํผ์ด๋ค. ์์ฑ ์ธ์ด๋ก ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ํ์ฉํ๋ฉฐ ๋ผ๋ธ๋กํน I/O์ ๋จ์ผ ์ค๋ ๋ ์ด๋ฒคํธ ๋ฃจํ๋ฅผ ํตํ ๋์ ์ฒ๋ฆฌ ์ฑ๋ฅ์ ๊ฐ์ง๊ณ  ์๋ค.

### Node.js ์ค์น

์๋ ๋งํฌ๋ฅผ ํด๋ฆญํ๊ณ  ๋ณธ์ธ์ด ์ฌ์ฉํ๊ณ  ์๋ ์ด์์ฒด์ ์ ๋ง๊ฒ ์ค์นํ๋ฉด ๋๋ค.

[Node.js ์ค์นํ๊ธฐ](https://nodejs.org/ko/download/)

> ์ค์น ์๋ฃ ํ ๋ฒ์  ํ์ธ

```bash
$ node -v
```

์ ๋ช๋ น์ด๊ฐ ์คํ์ด ๋์๋ค๋ฉด Node.js์ ์ค์น๋ ๋์ด๋ค.

๋ค์์ผ๋ก Yarn์ ์ค์นํ๋ค. Yarn์ Npm๊ณผ ๊ฐ์ ์๋ฐ์คํฌ๋ฆฝํธ ํจํค์ง ๋งค๋์ ์ด๋ค. Npm์ ๋ชจ๋  ํจํค์ง๋ค์ ๋ค ๊ฐ๊ณ ์์ด์ ๋ฌด๊ฒ๊ธฐ ๋๋ฌธ์ ํจํค์ง๋ฅผ ๋๋ฆฝ์ ์ผ๋ก ๊ด๋ฆฌํ  ์ ์๋ Yarn์ ์ฌ์ฉํ๋๋ก ํ๊ฒ ๋ค.

### Yarn ์ค์น

ํฐ๋ฏธ๋ ๋๋ Cmd์ ์๋ ๋ช๋ น์ด๋ฅผ ์คํํ๋ค.

```bash
$ npm install -g yarn
```

### Express ์ค์น

์๋ ๋ช๋ น์ด๋ฅผ ์คํํ๋ค.

```bash
$ yarn add express
```

## Express ์ฌ์ฉํ๊ธฐ

์ด์  ๊ฐ๋จํ๊ฒ ์๋ฒ๋ฅผ ๊ตฌ์ถํ๋ค.

```js
/* server.js */
import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server run at http://localhost:${port}`);
});
```

์ ์ฝ๋๋ฅผ ์คํํ๊ณ  http://localhost:3001 ์ ์ ์ํ๋ฉด ํ๋ฉด์ "Hello World!" ๊ฐ ๋ํ๋  ๊ฒ์ด๋ค.
์ฌ๊ธฐ๊น์ง ๋ฐ๋ผ์ค๋ฉด ๊ฐ๋จํ ์น ์๋ฒ ๋ง๋๋๋ฐ์๋ ์ฑ๊ณตํ ๊ฒ์ด๋ค.

๋ค์์ผ๋ก API๋ฅผ ๊ตฌ์ฑํ๊ธฐ ์ํด ๋ฐ์ด์ฒ๋ฒ ์ด์ค๋ฅผ ๊ตฌ์ถํด๋ณด์.

## MySQL ์ค์น

MySQL์ ์ธ๊ณ์์ ๊ฐ์ฅ ๋ง์ด ์ฐ์ด๋ ์คํ ์์ค์ ๊ด๊ณํ ๋ฐ์ดํฐ๋ฒ ์ด์ค ๊ด๋ฆฌ ์์คํ์ด๋ค.

์๋ ๋งํฌ๋ฅผ ํด๋ฆญํ๊ณ  ๋ณธ์ธ์ด ์ฌ์ฉํ๊ณ  ์๋ ์ด์์ฒด์ ์ ๋ง๊ฒ ์ค์นํ๋ฉด ๋๋ค.

[MySQL ์ค์นํ๊ธฐ](https://dev.mysql.com/downloads/mysql/)

์ค์น๊ฐ ์๋ฃ๋์๋ค๋ฉด ๋ค์ ๋ช๋ น์ด๋ฅผ ํตํด MySQL์ ์ ์ํ๋ค.

```bash
$ mysql.server start
$ mysql -u root -p
Enter your password: your_mysql_password
Welcome to the MySQL monitor.  Commands end with ; or \g.

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

์ ์์ด ์ ์์ ์ผ๋ก ๋์๋ค๋ฉด ๋ค์์ผ๋ก ๋์ด๊ฐ๋ค.

## ๋ฐ์ดํฐ๋ฒ ์ด์ค ์์ฑ ๋ฐ ์ด๋

```sql
mysql> CREATE DATABASE [DB_NAME];
mysql> USE [DB_NAME];
```

## ํ์ด๋ธ ์์ฑ

```sql
mysql> CREATE TABLE [TABLE_NAME](
    ->  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ->  COLUMN1 TYPE1,
    ->  COLUMN2 TYPE2,
    ->  ...
    ->);
```

### ์์ฑ๋ ํ์ด๋ธ ํ์ธ

```sql
mysql> DESC [TABLE_NAME];
```

```sql
+---------+--------------+------+-----+---------+----------------+
| Field   | Type         | Null | Key | Default | Extra          |
+---------+--------------+------+-----+---------+----------------+
| id      | int          | NO   | PRI | NULL    | auto_increment |
| COLUMN1 | type1        | NO   |     | NULL    |                |
| COLUMN2 | type2        | NO   |     | NULL    |                |
| ...     | ...          | NO   |     | NULL    |                |
+---------+--------------+------+-----+---------+----------------+
```

## ํ์ด๋ธ์ ๋ฐ์ดํฐ ์ถ๊ฐ

```sql
mysql> INSERT TO [TABLE_NAME]
    -> (COLUMN1, COLUMN2, ...)
    -> VALUES
    -> (VALUE1_1, VALUE2_1, ...);
```

### ๋ค์ค ๋ฐ์ดํฐ ์ถ๊ฐ

```sql
mysql> INSERT TO [TABLE_NAME]
    -> (COLUMN1, COLUMN2, ...)
    -> VALUES
    -> (VALUE1_2, VALUE2_2, ...),
    -> (VALUE1_3, VALUE2_3, ...);
```

## ๋ฐ์ดํฐ ํ์ธ

```sql
mysql> SELECT * FROM [TABLE_NAME];
```

```sql
+----+----------+----------+-----+
| id | COLUMN1  | COLUMN2  | ... |
+----+----------+----------+-----+
|  1 | VALUE1_1 | VALUE2_1 | ... |
|  2 | VALUE1_2 | VALUE2_2 | ... |
|  3 | VALUE1_3 | VALUE2_3 | ... |
+----+----------+----------+-----+
```

์ด์  ์์ฑ๋ ๋ฐ์ดํฐ๋ฅผ ์๋ฒ๋ก ๋ถ๋ฌ๋ณด์.

## ๋ฐ์ดํฐ ๋ถ๋ฌ์ค๊ธฐ

๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๋ถ๋ฌ์ค๊ธฐ ์ํด์ `mysql`๋ชจ๋์ ์ค์นํ๋ค.

### mysql ๋ชจ๋ ์ค์น

```bash
$ yarn add mysql
```

### mysql ๋ชจ๋ ์ ์ฉ

`mysql` ๋ชจ๋์ ์ ์ฉํ๋ฉด ๋ค์๊ณผ ๊ฐ๋ค.

```js
import { createConnection } from 'mysql';

const con = createConnection({
  host: 'localhost',
  user: 'root',
  password: your_mysql_password,
  database: your_db_name,
});

con.connect(err => console.log((err => (err ? err : 'Connect succeed!'))(err)));
```

์ฌ๊ธฐ์ password์ database์ ๋ค์ด๊ฐ ๋ด์ฉ์ ์ง์  ์๋ ฅํ๋๊ฒ์ ์ํํ๋ค. ๋ฐ๋ผ์ `.env` ํ์ผ์ ํตํด์ ์ค์ํ ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌํ์.

### dotenv ๋ชจ๋ ์ค์น

```bash
$ yarn add dotenv
```

### .env ํ์ผ ์์ฑ ๋ฐ ์ค์ 

์ค์น๊ฐ ์๋ฃ๋์๋ค๋ฉด `.env` ํ์ผ์ ์์ฑํ๊ณ  ์๋ ๋ด์ฉ์ ์ถ๊ฐํ๋ฉด ๋๋ค.

```
DB_PASSWORD=your_mysql_password
DB_NAME=your_db_name
```

### dotenv ๋ชจ๋ ์ ์ฉ

`dotenv` ๋ชจ๋์ ์ ์ฉํ๋ฉด ๋ค์๊ณผ ๊ฐ๋ค.

```js
import { config } from 'dotenv';

config();

const con = createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
```

### server.js

```js
/* server.js */
import express, { json } from 'express';
import { createConnection } from 'mysql';
import { config } from 'dotenv';

config();

const con = createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const app = express();
const port = process.env.PORT || 3001;

con.connect(err => console.log((err => (err ? err : 'Connect succeed!'))(err)));

app.use(json());

app.get('/', (req, res) => {
  con.query(sql, (err, result) => {
    err ? console.error(err) : res.send(result);
  });
});

app.listen(port, () => {
  console.log(`server run at http://localhost:${port}`);
});
```

```toc

```
