import { Router } from 'express';
import { getTasks, saveTasks, updateTasks, deleteTasks } from '../controllers/tasksController.js';

const router = Router();

router.get('/', getTasks);
router.post('/save', saveTasks);
router.put('/update', updateTasks);
router.delete('/delete', deleteTasks);

export default router;