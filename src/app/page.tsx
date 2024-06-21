import { AvaliacaoClientes } from "@/_compoents/AvaliacaoClientes";
import { Banner } from "@/_compoents/Banner";
import { CarrosDestaque } from "@/_compoents/CarrosDestaque";
import { Footer } from "@/_compoents/Footer";
import { HeaderPage } from "@/_compoents/Header";
import { VenderCarro } from "@/_compoents/VenderCarro";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <Banner />
      <CarrosDestaque />
      <VenderCarro />
      <AvaliacaoClientes />
      <Footer />
    </div>
  );
}
