import mongoose, { Schema } from 'mongoose';
const tasksSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});
export default mongoose.model('TasksList', tasksSchema);
//# sourceMappingURL=tasksModel.js.map