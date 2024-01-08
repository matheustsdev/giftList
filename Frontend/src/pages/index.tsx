import { useState, useEffect } from "react";
import Head from "next/head";
import { GiftCard, SelectGiftModal, PaymenModal, ReferenceModal } from "@/molecules";
import Styled from "@/styles/pages";
import { IGift } from "@shared/interfaces/IGift";
import { StandartResponse } from "@shared/helpers/StandartResponse";
import { cinzel } from "@/app/fonts";
import { api } from "@/services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [giftsList, setGiftsList] = useState<IGift[]>([]);
  const [selectedGift, setSelectedGift] = useState<IGift>({} as IGift);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSelectGiftModalOpen, setIsSelectGiftModalOpen] = useState(false);
  const [isReferenceModalOpen, setIsReferenceModalOpen] = useState(false);
  
  async function getAllGifts() {
    try {
      const response = await api.get<StandartResponse<IGift>>('/gifts/available');
      
      if (response.data.status !== "SUCCESS") {
        toast.error(response.data.message);
        return;
      }
      
      setGiftsList(response.data.result);
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  
  const handleSelectGift = (gift: IGift) => {
    setSelectedGift(gift);
    setIsSelectGiftModalOpen(true);
  }
  
  const handlePaymentClick = (gift: IGift) => {
    setIsPaymentModalOpen(true);
  }
  
  const handleReferenceClick = (gift: IGift) => {
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
      <Head>
        <title>Chá de casa nova | Priscila e Teixeira</title>
      </Head>
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
