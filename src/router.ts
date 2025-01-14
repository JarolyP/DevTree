import { Router } from "express";

const router = Router();

router.post("/auth/register", (req, res) => {
  console.log("Desde registro...");
});

export default router