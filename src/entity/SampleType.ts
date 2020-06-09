import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { LaboratoryTest } from "./LaboratoryTest";
import { type } from "os";

@Entity()
export class SampleType {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(type => LaboratoryTest, test => test.sampleType)
    tests: LaboratoryTest[];

}