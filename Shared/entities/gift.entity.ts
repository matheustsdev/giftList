import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "reg_gifts"})
export class Gift {
    @PrimaryGeneratedColumn("uuid")
    gift_id: string;
    
    @Column("varchar", { length: 255 })
    name: string;
    
    @Column("varchar", { length: 255 })
    description: string;
    
    @Column("varchar", { length: 255 })
    image_src: string;
    
    @Column("int")
    price: number;
    
    @Column("bool")
    hasPurchased: boolean;

    @Column("varchar", { length: 255 })
    purchasedBy: string;
    
    @Column("date")
    purchased_date: Date;
}