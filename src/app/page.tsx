import { CenteredContainer } from "@/components";
import { FeaturedProducts, Hero } from "@/components/home";

export default function Home() {
  return (
    <>
      <CenteredContainer>
        <Hero />
        <FeaturedProducts />
      </CenteredContainer>
    </>
  );
}
