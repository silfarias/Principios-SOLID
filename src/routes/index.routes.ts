import { Router } from "express";
import { vehicleRouter } from "./vehicle.routes";

const router = Router();

router.use('/vehicle', vehicleRouter);

export { router };