import { Head, usePage } from '@inertiajs/react';
import Layout from '../components/layout/layout';

export default function About() {
    const { facilities } = usePage().props;
    console.log(facilities);

    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <div className="min-h-[70vh]">
                    <div
                        style={{
                            backgroundImage: 'url(https://raghumahostels.com/build/assets/AboutBanner-DldO2PNU.jpeg)',
                        }}
                        className="h-[240px] w-full bg-cover bg-center bg-no-repeat sm:h-[300px] md:h-[440px]"
                    ></div>
                    <div className="container mx-auto flex flex-col justify-center gap-4 px-4 py-4 md:py-10 lg:flex-row lg:gap-16 lg:py-16">
                        <img
                            src="https://raghumahostels.com/build/assets/gal1-_kNaonBs.jpeg"
                            alt="raghumahostels"
                            className="h-[410px] w-[550px] shadow-lg md:h-[510px] lg:h-[610px]"
                        />
                        <div className="flex h-full w-full flex-col">
                            <h2
                                style={{
                                    fontFamily: 'lily script one',
                                }}
                                className="text-cred text-[2.5rem]"
                            >
                                Know us
                            </h2>
                            <p className="text-[15px] font-[500] lg:text-[17px]">
                                Welcome to Raghuma Hostel, your home away from home in the heart of Greater Noida. Established with a passion for
                                hospitality and a commitment to providing travelers with a comfortable and memorable stay, Raghuma Hostel is the
                                ultimate choice for discerning adventurers seeking convenience, comfort and camaraderie. <br />
                                <br /> At Raghuma Hostel, we offer a variety of accommodation options to suit every customer's needs. Whether you're
                                solo, with friends, or in a group, our hostel provides the perfect space for rest and relaxation. Choose from our
                                spacious three-seater rooms, cozy two-seater rooms, or private single occupancy rooms, each thoughtfully furnished
                                with all the amenities you need for a comfortable stay.
                            </p>
                            <p className="text-cred mt-6 border border-black/5 bg-white px-6 py-2 font-[500] shadow-md">
                                Spacious room with three comfortable beds.
                            </p>
                            <p className="text-cred mt-3.5 border border-black/5 bg-white px-6 py-2 font-[500] shadow-md">
                                Each bed equipped with a cozy mattress, fresh linens and individual reading lights.
                            </p>
                            <p className="text-cred mt-3.5 border border-black/5 bg-white px-6 py-2 font-[500] shadow-md">
                                Air conditioning for a comfortable stay regardless of the weather.
                            </p>
                            <p className="text-cred mt-3.5 border border-black/5 bg-white px-6 py-2 font-[500] shadow-md">
                                Access to laundry facilities for convenience.
                            </p>
                            <p className="text-cred mt-3.5 border border-black/5 bg-white px-6 py-2 font-[500] shadow-md">
                                24/7 security to ensure safety.
                            </p>
                        </div>
                    </div>
                    <h2
                        style={{
                            fontFamily: 'lily script one',
                        }}
                        className="text-cred mt-6 px-4 text-[2.5rem] lg:text-center"
                    >
                        What We Offer
                    </h2>
                    <div className="container mx-auto flex flex-col-reverse justify-center gap-16 px-4 py-8 md:px-8 lg:flex-row lg:px-16 lg:py-16">
                        <div className="relative flex h-full w-full flex-col">
                            <span className="absolute left-0 mt-2 h-full border-l"></span>
                            <div className="ml-8">
                                {facilities?.map((facility, index) => (
                                    <>
                                        <h3 className="text-cred relative mt-4 text-[20px] font-[600]">
                                            <span className="bg-cred absolute -left-10 mt-3 aspect-square h-[15px] rounded-full"></span>
                                            {facility?.title}
                                        </h3>
                                        <p className="max-w-[700px] text-[16px] font-[500]">{facility?.headline}</p>
                                    </>
                                ))}
                            </div>
                        </div>
                        <img
                            src="https://res.cloudinary.com/dw0bwetr1/image/upload/v1746343515/mobile-Wg0cSldN_1_n3lxsz.jpg"
                            alt="raghumahostels"
                            className="my-auto h-[410px] w-full shadow-lg lg:h-[610px] lg:w-[550px]"
                        />
                    </div>
                    <div className="h-max w-full bg-[rgb(232,246,249)] pt-10">
                        <h2
                            style={{
                                fontFamily: 'lily script one',
                            }}
                            className="text-cred mt-6 text-center text-[2.5rem]"
                        >
                            How you feel
                        </h2>
                        <div className="flex flex-col px-4 lg:flex-row lg:pl-32">
                            <div className="relative flex h-full w-full flex-col justify-center pt-6">
                                <h3 className="text-cred mt-10 text-[26px] font-[600]">Our Commitments</h3>
                                <p className="mt-2 max-w-[600px] font-[500]">
                                    At Raghuma Hostel, we are committed to providing exceptional hospitality and creating a welcoming environment
                                    where customers from all walks of life can come together to share experiences and create lasting memories. Whether
                                    you're exploring the city, embarking on outdoor adventures, or simply seeking a comfortable place to unwind, our
                                    hostel is the perfect choice for your next getaway.
                                </p>
                                <h3 className="text-cred mt-10 text-[26px] font-[600]">Book Your Stay</h3>
                                <p className="mt-2 max-w-[600px] font-[500]">
                                    Experience the best of hospitality at Raghuma Hostel. Book your stay with us today and discover why we're the
                                    preferred choice for customers seeking comfort, convenience, and community. Your adventure starts here!
                                </p>
                            </div>
                            <img
                                src="https://raghumahostels.com/build/assets/girl-CgDjJSjW.png"
                                alt="raghumahostels"
                                className="my-auto mt-8 h-[360px] lg:mt-0 lg:h-[510px]"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
