import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { ServiceLaboratoryTest } from "./ServiceLaboratoryTest";
import { ResultType } from "./ResultType";

@Entity()
export class ResultQualitativeService {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(type => ServiceLaboratoryTest, serviceTest => serviceTest.resultTests)
    serviceTest: ServiceLaboratoryTest;

    @ManyToOne(type => ResultType, resulType => resulType.resultTests)
    resultType: ResultType;

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;
}
