import { testimonial } from './constant';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return (
    <>
      <div className="flex gap-10 justify-center flex-col md:flex-row items-center px-3 md:py-40 py-20">
        {testimonial.map(({ desc, name }) => {
          return <TestimonialCard text={desc} name={name} />;
        })}
      </div>
    </>
  );
};
export default Testimonial;
