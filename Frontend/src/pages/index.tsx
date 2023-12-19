import { useState } from "react";
import { GiftCard } from "@/molecules";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
   <div className="p-4">
      <GiftCard
        name="Amazon Alexa"
        description="Smart Speaker"
        imageSrc="/imgs/products/alexa.jpg"
        value={10000}
        onClick={() => setIsOpen(true)}
      />
   </div>
  )
}
