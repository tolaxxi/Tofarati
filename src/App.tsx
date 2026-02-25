import Navbar from './components/Navbar/Navbar';
import About from './pages/about/About';
import Captures from './pages/captures/Captures';
import Hero from './pages/Hero/Hero';
import Testimonial from './pages/testimonials/Testimonial';
import Why from './pages/why/Why';

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Captures />
      <About/>
      <Why />
      <Testimonial/>
    </main>
  );
};
export default App;
