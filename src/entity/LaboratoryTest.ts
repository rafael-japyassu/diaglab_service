import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { SampleType } from "./SampleType";
import { Method } from "./Method";
import { ServiceLaboratoryTest } from "./ServiceLaboratoryTest";
import { ServiceLaboratory } from "./ServiceLaboratory";

@Entity()
export class LaboratoryTest {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        default: 0
    })
    value: number;

    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @ManyToOne(type => SampleType, sampleType => sampleType.tests)
    sampleType: SampleType;

    @ManyToOne(type => ServiceLaboratory, service => service.tests)
    service: ServiceLaboratory;

    @ManyToOne(type => Method, method => method.tests)
    method: Method;

    @Column({
        name: 'results_number'
    })
    resultsNumber: number;

    @Column({
        default: true
    })
    isQualitative: boolean;

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;

    @OneToMany(type => ServiceLaboratoryTest, test => test.test)
    serviceTests: ServiceLaboratoryTest[];
}
