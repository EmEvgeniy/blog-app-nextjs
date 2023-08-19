import { Router } from "express";
import * as CategoryController from "../controllers/CategoryController.js";
import { categoryValidation } from "../validations/category.js";
import checkAuth from "../utils/checkAuth.js";
import handleErrors from "../utils/handleErrors.js";

const CategoryRouter = new Router();


CategoryRouter.post(
	"/category/add",
	checkAuth,	
	handleErrors,
	categoryValidation,
	CategoryController.create
);
CategoryRouter.get("/categories", CategoryController.getAll);
CategoryRouter.get("/category/:id", CategoryController.getOne);
CategoryRouter.delete("/category/:id",checkAuth, CategoryController.remove);
CategoryRouter.patch("/category/:id",checkAuth, CategoryController.update);

export default CategoryRouter
