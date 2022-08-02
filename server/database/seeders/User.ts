import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "./../../app/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await User.create({
      firstname: "girisha",
      lastname: "V",
      email: "g@v.me",
      password: "123",
      newpassword: "456",
      phone: "9875845845",
    });
  }
}
