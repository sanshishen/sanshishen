/**
 * todos router
 * @author  sanshishen
 * @email   sanshishen@qq.com
 * @date    2016-06-03 16:15:39
 * @version 1.0.0
 */
'use strict';

var express = require('express');
var router = express.Router();
var dao = require('../dao/todoDao');

router.route('/todo')
    .get(function(req, res, next) {
        console.log('/todo get');
    })
    .post(function(req, res, next) {
        console.log('/todo post insert method');
        dao.insert(req, res, next);
    });
router.route('/todo/:id')
    .put(function(req, res, next) {
        dao.update(req, res, next);
    })
    .delete(function(req, res, next) {
        dao.delete(req, res, next);
    });
// 获取全部信息
router.route('/todos')
    .get(function(req, res, next) {
        dao.queryAll(req, res, next);
    });

module.exports = router;