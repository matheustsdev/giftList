import { Injectable } from '@nestjs/common';
import { EResponseStatus } from "src/constants/EResponseStatus";
import { StandartResponse } from "src/helpers/StandartResponse";
import { Stripe } from "stripe";

@Injectable()
export class PaymentsService {
    _stripe: Stripe;
    
    constructor() {
        this._stripe = new Stripe(process.env.PRIVATE_KEY_STRIPE);
    }
    
    async test() {
        try {
            const stripe = new Stripe(process.env.PRIVATE_KEY_STRIPE);
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: "price_1OUI4yDstwpWrXvr3oAmUel0",
                        quantity: 1,
                    }
                ],
                mode: "payment",
                success_url: "https://stripe.com/docs/checkout/quickstart",
                cancel_url: "https://stripe.com/docs/libraries/stripejs-esmodule?locale=pt-BR"
                
            });
            
            return new StandartResponse([session], EResponseStatus.SUCCESS);
        } catch (e) {
            return new StandartResponse([], EResponseStatus.ERROR, e.message);
        }
        
        
    }
}