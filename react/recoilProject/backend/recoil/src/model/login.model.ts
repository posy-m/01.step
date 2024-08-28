
import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: "recoillogin",
  timestamps: true,
  paranoid: true
})
export class Login extends Model {

  @Column
  uid: string;

  @Column
  upw: string;
}