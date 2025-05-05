import { Head, Link, usePage } from '@inertiajs/react';
import Button from '../components/button';
import Layout from '../components/layout/layout';

export default function Hostels() {
    const { facilities } = usePage().props;
    console.log(facilities);
    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <div className="h-max">
                    <div className="flex h-full bg-[#fff8f0] pt-12 pb-40">
                        <div className="container mx-auto">
                            <h2
                                style={{
                                    fontFamily: 'lily script one',
                                }}
                                className="text-cred text-center text-[2.7rem]"
                            >
                                Our Facilities
                            </h2>
                            <div className="my-2 flex w-full items-center justify-center px-4 text-center text-[0.95rem] font-[500] tracking-wide text-[#111]">
                                Our hostels in Greater Noida are thoughtfully designed to provide more than just a place to stay. Whether you're a
                                student, a working professional, or part of a group, we offer modern facilities that ensure comfort, safety, and
                                convenience—so you can focus on what matters most.
                            </div>
                            <div className="mt-12 grid h-max w-full grid-cols-1 gap-8 px-6 md:grid-cols-2 md:px-0 lg:grid-cols-3">
                                {facilities?.map((facility, index) => (
                                    <FacilityCard key={index} facility={facility} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

const FacilityCard = ({ facility }) => {
    return (
        <div className="flex flex-col rounded-md bg-white p-4 shadow-lg">
            <div
                style={{
                    backgroundImage: `url('${facility?.image}')`,
                }}
                className="h-[255px] bg-cover bg-center bg-no-repeat"
            ></div>
            <p className="text-cred mt-4 mb-2 text-center text-[1.15rem] font-[600]">{facility?.title}</p>
            <Link href={`/facility/${facility?.slug}`} className="mx-auto my-2">
                <Button variant="primary" className="rounded-md text-[16px]">
                    Show Details
                </Button>
            </Link>
        </div>
    );
};
