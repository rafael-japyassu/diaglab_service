import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ServiceLaboratory } from "./ServiceLaboratory";

@Entity()
export class City {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(type => ServiceLaboratory, service => service.city)
    serivesLasboratories: ServiceLaboratory[];
}