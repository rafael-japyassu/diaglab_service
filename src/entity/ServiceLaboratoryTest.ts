import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Client } from "./Client";
import { HealthInsurance } from "./HealthInsurance";
import { City } from "./City";
import { ServiceLaboratory } from "./ServiceLaboratory";
import { LaboratoryTest } from "./LaboratoryTest";
import { ResultQualitativeService } from "./ResultQualitativeService";

@Entity()
export class ServiceLaboratoryTest {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => Client, client => client.serivesLasboratories)
    service: ServiceLaboratory;

    @ManyToOne(type => LaboratoryTest, test => test.serviceTests)
    test: LaboratoryTest;

    @Column({
        nullable: true
    })
    image: string;

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;

    @OneToMany(type => ResultQualitativeService, testResult => testResult.serviceTest)
    resultTests: ResultQualitativeService[];
}
