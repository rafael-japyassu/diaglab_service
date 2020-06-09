import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { LaboratoryTest } from "./LaboratoryTest";

@Entity()
export class Method {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(type => LaboratoryTest, test => test.method)
    tests: LaboratoryTest[];
}