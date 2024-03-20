import mongoose, { Schema, Document } from 'mongoose';

export interface Task extends Document {
    text: string;
    isComplete: boolean;
}

const tasksSchema: Schema = new Schema({
    text: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model<Task>('TasksList', tasksSchema);