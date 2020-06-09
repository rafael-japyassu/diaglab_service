import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ServiceLaboratory } from "./ServiceLaboratory";

@Entity()
export class HealthInsurance {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(type => ServiceLaboratory, service => service.healthInsurance)
    serivesLasboratories: ServiceLaboratory[];
}