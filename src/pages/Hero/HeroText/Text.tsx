import { HiOutlineMail } from 'react-icons/hi';
import { mail } from './constant';

const Text = () => {
  return (
    <section className="  flex flex-col gap-5 md:max-w-[40%] ">
      <p className="text-2xl">Hello! I'm</p>
      <h1 className="specialText text-7xl">
        Tayo-Lawal <br /> Tofarati David
      </h1>
      <p className="text-xl">Photographer And Storyteller</p>
      <p className=" text-lg text-mutedForeground">
        specializing in portrait and lifestyle photography, regularly sharing compelling visual stories that capture
        authentic emotion and detail.
      </p>

      <span className=" flex items-center gap-2 mt-10 font-medium text-xl ita">
        <HiOutlineMail size={25} />
        <a href="mailto:Tofaratidavid22@gmail.Com"> Info@Tofaratidavid</a>
      </span>
    </section>
  );
};
export default Text;
