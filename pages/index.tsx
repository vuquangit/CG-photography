import * as React from "react";

import DefaultLayout from "@/layouts/DefaultLayout";
import Carousel from "@/components/Carousel";
import NavigationGrid from "@/components/NavigationGrid";
import Container from "@/components/Container";

import axios from "axios";
// import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const HomePage: React.FC = () => {
  // const { data, error } = useSWR('/api/people', fetcher)

  // console.log('data', data);
  // console.log('error', error);

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

export default HomePage
