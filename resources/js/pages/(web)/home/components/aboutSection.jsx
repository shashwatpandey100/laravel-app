import { Link } from '@inertiajs/react';
import Button from '../../components/button';

const AboutSection = () => {
    return (
        <div className="flex py-20">
            <div className="container mx-auto flex flex-col justify-between px-6 md:flex-row md:px-0">
                <div
                    style={{
                        backgroundImage: 'url(https://raghumahostels.com/build/assets/circle-img-knUijWEY.png)',
                    }}
                    className="aspect-square overflow-hidden rounded-full bg-cover bg-center bg-no-repeat shadow-2xl md:h-[480px]"
                ></div>
                <div className="flex flex-col items-center justify-center md:w-1/2">
                    <h2
                        style={{
                            fontFamily: 'lily script one',
                        }}
                        className="text-cred mt-8 text-[2rem] md:mt-0"
                    >
                        Hello!
                    </h2>
                    <h3 className="text-[17px] font-[600] text-black">Welcome there!</h3>
                    <p className="mt-2 text-center font-[500] text-[#484848]">
                        Welcome to Raghuma Hostel, your home away from home in the heart of Greater Noida. Established with a passion for hospitality
                        and a commitment to providing travelers with a comfortable and memorable stay, Raghuma Hostel is the ultimate choice for
                        discerning adventurers seeking convenience, comfort and camaraderie. At Raghuma Hostel, we offer a variety of accommodation
                        options to suit every customer's needs. Whether you're solo, with friends, or in a group, our hostel provides the perfect
                        space for rest and relaxation. Choose from our spacious three-seater rooms, cozy two-seater rooms, or private single occupancy
                        rooms, each thoughtfully furnished with all the amenities you need for a comfortable stay.
                    </p>
                    <Link href={route('contact')} className="mt-6">
                        <Button variant="primary" className="rounded-md text-[16px]">
                            Read More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
