import { Router } from 'express';
import { getTasks, saveTasks, updateTasks, deleteTasks, markTaskAsComplete, getCompletedTasks } from '../controllers/tasksController.js';
const router = Router();
router.get('/', getTasks);
router.post('/save', saveTasks);
router.put('/update', updateTasks);
router.delete('/delete', deleteTasks);
router.put('/complete', markTaskAsComplete);
router.get('/completed', getCompletedTasks);
export default router;
//# sourceMappingURL=tasksRoute.js.map