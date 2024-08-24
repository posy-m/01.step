
import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: "login",
  timestamps: true,
  paranoid: true
})
export class Login extends Model {
  @Column
  name: string;

  @Column
  uid: string;

  @Column
  upw: string;
}