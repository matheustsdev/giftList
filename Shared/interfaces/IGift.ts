export interface IGift {
    gift_id: string;
    name: string;
    image_src: string;
    price: number;
    reference_url?: string;
    hasPurchased: boolean;
    purchased_date?: Date;
}