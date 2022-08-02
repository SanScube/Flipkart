import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "./../../app/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await User.createMany([
      {
        firstname: "girisha",
        lastname: "V",
        email: "g@v.me",
        password: "123",
        phone: "9875845845",
      },
      {
        firstname: "sanket",
        lastname: "chaware",
        email: "s@c.me",
        password: "sanket@123",
        phone: "8378910529",
      },
    ]);
  }
}
