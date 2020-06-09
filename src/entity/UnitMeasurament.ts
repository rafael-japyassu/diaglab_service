import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UnitMeasurament {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;
}