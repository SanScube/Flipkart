import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import user from "./../../app/Models/user";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await user.createMany([
      {
        email: "g@v.me",
        password: "sanket",
      },
      {
        email: "s@c.me",
        password: "chaware",
      },
    ]);
  }
}
