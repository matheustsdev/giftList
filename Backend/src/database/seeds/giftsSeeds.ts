import { Gift } from "@shared/entities/gift.entity";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm/data-source";

export default class GiftsSeeder implements Seeder {
    public async run (
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ) {
        const repository = dataSource.getRepository("Gift");
        
        const gifts: Omit<Gift, "gift_id">[] = [
            {
                name: "batedeira",
                reference_url: "https://www.amazon.com.br/Batedeira-Pr%C3%A1tica-Black-Preta-Mondial/dp/B08BXBFCTN/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=M50VYFJUZ2GG&keywords=batedeira&qid=1704494825&sprefix=batedeira%2Caps%2C1306&sr=8-3&th=1",
                price: 8990,
                image_src: "batedeira.jpg",
                hasPurchased: false
              },
              {
                name: "faqueiro",
                reference_url: "https://www.amazon.com.br/Facas-Tramontina-Plenus-L%C3%A2minas-Polipropileno/dp/B07WR4TP9W/ref=sr_1_20?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3AVJ4EN90KASF&keywords=faqueiro&qid=1704494956&sprefix=faca+para+cortar+carne%2Caps%2C3096&sr=8-20",
                price: 7505,
                image_src: "faqueiro.jpg",
                hasPurchased: false
              },
              {
                name: "pratos",
                price: 13600,
                image_src: "prato.jpg",
                hasPurchased: false
              },
              {
                name: "xícaras",
                reference_url: "https://www.amazon.com.br/Xicara-Colorida-Porcelana-Pires-Madeira/dp/B0CCZ38GBV/ref=sr_1_5?crid=CS6NK80CNL4L&keywords=conjunto%2Bde%2Bxicaras%2Bde%2Bcaf%C3%A9&qid=1704495903&sprefix=conjunto%2Bde%2Bx%2Caps%2C201&sr=8-5&th=1",
                price: 8460,
                image_src: "xicara.jpg",
                hasPurchased: false
              },
              {
                name: "taças",
                reference_url: "https://www.amazon.com.br/Jogo-Ta%C3%A7as-Vidro-Diamond-Transparente/dp/B09QT9KLM8/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=23TH4WRLJQO84&keywords=ta%C3%A7as&qid=1704495734&sprefix=ta%2Caps%2C341&sr=8-7",
                price: 5600,
                image_src: "taca.jpg",
                hasPurchased: false
              },
              {
                name: "sanduicheira",
                reference_url: "https://www.amazon.com.br/Sanduicheira-El%C3%A9trica-Cadence-Click-127V/dp/B0CDJ4L7CZ/ref=sr_1_7?crid=YTOCCGRC70OP&keywords=sanduicheira&qid=1704495650&sprefix=sanf%2Caps%2C524&sr=8-7&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
                price: 13500,
                image_src: "sanduicheira.jpg",
                hasPurchased: false
              },
              {
                name: "liquidificador",
                reference_url: "https://www.amazon.com.br/Liquidificador-Mondial-L-99-FB-127V/dp/B07QKN5NF1/ref=pd_bxgy_img_d_sccl_1/134-5430209-9794539?pd_rd_w=6Buwb&content-id=amzn1.sym.758f3509-df88-4265-806c-565a738dc05d&pf_rd_p=758f3509-df88-4265-806c-565a738dc05d&pf_rd_r=6WYS4YXWD10Z0729ZSCB&pd_rd_wg=U2ziI&pd_rd_r=8996a239-ed04-4661-a095-59fccfacaa26&pd_rd_i=B07QKN5NF1&th=1",
                price: 11210,
                image_src: "liquidificador.jpg",
                hasPurchased: false
              },
              {
                name: "ventilador",
                reference_url: "https://www.amazon.com.br/Ventilador-Mallory-controle-Sil%C3%AAncio-Eleg%C3%A2ncia/dp/B0BTQXKGPK/ref=pd_rhf_dp_s_ci_mcx_mr_hp_d_d_sccl_1_6/134-5430209-9794539?pd_rd_w=yNpKL&content-id=amzn1.sym.1d197d3f-52b3-48f9-8e03-2918da01793e:amzn1.symc.4d67cb82-b560-48ed-9497-a0a2a821f019&pf_rd_p=1d197d3f-52b3-48f9-8e03-2918da01793e&pf_rd_r=76MMW8VZKVGB61BPS1BM&pd_rd_wg=9dA5m&pd_rd_r=6309b15d-34b7-408a-9495-0682a0a1fa8e&pd_rd_i=B0BTQXKGPK&psc=1",
                price: 32990,
                image_src: "ventilador.jpg",
                hasPurchased: false
              },
              {
                name: "potes herméticos",
                reference_url: "https://shopee.com.br/Potes-de-Vidro-de-Mantimentos-com-Tampa-de-Bambu-11-P%C3%A7s-Oikos-i.752849300.16462862610?sp_atk=d7534416-e50a-4cc6-8402-7a24eea812af&xptdk=d7534416-e50a-4cc6-8402-7a24eea812af",
                price: 29990,
                image_src: "potes-hermeticos.jpeg",
                hasPurchased: false
              },
              {
                name: "cafeteira",
                reference_url: "https://www.amazon.com.br/Electrolux-ECM10-Cafeteira/dp/B09CB7MJMX/ref=sr_1_5?crid=1SJI7JGZB7HPL&keywords=cafeteira%2Beletrica&qid=1704496582&sprefix=cafete%2Caps%2C598&sr=8-5&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9&th=1",
                price: 13900,
                image_src: "cafeteira.jpg",
                hasPurchased: false
              },
              {
                name: "espelho",
                reference_url: "https://shopee.com.br/1-peca-espelho-semicircular-arqueado-de-corpo-inteiro(enviado-em-24-horas)-i.1024716569.22491661485?sp_atk=37175650-d911-422a-b099-4ff581740407&xptdk=37175650-d911-422a-b099-4ff581740407",
                price: 19999,
                image_src: "espelho.jpeg",
                hasPurchased: false
              },
              {
                name: "jogo de cama",
                price: 15000,
                image_src: "jogo-cama.jpg",
                hasPurchased: false
              },
              {
                name: "manta",
                reference_url: "https://www.amazon.com.br/Cobertor-Blanket-300-Toque-Cinza/dp/B09HHLRBCD/ref=coffee_espresso_home_d_sccl_3_11/134-5430209-9794539?pd_rd_w=mIMaZ&content-id=amzn1.sym.4cfe2d17-1eb6-47d3-8fdb-a01bd3f60828&pf_rd_p=4cfe2d17-1eb6-47d3-8fdb-a01bd3f60828&pf_rd_r=JHE4M0ST95PG61KYXBG5&pd_rd_wg=R9Fj9&pd_rd_r=69ffbaa9-9a9b-4ba1-b38a-d2eb63959e0f&pd_rd_i=B09HHLRBCD&psc=1",
                price: 14900,
                image_src: "manta.jpg",
                hasPurchased: false
              },
              {
                name: "rede",
                reference_url: "https://www.amazon.com.br/Rede-Dormir-Tambaba-Life-Franjas/dp/B08GKZK1KR/ref=sr_1_17?crid=GYX91U17F0G3&keywords=rede+de+dormir&qid=1704587159&sprefix=rede%2Caps%2C393&sr=8-17",
                price: 10000,
                image_src: "rede.jpg",
                hasPurchased: false
              },
              {
                name: "cesto de roupa suja",
                reference_url: "https://www.amazon.com.br/Mimo-Style-Lavanderia-Banheiro-Remov%C3%ADvel/dp/B087X9W1QQ/ref=sr_1_6?keywords=cesto+de+roupa+suja+bambu+grande&qid=1704497594&sr=8-6&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
                price: 13495,
                image_src: "cesto.jpg",
                hasPurchased: false
              },
              {
                name: "ferro de engomar",
                reference_url: "https://www.amazon.com.br/Ferro-Metalico-Black-Decker-Preto/dp/B076151Z3M/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=19ERRKBN0PHZD&keywords=ferro+de+engomar&qid=1704497560&s=kitchen&sprefix=ferro+de+engom%2Ckitchen%2C340&sr=1-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
                price: 13161,
                image_src: "ferro.jpg",
                hasPurchased: false
              },
              {
                name: "air fryer",
                reference_url: "https://www.amazon.com.br/Fritadeira-sem-%C3%93leo-Mondial-Preto/dp/B07TZXSRBD/ref=pd_lpo_sccl_3/141-1176856-7805633?pd_rd_w=h92po&content-id=amzn1.sym.a30de6c8-8bc4-4cea-bc41-49d24a22e2dd&pf_rd_p=a30de6c8-8bc4-4cea-bc41-49d24a22e2dd&pf_rd_r=386Z5W5Z6QKENGNVQH0C&pd_rd_wg=nTLXy&pd_rd_r=4ca680df-9caa-40bc-9a9e-f16a7b9a6b33&pd_rd_i=B07TZXSRBD&th=1",
                price: 26774,
                image_src: "airfryer.jpg",
                hasPurchased: false
              },
              {
                name: "Kit 1",
                reference_url: "https://shopee.com.br/Abridor-De-Latas-E-Garrafas-A%C3%A7o-Inox-Profissional-Casa-Envio-Imediato-i.390833344.11865356821?sp_atk=5a3183d7-4659-477e-bfe8-e107ff848835&xptdk=5a3183d7-4659-477e-bfe8-e107ff848835 https://www.amazon.com.br/Mimo-Style-A%C3%A7ucareiro-Borossilicato-Condimentos/dp/B08PDQ12XH/ref=pd_day0_d_sccl_3_1/134-5430209-9794539?pd_rd_w=BINCe&content-id=amzn1.sym.f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_p=f8fbb395-09a0-46a4-a17c-8f7cd5155e6a&pf_rd_r=3FAE5GGNY2R1VABZZ8K2&pd_rd_wg=U8dnA&pd_rd_r=e3b0039a-543f-475a-85ca-d5e26817423f&pd_rd_i=B08PDQ12XH&psc=1 https://www.amazon.com.br/home-style-300032980-Saleiro-Bambus/dp/B0CD2YFZCK/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=saleiro&qid=1704495073&sr=8-7",
                price: 17836,
                image_src: "kit1.png",
                hasPurchased: false
              },
              {
                name: "Kit 2",
                reference_url: "https://shopee.com.br/Escorredor-Pia-Bancada-Cozinha-Preto-Porta-Copos-Pratos-Talher-i.497699640.11323830616?sp_atk=0951cb08-6dd3-4977-a8e3-784dfd590219&xptdk=0951cb08-6dd3-4977-a8e3-784dfd590219 https://www.amazon.com.br/Conjunto-Peneiras-Coador-Inox-12cm/dp/B0CM252DFN/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=J0EBPO606VIF&keywords=peneira&qid=1704496190&sprefix=peneir%2Caps%2C292&sr=8-5 https://www.amazon.com.br/T%C3%A1bua-Retangular-Bamboo-Mor-35/dp/B076X5ZLZQ/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2KXJPRSY58F0N&keywords=tabua+de+corte+bambu&qid=1704496263&sprefix=tabua+de+cortebambu%2Caps%2C502&sr=8-5 https://www.amazon.com.br/Lixeira-com-Pedal-Trium-Cinza/dp/B09SZQVH8Y/ref=sr_1_15?crid=1NB6I7RQC8T8X&keywords=lixeira%2Bcozinha&qid=1704496686&sprefix=lixeir%2B%2Caps%2C418&sr=8-15&th=1",
                price: 23122,
                image_src: "kit2.png",
                hasPurchased: false
              },
              {
                name: "Kit 3",
                reference_url: "https://www.amazon.com.br/Ralador-Faces-Mimo-Style-ASA1176/dp/B076JJ1RBJ/ref=sr_1_6?crid=2OOBR7D2SKYIJ&keywords=ralador&qid=1704496647&sprefix=ralad%2Caps%2C382&sr=8-6 https://shopee.com.br/Kit-Funil-Com-3-Funis-Em-Material-Resistente-Envio-Imediato-i.341209981.8023099661?sp_atk=033b98d4-3d0e-41af-8ed7-64406d392a7a&xptdk=033b98d4-3d0e-41af-8ed7-64406d392a7a https://shopee.com.br/Descascador-Fatiador-De-Legumes-Frutas-3-L%C3%A2minas-15cm-3-Em-1-i.771538494.18802434906?sp_atk=85021ea0-4883-4aab-9261-16a4eafe105f&xptdk=85021ea0-4883-4aab-9261-16a4eafe105f",
                price: 5698,
                image_src: "kit3.png",
                hasPurchased: false
              },
              {
                name: "Kit 4",
                price: 15000,
                image_src: "kit4.png",
                hasPurchased: false
              },
              {
                name: "Kit 5",
                reference_url: "https://www.amazon.com.br/Lixeira-com-Pedal-Trium-Cinza/dp/B09SZQVH8Y/ref=sr_1_15?crid=1NB6I7RQC8T8X&keywords=lixeira%2Bcozinha&qid=1704496686&sprefix=lixeir%2B%2Caps%2C418&sr=8-15&th=1",
                price: 18690,
                image_src: "kit5.png",
                hasPurchased: false
              },
              {
                name: "Kit 6",
                reference_url: "https://www.amazon.com.br/Conjunto-Cabides-Veludo-Gancho-OIKOS/dp/B084R9QNGQ?ref_=ast_sto_dp&th=1&psc=1 https://www.amazon.com.br/com-Al%C3%A7a-Articul%C3%A1vel-Plas%C3%BAtil-Preto/dp/B07DR4DY2C/ref=sr_1_10?crid=QMAFR86R4QZ1&keywords=p%C3%A1+de+lixo&qid=1704497628&sprefix=p%C3%A1+%2Caps%2C824&sr=8-10",
                price: 6980,
                image_src: "kit6.png",
                hasPurchased: false
              },
              {
                name: "Kit 7",
                price: 5500,
                image_src: "kit7.png",
                hasPurchased: false
              }
        ];
        
        await repository.save(gifts);
    }
}

