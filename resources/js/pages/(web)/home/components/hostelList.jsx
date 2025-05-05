import { Link, usePage } from '@inertiajs/react';
import Button from '../../components/button';

const HostelList = () => {
    const { allHostels } = usePage().props;

    return (
        <div className="flex h-max bg-[#fff8f0] pt-20 pb-40">
            <div className="container mx-auto">
                <h2
                    style={{
                        fontFamily: 'lily script one',
                    }}
                    className="text-cred text-center text-[2rem]"
                >
                    Our Hostels
                </h2>
                <div className="my-2 flex w-full items-center justify-center text-[1.05rem] font-[600] tracking-wide text-[#111]">
                    <Link href={route('hostels')} className="hover:underline">
                        MORE ACCOMODATIONS
                    </Link>
                </div>
                <div className="mt-10 grid h-max w-full grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
                    {allHostels?.slice(0, 3).map((hostel, index) => (
                        <HostelCard key={index} hostel={hostel} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HostelList;

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
