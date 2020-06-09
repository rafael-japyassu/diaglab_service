import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Client } from "./Client";
import { HealthInsurance } from "./HealthInsurance";
import { City } from "./City";
import { ServiceLaboratoryTest } from "./ServiceLaboratoryTest";
import { LaboratoryTest } from "./LaboratoryTest";

@Entity()
export class ServiceLaboratory {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Client, client => client.serivesLasboratories)
    client: Client;

    @ManyToOne(type => HealthInsurance, healthInsurance => healthInsurance.serivesLasboratories)
    healthInsurance: HealthInsurance;

    @ManyToOne(type => City, city => city.serivesLasboratories)
    city: City;

    @Column({
        default: true
    })
    editable: boolean;

    @Column({
        nullable: true
    })
    report: string;

    @Column({
        unique: true
    })
    protocol: string;

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;

    @OneToMany(type => ServiceLaboratoryTest, test => test.service)
    serviceTests: ServiceLaboratoryTest[];

    @OneToMany(type => LaboratoryTest, service => service.service)
    tests: LaboratoryTest[];
}
