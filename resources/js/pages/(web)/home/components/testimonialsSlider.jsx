import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Slider from 'react-slick';

const testimonials = [
    {
        name: 'Mohan Sharma',
        image: 'https://raghumahostels.com/build/assets/testimonial-BAfsYmBF.png',
        message:
            'Best hostel in greater Noida, in food quality my friend are their once I have tested food that was very testy even I suggest to my collogues once must visit Raghuma Boys Hostel when any one search hostel in greater Noida. Choosing Raghuma Hostel has truly been one of the best decisions of my student life. From the moment I moved in, I felt like I was part of a big, welcoming family.',
    },
    {
        name: 'Krishna Taigor',
        image: 'https://raghumahostels.com/build/assets/testimonial-BAfsYmBF.png',
        message:
            'The facilities here are amazing. The rooms are spacious and comfortable, providing the perfect environment for both studying and relaxing. Plus, having access to amenities like the gym and laundry services right on site has made my life so much easier. Living at Raghuma Hostel has truly been a game-changer for me as a student. From the moment I stepped through the doors, I felt welcomed and embraced by the vibrant community that thrives here.',
    },
];

const SliderArrow = ({ direction, onClick }) => (
    <span
        onClick={onClick}
        className={`absolute top-1/2 cursor-pointer ${
            direction === 'prev' ? 'left-[10px] rotate-180' : 'right-[10px]'
        } aspect-square h-[28px] -translate-y-1/2 rounded-full bg-white/70 text-black opacity-0 transition-all duration-300 group-hover:opacity-100`}
    >
        <ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px]" />
    </span>
);

const CustomDots = ({ dots, className }) => (
    <div
        className={`absolute right-0 bottom-[20px] left-0 m-auto flex w-max items-center justify-center rounded-[20px] bg-black/5 p-[10px] backdrop-blur-[1px] ${className}`}
    >
        <ul className="flex items-center justify-center gap-[4px]">{dots}</ul>
    </div>
);

const CustomPagingDot = () => <span className="flex h-[7px] w-[7px] cursor-pointer items-center justify-center"></span>;

const Slide = ({ image, name, message, className }) => {
    return (
        <div className={`container mx-auto flex h-max flex-col gap-2 md:h-[400px] md:flex-row ${className}`}>
            <div className="flex w-full items-center justify-center">
                <div
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                    className="aspect-square h-[310px] overflow-hidden rounded-full bg-cover bg-center bg-no-repeat shadow-[1px_3px_10px_#6f6f6f]"
                ></div>
            </div>
            <div className={`flex w-full flex-col items-center gap-2 py-18 md:items-start`}>
                <h3 className="text-cred w-3/4 text-[20px] font-[600]">{name}</h3>
                <p className="w-3/4 font-[500]">{message}</p>
            </div>
        </div>
    );
};

const TestimonialsSlider = ({ height = 450, autoplay = true, autoplaySpeed = 5000, showArrows = true, showDots = true, sliderProps = {} }) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: showDots,
        dotsClass: `slick-dots dot-indicator`,
        arrows: false,
        infinite: true,
        autoplay,
        pauseOnHover: true,
        autoplaySpeed,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        appendDots: (dots) => <CustomDots dots={dots} />,
        customPaging: () => <CustomPagingDot />,
        ...sliderProps,
    };

    return (
        <div className={`rounded-0 group relative h-full overflow-hidden`}>
            <Slider ref={sliderRef} {...settings}>
                {testimonials &&
                    testimonials.map((testimonial, index) => (
                        <Slide key={index} image={testimonial.image} name={testimonial.name} message={testimonial.message} height={height} />
                    ))}
            </Slider>

            {showArrows && (
                <>
                    <SliderArrow direction="prev" onClick={() => sliderRef?.current?.slickPrev()} />
                    <SliderArrow direction="next" onClick={() => sliderRef?.current?.slickNext()} />
                </>
            )}
        </div>
    );
};

export default TestimonialsSlider;
