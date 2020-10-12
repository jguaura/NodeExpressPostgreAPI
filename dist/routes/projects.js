"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Project = require("../controllers/Project.controller");

var router = (0, _express.Router)();
router.get('/', _Project.getProjects);
router.get('/:id', _Project.getProject);
router.post('/', _Project.createProject);
router["delete"]('/:id', _Project.deleteProject);
router.put('/:id', _Project.updateProject);
var _default = router;
exports["default"] = _default;