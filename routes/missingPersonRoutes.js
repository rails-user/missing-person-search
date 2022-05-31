"use strict";

const router = require('express').Router();
const missingPersonController = require("../controllers/missingPersonController")

const logger = require('../logger');
logger.setLogger();

router.get("/", missingPersonController.index, missingPersonController.indexView);

/* const usersController = require("../controllers/usersController")

router.get("/", usersController.index, usersController.indexView);
//ユーザー登録画面にて、登録実施
router.get("/new", usersController.new);
router.post("/create", usersController.validate, usersController.create, usersController.redirectView);
//ログイン画面の表示、ログイン実行、ログアウト
router.get("/login", usersController.login);
router.post("/login", usersController.authenticate);
router.get("/logout", usersController.logout, usersController.redirectView);

//ユーザー詳細画面にて、更新・削除処理
router.get("/:id", usersController.show, usersController.showView);
router.get("/:id/edit", usersController.edit);
router.put("/:id/update", usersController.update, usersController.redirectView);
router.delete("/:id/delete", usersController.delete, usersController.redirectView);  */

module.exports = router;
