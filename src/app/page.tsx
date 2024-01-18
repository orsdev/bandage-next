import { CenteredContainer } from "@/components";
import {
  FeaturedPosts,
  FeaturedProducts,
  Hero,
  OurServices,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <CenteredContainer>
        <Hero />
        <FeaturedProducts />
        <OurServices />
        <FeaturedPosts />
      </CenteredContainer>
    </>
  );
}
