import { Request, Response } from 'express';
import tasksModel, { Task } from '../models/tasksModel';

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks: Task[] = await tasksModel.find();
        res.send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const saveTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { text }: { text: string } = req.body;
        const task = await tasksModel.create({ text });
        console.log("Task Addition was Successful");
        console.log(task);
        res.send(task);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const updateTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { _id, text }: { _id: string; text: string } = req.body;
        await tasksModel.findByIdAndUpdate(_id, { text });
        res.send("Task Updated Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const deleteTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { _id }: { _id: string } = req.body;
        await tasksModel.findByIdAndDelete(_id);
        res.send("Task Deleted Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const markTaskAsComplete = async (req: Request, res: Response): Promise<void> => {
    try {
        const { _id }: { _id: string } = req.body;
        await tasksModel.findByIdAndUpdate(_id, { isComplete: true });
        res.send("Task Marked as Complete Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const getCompletedTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks: Task[] = await tasksModel.find({ isComplete: true });
        res.send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};