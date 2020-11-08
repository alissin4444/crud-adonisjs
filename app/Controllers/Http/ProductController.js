"use strict";

const Product = use("App/Models/Product");

class ProductController {
  async index({ response, params }) {
    const { category_id } = params;
    const products = await Product.query().where({ category_id }).fetch();
    return response.json(products);
  }

  async store({ request, params, response }) {
    const { category_id } = params;
    const { name } = request.all();

    const product = await Product.create({
      name,
      category_id,
    });

    return response.json(product);
  }

  async show({ request, params, response }) {
    const { id } = params;

    const product = await Product.find(id);

    return response.json(product);
  }

  async update({ request, params, response }) {
    const { id, category_id } = params;

    const { name } = request.all();

    const product = await Product.find(id);

    product.merge({ name, category_id });

    await product.save();

    return response.json(product);
  }

  async destroy({ params, response }) {
    const { id } = params;

    const product = await Product.find(id);

    await product.delete();

    return response.json("Apagado com sucesso");
  }
}

module.exports = ProductController;
