import { NextPage } from "next";
import Card from "../components/Card";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Spinner from "../components/Spinner";

import { useFetchMovies } from "../api/fetchHooks";
import { useState } from "react";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage();
  };

  if (error) return <div>something went wrong!</div>;

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header />
      <Hero />
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
