import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

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
        className={`absolute right-0 bottom-[20px] left-0 m-auto flex w-max items-center justify-center rounded-[20px] bg-white p-[10px] ${className}`}
    >
        <ul className="flex items-center justify-center gap-[4px]">{dots}</ul>
    </div>
);

const CustomPagingDot = () => <span className="flex h-[7px] w-[7px] cursor-pointer items-center justify-center"></span>;

const ImageSlide = ({ image, index, borderRadius, height, className }) => {
    const imageContainerClasses = `overflow-hidden rounded-[${borderRadius}] ${className}`;
    const imageClasses = `h-full overflow-hidden bg-cover bg-no-repeat bg-center`;

    const [computedHeight, setComputedHeight] = useState(height);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setComputedHeight('380px');
            } else {
                setComputedHeight(height);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [height]);

    return (
        <div key={index} className={imageContainerClasses}>
            <div
                className={imageClasses}
                style={{
                    height: computedHeight,
                    backgroundImage: `url(${image})`,
                }}
            ></div>
        </div>
    );
};

const ImageSlider = ({
    images = [],
    isFeatured = false,
    href,
    borderRadius = '8px',
    height = 450,
    className = '',
    imageClassName = '',
    dotsClassName = '',
    autoplay = true,
    autoplaySpeed = 7000,
    showArrows = true,
    showDots = true,
    sliderProps = {},
}) => {
    const sliderRef = useRef(null);

    const settings = {
        dots: showDots,
        dotsClass: `slick-dots dot-indicator ${dotsClassName}`,
        arrows: false,
        infinite: true,
        autoplay,
        pauseOnHover: true,
        autoplaySpeed,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        appendDots: (dots) => <CustomDots dots={dots} className={dotsClassName} />,
        customPaging: () => <CustomPagingDot />,
        ...sliderProps,
    };

    return (
        <div className={`relative h-full overflow-hidden rounded-[${borderRadius}] group ${className}`}>
            <Slider ref={sliderRef} {...settings}>
                {images &&
                    images.map((image, index) => (
                        <ImageSlide
                            key={index}
                            image={image}
                            href={href}
                            index={index}
                            borderRadius={borderRadius}
                            height={height}
                            className={imageClassName}
                        />
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

export default ImageSlider;
