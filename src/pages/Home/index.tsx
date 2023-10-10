import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Footer } from "../../components/footer";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";

function Home()  {
  const [activyColor, setActivyColor] = useState(false);

  useEffect(function () {
    function posicionScroll() {
      if (window.scrollY > 10) {
        setActivyColor(true);
      } else {
        setActivyColor(false);
      }
    }
    window.addEventListener("scroll", posicionScroll);
  }, []);

  return (
    <>
    <Container maxWidth="lg">
      <Header action={activyColor}/>
      <Section />
    </Container>
    <Footer />
    </>
  );
};

export { Home };