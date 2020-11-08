"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductsSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("name");
      table
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("categories");
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductsSchema;
