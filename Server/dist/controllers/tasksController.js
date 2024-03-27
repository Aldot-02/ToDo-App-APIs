import tasksModel from '../models/tasksModel.js';
export const getTasks = async (req, res) => {
    try {
        const userId = req.body.userId;
        const tasks = await tasksModel.find({ userId });
        res.send(tasks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
export const saveTasks = async (req, res) => {
    try {
        const { text } = req.body;
        const userId = req.body.userId;
        const task = await tasksModel.create({ userId, text });
        console.log("Task Addition was Successful");
        console.log(task);
        res.send(task);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
export const updateTasks = async (req, res) => {
    try {
        const { _id, text } = req.body;
        const userId = req.body.userId;
        await tasksModel.findOneAndUpdate({ _id, userId }, { text });
        res.send("Task Updated Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
export const deleteTasks = async (req, res) => {
    try {
        const { _id } = req.body;
        const userId = req.body.userId;
        await tasksModel.findOneAndDelete({ _id, userId });
        res.send("Task Deleted Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
export const markTaskAsComplete = async (req, res) => {
    try {
        const { _id } = req.body;
        const userId = req.body.userId;
        await tasksModel.findOneAndUpdate({ _id, userId }, { isComplete: true });
        res.send("Task Marked as Complete Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
export const getCompletedTasks = async (req, res) => {
    try {
        const userId = req.body.userId;
        const tasks = await tasksModel.find({ userId, isComplete: true });
        res.send(tasks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
//# sourceMappingURL=tasksController.js.map