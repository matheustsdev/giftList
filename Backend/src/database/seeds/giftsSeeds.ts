import { Gift } from "@shared/entities/gift.entity";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm/data-source";

export default class GiftsSeeder implements Seeder {
    public async run (
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ) {
        const repository = dataSource.getRepository("Gift");
        
        const gifts: Gift[] = [
            {
                gift_id: "b570d438-d35f-4434-bb40-2b6eabe06c3e",
                name: "Gift 1",
                description: "Description 1",
                image_src: "https://via.placeholder.com/150",
                price: 100,
                hasPurchased: false
            },
            {
                gift_id: "f08289fd-815b-4ef1-803a-f9bcb2796674",
                name: "Gift 2",
                description: "Description 2",
                image_src: "https://via.placeholder.com/150",
                price: 200,
                hasPurchased: false
            },
            {
                gift_id: "03f7ece6-a75f-41d2-82ac-8b1ee40c09e2",
                name: "Gift 3",
                description: "Description 3",
                image_src: "https://via.placeholder.com/150",
                price: 300,
                hasPurchased: false
            },
            {
                gift_id: "fcd394ff-1e4a-4af1-ae48-882292a45063",
                name: "Gift 4",
                description: "Description 4",
                image_src: "https://via.placeholder.com/150",
                price: 400,
                hasPurchased: false
            },
            {
                gift_id: "7487deae-467f-49a8-9cd7-8a492c870430",
                name: "Gift 5",
                description: "Description 5",
                image_src: "https://via.placeholder.com/150",
                price: 500,
                hasPurchased: false
            },
            {
                gift_id: "c7e324ab-335b-4a52-a5b3-dc990c53e24b",
                name: "Gift 6",
                description: "Description 6",
                image_src: "https://via.placeholder.com/150",
                price: 600,
                hasPurchased: false
            },
            {
                gift_id: "c25ac2a8-89f5-4108-b675-24961d97632c",
                name: "Gift 7",
                description: "Description 7",
                image_src: "https://via.placeholder.com/150",
                price: 700,
                hasPurchased: false
            },
            {
                gift_id: "d19dfee1-83b9-45e1-92c5-f3dd0ce9736e",
                name: "Gift 8",
                description: "Description 8",
                image_src: "https://via.placeholder.com/150",
                price: 800,
                hasPurchased: false
            },
            {
                gift_id: "e33cb2e2-53d3-4874-a907-c0cf4e209e2a",
                name: "Gift 9",
                description: "Description 9",
                image_src: "https://via.placeholder.com/150",
                price: 900,
                hasPurchased: false
            },
            {
                gift_id: "747bebc6-7068-4b59-bee4-4dca0050c790",
                name: "Gift 10",
                description: "Description 10",
                image_src: "https://via.placeholder.com/150",
                price: 1000,
                hasPurchased: false
            }
        ];
        
        await repository.save(gifts);
    }
}