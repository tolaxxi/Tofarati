import { FaQuoteLeft } from 'react-icons/fa6';

interface testimonialCardType {
  text: string;
  name: string;
}
const TestimonialCard = ({ text, name }: testimonialCardType) => {
  return (
    <div className="bg-white border  border-gray-200  max-w-xs  rounded-3xl p-10 flex flex-col justify-center items-start gap-5 shadow-2xl h-75 hover:scale-110">
      <span className="text-gray-400  bg-gray-100 p-2 text-2xl rounded-full">
        <FaQuoteLeft />
      </span>

      <div className="font-medium ">
        <p>{text}</p>
      </div>
      <div className="text-gray-400 text-lg italic">
        <h2>{name}</h2>
      </div>
    </div>
  );
};
export default TestimonialCard;
