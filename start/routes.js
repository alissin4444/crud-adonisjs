"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/categories", "CategoryController.index");
Route.post("/categories", "CategoryController.store");
Route.get("/categories/:id", "CategoryController.show");
Route.put("/categories/:id", "CategoryController.update");
Route.delete("/categories/:id", "CategoryController.destroy");

Route.get("/categories/:category_id/products", "ProductController.index");
Route.post("/categories/:category_id/products", "ProductController.store");
Route.get("/categories/:category_id/products/:id", "ProductController.show");
Route.put("/categories/:category_id/products/:id", "ProductController.update");
Route.delete(
  "/categories/:category_id/products/:id",
  "ProductController.destroy"
);
