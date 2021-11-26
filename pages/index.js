import Head from 'next/head';
import GameIntro from '../components/GameIntro/GameIntro';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <GameIntro />
    </>
  );
}
