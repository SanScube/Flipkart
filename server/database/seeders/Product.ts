import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Product from "./../../app/Models/Product";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Product.create({
      name: "rahul",
      description: "Delivery by10 Aug, Wednesday|Free₹40?",
      price: 600,
      img_url:
        "https://rukminim1.flixcart.com/image/800/960/kyj0vbk0/shoe/j/4/j/11-01ftca0405-pl6-grey-one-centre-grey-original-imagaqpbzdc2ywz8.jpeg?q=50",
      rating: 4.7,
    });
  }
}
