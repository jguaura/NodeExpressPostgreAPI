"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Task = require("../controllers/Task.controller");

var router = (0, _express.Router)();
router.get('/', _Task.getAllTasks);
router.get('/:id', _Task.getOneTask);
router.get('/byproject/:id', _Task.getTasksByProject);
router.post('/', _Task.createTask);
router["delete"]('/:id', _Task.deleteTask);
router.put('/:id', _Task.updateTask);
var _default = router;
exports["default"] = _default;