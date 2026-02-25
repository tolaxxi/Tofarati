import Text from './HeroText/Text';
import HeroImg from './HeroImg/HeroImg';

const Hero = () => {
  return (
    <main className="mb-10">
      <section className="px-10 md:px-20 pt-10 flex-col md:flex-row flex justify-between gap-15 md:h-screen">
        <Text />
        <HeroImg />
      </section>
    </main>
  );
};
export default Hero;
