import AboutImg from './AboutImg';
import AboutText from './AboutText';

const About = () => {
  return (
    <>
      <section
        className=" bg-white  flex-col md:flex-row flex items-center md:py-40 py-20 justify-center  gap-5 md:gap-20 px-5"
        id="about"
      >
        <AboutImg />
        <AboutText />
      </section>
    </>
  );
};
export default About;
