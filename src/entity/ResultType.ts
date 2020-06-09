import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ResultQualitativeService } from "./ResultQualitativeService";

@Entity()
export class ResultType {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(type => ResultQualitativeService, testResult => testResult.resultType)
    resultTests: ResultQualitativeService[];
}