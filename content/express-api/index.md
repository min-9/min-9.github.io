---
emoji: 📡
title: API 개발 공부
date: '2021-10-20 19:00:00'
author: min-9
tags: Dev
categories: Node.js API
---

## 글을 시작하기에 앞서

이 글은 API에 대한 간단한 내용과 개발과정을 담았습니다.

## API란?

`API`(Application Programming Interface)는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 일종의 소프트웨어 인터페이스이며 다른 종류의 소프트웨어에 서비스를 제공한다.

## 개발 환경 구축하기

여기서는 웹 애플리케이션, API 개발에 최적화 되어있는 `Express`로 개발을 진행하도록 하겠다.
Express는 `Node.js`의 표준 서버 프레임워크이므로 `Npm` 또는 `Yarn`이 설치되있어야 한다.

> Npm은 Node.js를 설치하면 자동으로 설치되므로 Yarn을 사용하지 않는다면 다음으로 넘어가도 좋다.

### Yarn 설치

터미널 또는 Cmd에 다음 명령어를 실행한다.

```bash
$ npm install -g yarn
```

### Express 설치

자신이 사용하는 패키지 매니저에 따라 아래 명령어를 실행한다.

#### Npm

```bash
$ npm i express --save
```

#### Yarn

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

위 코드를 실행하고 http://localhost:3001 에 접속하면 화면에 "Hello World!" 가 나타날 것입니다.
여기까지 따라오면 간단한 웹 서버 만드는데에는 성공한겁니다.

다음으로 API를 구성하기 위해 Database를 구축해보자.

## MySQL 설치

MySQL은 세계에서 가장 많이 쓰이는 오픈 소스의 관계형 데이터베이스 관리 시스템이다.

[MySQL 설치](https://www.google.com/search?q=mysql+설치)

설치가 완료되었다면 MySQL에 접속한다.

```bash
$ mysql.server start
$ mysql -u root -p
Enter your password: your_mysql_password
```

접속이 정상적으로 되었다면 아래의 명령어를 실행한다.

```sql
mysql> CREATE DATABASE [DB_NAME];
mysql> USE [DB_NAME];
mysql> CREATE TABLE [TABLE_NAME](COLUMN1[, COLUMN2, ...]);
mysql> INSERT TO [TABLE_NAME](COLUMN1[, COLUMN2, ...]) VALUES (VALUE1[, VALUE2, ...]);
```

아래 명령어를 실행하여 설치해보자.

### Npm

```bash
$ npm i mysql --save
```

### Yarn

```bash
$ yarn add mysql
```

```toc

```
