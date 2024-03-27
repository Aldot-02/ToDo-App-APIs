import mongoose, { Schema } from 'mongoose';
const tasksSchema = new Schema({
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
export default mongoose.model('TasksList', tasksSchema);
//# sourceMappingURL=tasksModel.js.map