"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = require("../controllers/tasksController");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// TASK ROUTES
router.get('/', tasksController_1.getTasks);
router.post('/save', tasksController_1.saveTasks);
router.put('/update', tasksController_1.updateTasks);
router.delete('/delete', tasksController_1.deleteTasks);
router.put('/complete', tasksController_1.markTaskAsComplete);
router.get('/completed', tasksController_1.getCompletedTasks);
// AUTH ROUTES
router.post('/register', authController_1.registerUser);
router.post('/login', authController_1.loginUser);
router.get('/authenticated', authController_1.AuthenticatedUser);
router.post('/logout', authController_1.Logout);
exports.default = router;
//# sourceMappingURL=tasksRoute.js.map