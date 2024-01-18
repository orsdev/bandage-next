import { CenteredContainer } from "@/components";
import { FeaturedProducts, Hero, OurServices } from "@/components/home";

export default function Home() {
  return (
    <>
      <CenteredContainer>
        <Hero />
        <FeaturedProducts />
        <OurServices />
      </CenteredContainer>
    </>
  );
}
