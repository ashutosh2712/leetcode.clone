import express from "express"
import { submitAction } from "../controllers/submitController.js";
const router = express.Router()

router.get('/', submitAction)

export default router;