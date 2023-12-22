import { Card } from "@/atoms";
import { utils } from "@/utils";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import Styled from "./styles";

interface IGiftCardProps {
    name: string;
    description: string;
    imageSrc: string;
    value: number;
    onClick(): void;
}

export function GiftCard({ name, description, imageSrc, value, onClick }: IGiftCardProps) {
    return (
        <Card>
            <Styled.Container>
                <Styled.Image src={imageSrc} alt="placeholder" className="object-contain h-24 rounded-l-lg" />
                <Styled.Content className="flex items-center justify-between w-72 h-full p-2">
                    <h2>{name}</h2>
                    <span>{utils.convertMoney(value)}</span>
                </Styled.Content>
                <ChevronRightIcon className="w-6 cursor-pointer" onClick={onClick} />
            </Styled.Container>
        </Card> 
    )
    
}