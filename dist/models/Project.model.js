"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = _interopRequireDefault(require("../database/database"));

var _Task = _interopRequireDefault(require("./Task.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database["default"].define('projects', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.Sequelize.TEXT
  },
  priority: {
    type: _sequelize.Sequelize.INTEGER
  },
  description: {
    type: _sequelize.Sequelize.TEXT
  },
  deliverydate: {
    type: _sequelize.Sequelize.DATE
  }
}, {
  timestamps: false
});

Project.hasMany(_Task["default"], {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

_Task["default"].belongsTo(Project, {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;