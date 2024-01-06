import { useState, useEffect } from "react";
import { GiftCard, DetailsModal } from "@/molecules";
import Styled from "@/styles/pages";
import Modal from "react-modal";
import { Gift } from "@shared/entities/gift.entity";
import { StandartResponse } from "@shared/helpers/StandartResponse";
import { cinzel } from "@/app/fonts";
import { api } from "@/services/api";
import { SelectGiftModal } from "@/molecules/SelectGiftModal";

export default function Home() {
  const [giftsList, setGiftsList] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<Gift>({} as Gift);
  const [isSelectGiftModalOpen, setIsSelectGiftModalOpen] = useState(false);

  async function getAllGifts() {
    try {
      const response = await api.get<StandartResponse<Gift>>('/gifts');
      console.log(response);
      
      setGiftsList(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }
  
  function handleSelectGift(gift: Gift) {
    setSelectedGift(gift);
    setIsSelectGiftModalOpen(true);
  }
  
  useEffect(() => {
    getAllGifts();
  }, []);

  return (
    <>
      <Styled.HomeContainer>
          <Styled.Cover>
            <Styled.TitleCard>
              <Styled.Title className={cinzel.className}>
                Lista de casa nova | Priscila e Teixeira
              </Styled.Title>
            </Styled.TitleCard>
          </Styled.Cover>
          <Styled.Content>
            {
              giftsList.map((gift) => (
                <GiftCard
                  key={gift.gift_id}
                  gift={gift}
                  onSelectGift={handleSelectGift}
                />
              ))
            }
          </Styled.Content>
      </Styled.HomeContainer>
      <SelectGiftModal isOpen={isSelectGiftModalOpen} onClose={() => setIsSelectGiftModalOpen(false)} gift={selectedGift} />
    </>
  )
}
