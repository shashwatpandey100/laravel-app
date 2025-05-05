import { Head, usePage } from '@inertiajs/react';
import Layout from '../components/layout/layout';
import AboutSection from './components/aboutSection';
import BookYourRoom from './components/bookYourRoom';
import FacilityList from './components/facilityList';
import GalleryPreview from './components/galleryPreview';
import HostelList from './components/hostelList';
import ImageSlider from './components/imageSlider';
import SubscriptionComponent from './components/subscriptionComponent';
import TestimonialsSlider from './components/testimonialsSlider';

export default function Home() {
    const sliderImgs = [
        'https://res.cloudinary.com/dw0bwetr1/image/upload/v1746164854/11_d6wxvt.jpg',
        'https://res.cloudinary.com/dw0bwetr1/image/upload/v1746164853/12_dbc93n.jpg',
        'https://res.cloudinary.com/dw0bwetr1/image/upload/v1746164853/13_iwuxnr.jpg',
        'https://res.cloudinary.com/dw0bwetr1/image/upload/v1746164853/44_aasyuy.jpg',
        'https://res.cloudinary.com/dw0bwetr1/image/upload/v1746164853/55_pqqeat.jpg',
    ];

    const { galleryImages } = usePage().props;

    return (
        <>
            <Layout>
                <Head title={`Best Hostels in Greater Noida`}>
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <section className="min-h-[70vh]">
                    <div className="relative h-full w-full border">
                        <ImageSlider
                            images={sliderImgs}
                            borderRadius="0px"
                            height={495}
                            className="rounded-[0px]"
                            imageClassName="rounded-[0px]"
                            dotsClassName="bg-white/70"
                            autoplay={false}
                            autoplaySpeed={5000}
                        />
                    </div>
                    <AboutSection />
                    <HostelList />
                    <FacilityList />
                    <BookYourRoom />
                    <GalleryPreview images={galleryImages} />
                    <div className="bg-gray-100 py-12">
                        <h2
                            style={{
                                fontFamily: 'lily script one',
                            }}
                            className="text-cred text-center text-[2rem]"
                        >
                            Guest says:
                        </h2>
                        <TestimonialsSlider
                            data={sliderImgs}
                            borderRadius="0px"
                            height={495}
                            className="rounded-[0px]"
                            imageClassName="rounded-[0px]"
                            dotsClassName="bg-white/70"
                            autoplay={true}
                            autoplaySpeed={3000}
                        />
                    </div>
                    <SubscriptionComponent />
                </section>
            </Layout>
        </>
    );
}
