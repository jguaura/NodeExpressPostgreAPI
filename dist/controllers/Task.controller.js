"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTasks = getAllTasks;
exports.getOneTask = getOneTask;
exports.getTasksByProject = getTasksByProject;
exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;

var _Task = _interopRequireDefault(require("../models/Task.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAllTasks(_x, _x2) {
  return _getAllTasks.apply(this, arguments);
}

function _getAllTasks() {
  _getAllTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Task["default"].findAll({
              order: [['projectid', 'ASC']]
            });

          case 3:
            tasks = _context.sent;
            tasks && res.json({
              data: tasks
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getAllTasks.apply(this, arguments);
}

function getOneTask(_x3, _x4) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Task["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            task = _context2.sent;
            task && res.json({
              task: task
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0.message);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getOneTask.apply(this, arguments);
}

function getTasksByProject(_x5, _x6) {
  return _getTasksByProject.apply(this, arguments);
}

function _getTasksByProject() {
  _getTasksByProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Task["default"].findAll({
              where: {
                projectid: id
              },
              order: [['id', 'ASC']]
            });

          case 4:
            response = _context3.sent;
            response && res.json({
              data: response
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.json({
              message: _context3.t0.message
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getTasksByProject.apply(this, arguments);
}

function createTask(_x7, _x8) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, done, projectid, task;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid;
            _context4.prev = 1;
            _context4.next = 4;
            return _Task["default"].create({
              name: name,
              done: done,
              projectid: projectid
            }, {
              fields: ['name', 'done', 'projectid']
            });

          case 4:
            task = _context4.sent;
            task && res.json({
              message: 'Task created',
              data: {
                name: name,
                done: done,
                projectid: projectid
              }
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0.message);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _createTask.apply(this, arguments);
}

function deleteTask(_x9, _x10) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Task["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            task = _context5.sent;
            task && res.json({
              message: "Task id: ".concat(id, " deleted")
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0.message);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _deleteTask.apply(this, arguments);
}

function updateTask(_x11, _x12) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, name, done, task;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done;
            _context7.prev = 2;
            _context7.next = 5;
            return _Task["default"].findAll({
              attributes: ['id', 'name', 'done', 'projectid'],
              where: {
                id: id
              }
            });

          case 5:
            task = _context7.sent;
            task.length > 0 && task.forEach( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(task) {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return task.update({
                          name: name,
                          done: done,
                          projectid: projectid
                        });

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));

              return function (_x13) {
                return _ref.apply(this, arguments);
              };
            }());
            res.json({
              message: 'Task updated',
              data: task
            });
            _context7.next = 13;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0.message);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 10]]);
  }));
  return _updateTask.apply(this, arguments);
}