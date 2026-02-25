import WhyText from './WhyText';
import WhyImg from './WhyImg';

const Why = () => {
  return (
    <>
      <section className="bg-captureBackground  text-white justify-center  gap-10 items-center md:py-40 py-20 flex flex-col md:flex-row w-full  px-3 ">
        <WhyText />
        <WhyImg />
      </section>
    </>
  );
};
export default Why;
