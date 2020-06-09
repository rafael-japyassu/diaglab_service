import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, Column } from "typeorm";
import { ServiceLaboratoryTest } from "./ServiceLaboratoryTest";
import { UnitMeasurament } from "./UnitMeasurament";

@Entity()
export class ResultQuantitativeService {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(type => ServiceLaboratoryTest, serviceTest => serviceTest.resultTests)
    serviceTest: ServiceLaboratoryTest;

    @ManyToOne(type => UnitMeasurament, unit => unit)
    unit: UnitMeasurament;

    @Column({
        name: 'result'
    })
    numberResult: number;

    @Column({
        name: 'reference_interval_initial'
    })
    referenceIntervalInitial: number;

    @Column({
        name: 'reference_interval_final'
    })
    referenceIntervalFinal: number;

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;
}
