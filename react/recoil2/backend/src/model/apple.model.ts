import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: "recoilproject",
  timestamps: true,
  paranoid: true
})
export class Login extends Model {

  @Column
  uid: string;

  @Column
  upw: string;
}