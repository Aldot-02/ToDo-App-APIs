import mongoose, { Schema, Document } from 'mongoose';

export interface Task extends Document {
    text: string;
}

const tasksSchema: Schema = new Schema({
    text: {
        type: String,
        required: true
    }
});

export default mongoose.model<Task>('TasksList', tasksSchema);