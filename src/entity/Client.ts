import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Gender } from "../enums/enums";
import { ServiceLaboratory } from "./ServiceLaboratory";

@Entity()
export class Client {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cpfCnpj: string;

    @Column()
    email: string;

    @Column({
        nullable: true
    })
    phone: string;

    @Column()
    cellphone: string;

    @Column({
        nullable: true
    })
    birthDate: Date;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.MALE
    })
    gender: Gender;

    @Column()
    momName: string;

    @Column({
        nullable: true
    })
    dadName: string;

    @Column({
        name: "zip_code"
    })
    zipCode: string;

    @Column({
        length: 2
    })
    state: string;

    @Column()
    city: string;

    @Column()
    district: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column({
        nullable: true
    })
    complement: string;

    @Column({
        nullable: true
    })
    image: string;

    @Column({
        nullable: true
    })
    code: string;

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;

    @OneToMany(type => ServiceLaboratory, service => service.client)
    serivesLasboratories: ServiceLaboratory[];
}
