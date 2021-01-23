import * as React from "react";

import DefaultLayout from "@/layouts/DefaultLayout";
import Carousel from "@/components/Carousel";
import NavigationGrid from "@/components/NavigationGrid";
import Container from "@/components/Container";

const Home: React.FC = () => {
  return (
    <DefaultLayout title="Home">
      <div className="w-full h-auto md:h-screen">
        <Carousel />
      </div>
      <Container>
        <NavigationGrid />
      </Container>
    </DefaultLayout>
  );
};

export default Home;
