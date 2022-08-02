import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public firstname: string;

  @column()
  public lastname: string;

  @column()
  public password: string;

  @column()
  public newpassword: string;

  @column()
  public email: string;

  @column()
  public phone: string;
}
