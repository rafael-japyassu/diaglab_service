import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "../enums/enums";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        unique: true
    })
    login: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column({
        default: true
    })
    active: boolean;

    @Column()
    nickname: string;

    @Column({
        unique: true,
        nullable: true
    })
    crf: string;

    @Column({
        nullable: true
    })
    signature: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @CreateDateColumn({
        name: 'create_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt: Date;
}
