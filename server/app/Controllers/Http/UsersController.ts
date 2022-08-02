import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "./../../Models/User";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    let data = await User.all();
    return response.ok({
      data: data,
      message: "All Users",
    });
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const { firstname, lastname, email, password, newpassword, phone } =
        request.body();

      const isUser = await User.query()
        .where("email", "=", email)
        .orWhere("phone", "=", phone)
        .first();

      if (isUser) {
        return response.ok({ messsage: "User already exists", isUser: isUser });
      } else {
        const user = await User.create({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          newpassword: newpassword,
          phone: phone,
        });
        return response.ok({ message: "User Created", user: user });
      }
    } catch (error) {
      return response.internalServerError({ message: error.message });
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
    try {
      // const userId = params.id;
      const ispresent = await User.query().where("id", "=", params.id).first();
      const payload = request.body();
      // return response.ok(ispresent);
      if (ispresent) {
        ispresent.firstname = payload.firstname;
        ispresent.lastname = payload.lastname;
        ispresent.email = payload.email;
        ispresent.password = payload.password;
        ispresent.newpassword = payload.newpassword;
        ispresent.email = payload.email;
        ispresent.phone = payload.phone;
        const savedUser = await ispresent.save();
        return response.ok({ data: savedUser, message: "User updated" });
      } else {
        return response.notFound({ message: "No Such User Exists" });
      }
    } catch (error) {
      return response.internalServerError({ message: error.message });
    }
  }

  public async destroy({ request, response, params }: HttpContextContract) {
    try {
      const ispresent = await User.query().where("id", "=", params.id).first();
      if (!ispresent) {
        return response.notFound({ message: "No Such User Exists" });
      } else {
        ispresent.delete();
        return response.ok({ user: ispresent, message: "User Deleted !" });
      }
    } catch (error) {
      return response.internalServerError({ message: error.message });
    }
  }
}
