import { Request, Response } from 'express';
import tasksModel, { Task } from '../models/tasksModel.js';

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.body.userId;

        const tasks: Task[] = await tasksModel.find({ userId });
        res.send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const saveTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { text }: { text: string } = req.body;
        const userId = req.body.userId;

        const task = await tasksModel.create({ userId, text });
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
        const userId = req.body.userId;

        await tasksModel.findOneAndUpdate({ _id, userId }, { text });
        res.send("Task Updated Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const deleteTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { _id }: { _id: string } = req.body;
        const userId = req.body.userId;

        await tasksModel.findOneAndDelete({ _id, userId });
        res.send("Task Deleted Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const markTaskAsComplete = async (req: Request, res: Response): Promise<void> => {
    try {
        const { _id }: { _id: string } = req.body;
        const userId = req.body.userId;

        await tasksModel.findOneAndUpdate({ _id, userId }, { isComplete: true });
        res.send("Task Marked as Complete Successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

export const getCompletedTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.body.userId;

        const tasks: Task[] = await tasksModel.find({ userId, isComplete: true });
        res.send(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
