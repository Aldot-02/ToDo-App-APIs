import tasksModel from '../models/tasksModel.js';
export const getTasks = async (req, res) => {
    try {
        const tasks = await tasksModel.find();
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
        const task = await tasksModel.create({ text });
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
        await tasksModel.findByIdAndUpdate(_id, { text });
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
        await tasksModel.findByIdAndDelete(_id);
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
        await tasksModel.findByIdAndUpdate(_id, { isComplete: true });
        res.send("Task Marked as Complete Successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
export const getCompletedTasks = async (req, res) => {
    try {
        const tasks = await tasksModel.find({ isComplete: true });
        res.send(tasks);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
//# sourceMappingURL=tasksController.js.map