import { Head, usePage } from '@inertiajs/react';
import Button from '../components/button';
import Layout from '../components/layout/layout';
import BookYourRoom from '../home/components/bookYourRoom';
import ImageSlider from '../home/components/imageSlider';
import HostelDetails from './components/hostelDetails';

export default function Hostel() {
    const { hostel } = usePage().props;

    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <div className="min-h-[70vh]">
                    <div className="relative h-full w-full">
                        <ImageSlider
                            images={hostel?.images}
                            borderRadius="0px"
                            height={495}
                            className="rounded-[0px]"
                            imageClassName="rounded-[0px]"
                            dotsClassName="bg-white/70"
                            autoplay={false}
                            autoplaySpeed={5000}
                        />
                    </div>
                    <div className="container mx-auto flex flex-col justify-center gap-4 px-4 py-4 md:px-0 md:py-10 lg:flex-row lg:gap-16 lg:py-16">
                        <div
                            style={{
                                backgroundImage: `url('${hostel?.thumbnail}')`,
                            }}
                            className="h-[410px] w-full rounded-sm bg-cover bg-center bg-no-repeat shadow-lg"
                        ></div>
                        <div className="my-auto flex h-full w-full flex-col">
                            <h2
                                style={{
                                    fontFamily: 'lily script one',
                                }}
                                className="text-cred text-[2.5rem]"
                            >
                                {hostel?.title}
                            </h2>
                            <p
                                className="mt-6 text-[15px] font-[500] lg:text-[17px]"
                                dangerouslySetInnerHTML={{
                                    __html: hostel?.description.replaceAll('</br>', '<br />'),
                                }}
                            ></p>
                            <a href="#book" className="mx-auto mt-8">
                                <Button
                                    variant="primary"
                                    className="animate-pulse rounded-md text-[16px] transition-all duration-1000 hover:animate-none hover:underline"
                                >
                                    Book a Room
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto w-full md:w-[80%]">
                        <HostelDetails hostel={hostel} />
                    </div>
                    <div className="bg-[rgb(232,246,249)]">
                        <BookYourRoom />
                    </div>
                </div>
            </Layout>
        </>
    );
}
