'use strict';

const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./routes/index');
//  dotenvを呼び出し、.envファイルの環境変数がprocess.envで呼び出せるようになる。
require('dotenv').config();

app.set('env', process.env.NODE_ENV);
//  ejsの設定
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('image'));
//  ルーティングの呼び出し
app.use('/', router);

//Expressがすべてのミドルウェア関数とルートを実行して、そのいずれも応答しなかった場合に404を返す
app.use(function(req, res, next) {
  next(createError(404));
});
//エラーハンドラー
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
