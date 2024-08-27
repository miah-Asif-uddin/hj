import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides ? 1 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full"
          alt="Slide 1"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle" onClick={() => setCurrentSlide(4)}>❮</a>
          <a href="#slide2" className="btn btn-circle" onClick={() => setCurrentSlide(2)}>❯</a>
        </div>
      </div>

      <div
        id="slide2"
        className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full"
          alt="Slide 2"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle" onClick={() => setCurrentSlide(1)}>❮</a>
          <a href="#slide3" className="btn btn-circle" onClick={() => setCurrentSlide(3)}>❯</a>
        </div>
      </div>

      <div
        id="slide3"
        className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
          alt="Slide 3"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle" onClick={() => setCurrentSlide(2)}>❮</a>
          <a href="#slide4" className="btn btn-circle" onClick={() => setCurrentSlide(4)}>❯</a>
        </div>
      </div>

      <div
        id="slide4"
        className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}
      >
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
          alt="Slide 4"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle" onClick={() => setCurrentSlide(3)}>❮</a>
          <a href="#slide1" className="btn btn-circle" onClick={() => setCurrentSlide(1)}>❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
