/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import ProductsController from "./../app/Controllers/Http/ProductsController";
import UsersController from "./../app/Controllers/Http/UsersController";

// Route.get("/products", "ProductsController.index");
// Route.post("/add-product", "ProductsController.store");
// Route.patch("/product", "ProductsController.update");
// Route.delete("/product", "ProductsController.destroy");

Route.resource("product", "ProductsController");
Route.resource("user", "UsersController");
