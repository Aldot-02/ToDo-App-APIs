import { Router } from 'express';
import { getTasks, saveTasks, updateTasks, deleteTasks, markTaskAsComplete, getCompletedTasks } from '../controllers/tasksController.js';
import { AuthenticatedUser, Logout, loginUser, registerUser } from '../controllers/authController.js';

const router = Router();

// TASK ROUTES

router.get('/', getTasks);
router.post('/save', saveTasks);
router.put('/update', updateTasks);
router.delete('/delete', deleteTasks);
router.put('/complete', markTaskAsComplete);
router.get('/completed', getCompletedTasks);


// AUTH ROUTES
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/authenticated', AuthenticatedUser);
router.post('/logout', Logout);


export default router;