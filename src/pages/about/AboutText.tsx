import { HiOutlineMail } from 'react-icons/hi';

const AboutText = () => {
  return (
    <div className=" md:max-w-[50%] flex flex-col gap-5">
      <h2 className="  specialText text-5xl md:text-6xl">About David</h2>
      <p className="text-mutedForeground">
        David is a visual storyteller who transforms everyday moments into powerful imagery. Inspired by light,
        movement, and human connection, his photography blends creativity with authenticity, capturing not just how a
        moment looks, but how it feels. With a focus on natural expression and thoughtful composition, he creates images
        that are both visually compelling and emotionally resonant. Through his work, he consistently shares stories
        that feel raw, expressive, and unforgettable.
      </p>

      <span className=" flex items-center gap-2  font-medium text-xl ita">
        <HiOutlineMail size={25} />
        <a href="mailto:Tofaratidavid22@gmail.Com"> Info@Tofaratidavid</a>
      </span>
    </div>
  );
};
export default AboutText;
