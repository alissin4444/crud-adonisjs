"use strict";

const Category = use("App/Models/Category");

class CategoryController {
  async index({ response }) {
    const categories = await Category.query().with("products").fetch();

    return response.json(categories);
  }

  async store({ request, response }) {
    const { name, description } = request.all();

    const category = await Category.create({ name, description });

    return response.json(category);
  }

  async show({ request, params, response }) {
    const { id } = params;

    const category = await Category.query()
      .where({ id })
      .with("products")
      .first();

    return response.json(category);
  }

  async update({ request, params, response }) {
    const { id } = params;

    const { name, description } = request.all();

    const category = await Category.find(id);

    category.merge({ name, description });

    await category.save();

    return response.json(category);
  }

  async destroy({ params, response }) {
    const { id } = params;

    const category = await Category.find(id);

    await category.delete();

    return response.json("Apagado com sucesso");
  }
}

module.exports = CategoryController;
