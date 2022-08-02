import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "./../../Models/Product";

export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    const products = await Product.all();
    return response.ok({ products: products });
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const { name, price, description, img_url, rating } = request.body();

      //   1.sql query
      let product = await Product.query().where("name", "=", name).first();

      //   2.Lucid Query
      // let products = await Product.findBy("name", name);

      if (product) {
        return response.badRequest("Product exists already");
      } else {
        const prod = await Product.create({
          name: name,
          price: price,
          description: description,
          img_url: img_url,
          rating: rating,
        });
        return response.ok({ prod: prod, message: "PRODUCT CREATED" });
      }
    } catch (error) {
      return response.internalServerError(error);
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const prodID = params.id;
      console.log(prodID);
      const payload = request.body();

      //   let product = await Product.find(prodID);
      let product = await Product.query().where("id", "=", prodID).first();

      if (product) {
        product.name = payload.name;
        product.price = payload.price;
        product.description = payload.description;
        product.img_url = payload.img_url;
        product.rating = payload.rating;
        let prod = await product?.save();
        return response.ok({ product: prod, message: "updated" });
      } else {
        return response.notFound({ message: "No Such Product" });
      }
    } catch (error) {
      return response.internalServerError(error);
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const prodId = params.id;
      const product = await Product.query().where("id", "=", prodId).first();

      if (product) {
        await product.delete();
        return response.ok({ product: product, message: "deleted" });
      }
    } catch (error) {
      return response.internalServerError(error);
    }
  }
}
