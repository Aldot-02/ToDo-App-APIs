"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompletedTasks = exports.markTaskAsComplete = exports.deleteTasks = exports.updateTasks = exports.saveTasks = exports.getTasks = void 0;
const tasksModel_1 = __importDefault(require("../models/tasksModel"));
const getTasks = async (req, res) => {
    try {
        const tasks = await tasksModel_1.default.find();
        res.send(tasks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
exports.getTasks = getTasks;
const saveTasks = async (req, res) => {
    try {
        const { text } = req.body;
        const task = await tasksModel_1.default.create({ text });
        console.log("Task Addition was Successful");
        console.log(task);
        res.send(task);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
exports.saveTasks = saveTasks;
const updateTasks = async (req, res) => {
    try {
        const { _id, text } = req.body;
        await tasksModel_1.default.findByIdAndUpdate(_id, { text });
        res.send("Task Updated Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
exports.updateTasks = updateTasks;
const deleteTasks = async (req, res) => {
    try {
        const { _id } = req.body;
        await tasksModel_1.default.findByIdAndDelete(_id);
        res.send("Task Deleted Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
exports.deleteTasks = deleteTasks;
const markTaskAsComplete = async (req, res) => {
    try {
        const { _id } = req.body;
        await tasksModel_1.default.findByIdAndUpdate(_id, { isComplete: true });
        res.send("Task Marked as Complete Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
exports.markTaskAsComplete = markTaskAsComplete;
const getCompletedTasks = async (req, res) => {
    try {
        const tasks = await tasksModel_1.default.find({ isComplete: true });
        res.send(tasks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
exports.getCompletedTasks = getCompletedTasks;
//# sourceMappingURL=tasksController.js.map