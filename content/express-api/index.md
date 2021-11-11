---
emoji: 📡
title: API 개발 공부
date: '2021-10-20 19:00:00'
author: min-9
tags: Dev
categories: Express API
---

## 글을 시작하기에 앞서

이 글은 API에 대한 간단한 내용과 개발과정을 담았다.

## API란?

`API`(Application Programming Interface)는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 일종의 소프트웨어 인터페이스이며 다른 종류의 소프트웨어에 서비스를 제공한다.

## 개발 환경 구축하기

필자는 웹 애플리케이션, API 개발에 최적화 되어있는 `Express`로 개발을 진행하도록 하겠다.

Express를 사용하기 위해서는 Node.js가 필요하다. Node.js는 확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다. 작성 언어로 자바스크립트를 활용하며 논블로킹 I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있다.

### Node.js 설치

아래 링크를 클릭하고 본인이 사용하고 있는 운영체제에 맞게 설치하면 된다.

[Node.js 설치하기](https://nodejs.org/ko/download/)

> 설치 완료 후 버전 확인

```bash
$ node -v
```

위 명령어가 실행이 되었다면 Node.js의 설치는 끝이다.

다음으로 Yarn을 설치한다. Yarn은 Npm과 같은 자바스크립트 패키지 매니저이다. Npm은 모든 패키지들을 다 갖고있어서 무겁기 때문에 패키지를 독립적으로 관리할 수 있는 Yarn을 사용하도록 하겠다.

### Yarn 설치

터미널 또는 Cmd에 아래 명령어를 실행한다.

```bash
$ npm install -g yarn
```

### Express 설치

아래 명령어를 실행한다.

```bash
$ yarn add express
```

## Express 사용하기

이제 간단하게 서버를 구축한다.

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

위 코드를 실행하고 http://localhost:3001 에 접속하면 화면에 "Hello World!" 가 나타날 것이다.
여기까지 따라오면 간단한 웹 서버 만드는데에는 성공한 것이다.

다음으로 API를 구성하기 위해 데이처베이스를 구축해보자.

## MySQL 설치

MySQL은 세계에서 가장 많이 쓰이는 오픈 소스의 관계형 데이터베이스 관리 시스템이다.

아래 링크를 클릭하고 본인이 사용하고 있는 운영체제에 맞게 설치하면 된다.

[MySQL 설치하기](https://dev.mysql.com/downloads/mysql/)

설치가 완료되었다면 다음 명령어를 통해 MySQL에 접속한다.

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

접속이 정상적으로 되었다면 다음으로 넘어간다.

## 데이터베이스 생성 및 이동

```sql
mysql> CREATE DATABASE [DB_NAME];
mysql> USE [DB_NAME];
```

## 테이블 생성

```sql
mysql> CREATE TABLE [TABLE_NAME](
    ->  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ->  COLUMN1 TYPE1,
    ->  COLUMN2 TYPE2,
    ->  ...
    ->);
```

### 생성된 테이블 확인

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

## 테이블에 데이터 추가

```sql
mysql> INSERT TO [TABLE_NAME]
    -> (COLUMN1, COLUMN2, ...)
    -> VALUES
    -> (VALUE1_1, VALUE2_1, ...);
```

### 다중 데이터 추가

```sql
mysql> INSERT TO [TABLE_NAME]
    -> (COLUMN1, COLUMN2, ...)
    -> VALUES
    -> (VALUE1_2, VALUE2_2, ...),
    -> (VALUE1_3, VALUE2_3, ...);
```

## 데이터 확인

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

이제 생성된 데이터를 서버로 불러보자.

## 데이터 불러오기

데이터베이스를 자바스크립트로 불러오기 위해서 `mysql`모듈을 설치한다.

### mysql 모듈 설치

```bash
$ yarn add mysql
```

### mysql 모듈 적용

`mysql` 모듈을 적용하면 다음과 같다.

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

여기서 password와 database에 들어갈 내용을 직접 입력하는것은 위험하다. 따라서 `.env` 파일을 통해서 중요한 데이터를 관리하자.

### dotenv 모듈 설치

```bash
$ yarn add dotenv
```

### .env 파일 생성 및 설정

설치가 완료되었다면 `.env` 파일을 생성하고 아래 내용을 추가하면 된다.

```
DB_PASSWORD=your_mysql_password
DB_NAME=your_db_name
```

### dotenv 모듈 적용

`dotenv` 모듈을 적용하면 다음과 같다.

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
