import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const { email, password } = request.body();

    let isUser = await User.query().where("email", "=", email).first();
    console.log(isUser);

    if (isUser) {
      return response.badRequest({ message: "User Exist for given email" });
    }
    const data = await User.create({
      email: email,
      password: password,
    });
    return response.created({
      data: data,
      message: "User Created successfully",
    });
  }
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.body();

    try {
      const token = await auth.use("api").attempt(email, password);
      return token;
    } catch (error) {
      console.log(error);
      return response.unauthorized("Invalid credentials");
    }
  }
}
