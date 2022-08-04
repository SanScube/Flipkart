import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
      table.string("name").notNullable;
      table.integer("price").notNullable;
      table.string("description");
      table.string("img_url").notNullable;
      table.integer("rating").notNullable;
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
