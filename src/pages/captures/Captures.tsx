import Carousel from "./carousel/Carousel";

const Captures = () => {
  return (
    <>
      {/* <div className="skew-c"></div> */}
      <section className="text-6xl text-center  bg-captureBackground flex flex-col justify-center items-center text-white  md:py-40 py-20 gap-7">
        <h1 className="specialText text-5xlb md:text-6xl">My Captures</h1>
        <Carousel />
      </section>
    </>
  );
};
export default Captures;
