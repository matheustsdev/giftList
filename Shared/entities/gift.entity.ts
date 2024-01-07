import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "reg_gifts"})
export class Gift {
    @PrimaryGeneratedColumn("uuid")
    gift_id: string;
    
    @Column("varchar", { length: 255 })
    name: string;
    
    @Column("varchar", { length: 255 })
    image_src: string;
    
    @Column("int")
    price: number;
    
    @Column("varchar", { length: 1000, nullable: true })
    reference_url?: string;
    
    @Column("bool")
    hasPurchased: boolean;
    
    @Column("date", { nullable: true })
    purchased_date?: Date;
}