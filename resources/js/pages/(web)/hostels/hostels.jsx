import { Head, Link, usePage } from '@inertiajs/react';
import Button from '../components/button';
import Layout from '../components/layout/layout';

export default function Hostels() {
    const { allHostels } = usePage().props;

    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <div className="h-max">
                    <div className="flex h-max bg-[#fff8f0] pt-12 pb-40">
                        <div className="container mx-auto">
                            <h2
                                style={{
                                    fontFamily: 'lily script one',
                                }}
                                className="text-cred text-center text-[2.7rem]"
                            >
                                Our Hostels
                            </h2>
                            <div className="my-2 flex w-full items-center justify-center px-4 text-center text-[0.95rem] font-[500] tracking-wide text-[#111]">
                                Looking for a perfect stay in Greater Noida? We offer a wide range of hostels tailored to students, professionals, and
                                groups seeking comfort and convenience.
                            </div>
                            <div className="mt-12 grid h-max w-full grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-0 lg:grid-cols-3">
                                {allHostels?.map((hostel, index) => (
                                    <HostelCard key={index} hostel={hostel} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

const HostelCard = ({ hostel }) => {
    return (
        <div className="flex flex-col rounded-md bg-white p-4 shadow-lg">
            <img src={hostel?.thumbnail} className="h-[255px]" alt={hostel?.title} />
            <p className="text-cred mt-4 mb-2 text-center text-[1.15rem] font-[600]">{hostel?.title}</p>
            <Link href={`/hostel/${hostel?.slug}`} className="mx-auto my-2">
                <Button variant="primary" className="rounded-md text-[16px]">
                    View Rooms
                </Button>
            </Link>
        </div>
    );
};
