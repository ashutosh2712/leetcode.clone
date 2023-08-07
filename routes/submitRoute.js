import express, { application } from "express";
import { submitAction } from "../controllers/submitController.js";
import { executeAction } from "../controllers/executeController.js";

const router = express.Router()

router.get('/', submitAction)
router.post('/execute', executeAction)
export default router;