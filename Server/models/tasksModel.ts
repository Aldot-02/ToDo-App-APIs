import mongoose, { Schema, Document } from 'mongoose';

export interface Task extends Document {
    userId: string;
    text: string;
    isComplete: boolean;
}

const tasksSchema: Schema = new Schema({
    userId: { 
        type: String, 
        required: true 
    },
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