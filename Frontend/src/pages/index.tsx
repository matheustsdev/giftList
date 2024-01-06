import { useState, useEffect } from "react";
import { GiftCard, DetailsModal } from "@/molecules";
import Styled from "@/styles/pages";
import Modal from "react-modal";
import { Gift } from "@/types";
import { cinzel } from "@/app/fonts";

const gift: Gift = {
  name: "Amazon Alexa",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl nec nisl.",
  image_src: "/imgs/products/alexa.jpg",
  price: 10000,
  link: "https://www.amazon.com.br/Amazon-Echo-Dot-4%C2%AA-Gera%C3%A7%C3%A3o/dp/B084DWH3YF/ref=sr_1_1?dchild=1&keywords=alexa&qid=1632086597&sr=8-1"
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {console.log(isOpen)}, [isOpen]);

  return (
   <Styled.HomeContainer>
      <Styled.Cover>
        <Styled.TitleCard>
          <Styled.Title className={cinzel.className}>
            Lista de casa nova | Priscila e Teixeira
          </Styled.Title>
        </Styled.TitleCard>
      </Styled.Cover>
      <Styled.Content>
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
        <GiftCard
          name="Amazon Alexa"
          description="Smart Speaker"
          imageSrc="/imgs/products/alexa.jpg"
          value={10000}
          onClick={() => setIsOpen(true)}
        />
      </Styled.Content>
   </Styled.HomeContainer>
  )
}
