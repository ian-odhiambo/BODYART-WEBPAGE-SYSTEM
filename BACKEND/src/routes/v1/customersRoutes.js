import express from "express";
import { createCustomer, deleteCustomer, getAllCustomers, updateCustomer } from "../../controllers/customersController.js";

const router = express.Router();

router.get("/", getAllCustomers);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;