import { useState, useEffect } from "react";
import { GiftCard, SelectGiftModal, PaymenModal, ReferenceModal } from "@/molecules";
import Styled from "@/styles/pages";
import { Gift } from "@shared/entities/gift.entity";
import { StandartResponse } from "@shared/helpers/StandartResponse";
import { cinzel } from "@/app/fonts";
import { api } from "@/services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [giftsList, setGiftsList] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<Gift>({} as Gift);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSelectGiftModalOpen, setIsSelectGiftModalOpen] = useState(false);
  const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);
  
  async function getAllGifts() {
    try {
      const response = await api.get<StandartResponse<Gift>>('/gifts/available');
      
      if (response.data.status !== "SUCCESS") {
        toast.error(response.data.message);
        return;
      }
      
      setGiftsList(response.data.result);
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  
  const handleSelectGift = (gift: Gift) => {
    setSelectedGift(gift);
    setIsSelectGiftModalOpen(true);
  }
  
  const handlePaymentClick = (gift: Gift) => {
    setIsPaymentModalOpen(true);
  }
  
  const handleReferenceClick = (gift: Gift) => {
    setSelectedGift(gift);
    setIsReferenceModalOpen(true);
  }
  
  const handleOnConfirm = async () => {
    await getAllGifts();
    
    setIsSelectGiftModalOpen(false);
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
                  onPaymentClick={handlePaymentClick}
                  onReferenceClick={handleReferenceClick}
                />
              ))
            }
          </Styled.Content>
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </Styled.HomeContainer>
      <SelectGiftModal 
        isOpen={isSelectGiftModalOpen} 
        onClose={() => setIsSelectGiftModalOpen(false)}
        onConfirm={handleOnConfirm}
        gift={selectedGift} 
      />
      <PaymenModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
      <ReferenceModal 
        isOpen={isReferenceModalOpen}
        onClose={() => setIsReferenceModalOpen(false)}
        reference_url={selectedGift.reference_url}
      />
    </>
  )
}
