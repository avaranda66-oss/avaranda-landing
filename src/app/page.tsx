import { FoodShowcase } from "../components/FoodShowcase";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ReservationCTA } from "../components/ReservationCTA";
import { ServiceTiles } from "../components/ServiceTiles";
import { StoryChapters } from "../components/StoryChapters";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StoryChapters />
        <FoodShowcase />
        <ServiceTiles />
        <ReservationCTA />
      </main>
    </>
  );
}
