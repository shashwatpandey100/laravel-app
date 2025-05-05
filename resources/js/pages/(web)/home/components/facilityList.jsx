import { Link, usePage } from '@inertiajs/react';
import * as LucideIcons from 'lucide-react';

const FacilityList = () => {
    const { facilities } = usePage().props;

    return (
        <div className="flex h-max border-b pb-20">
            <div className="w-full">
                <div className="bg-cred py-8">
                    <h2
                        style={{
                            fontFamily: 'lily script one',
                        }}
                        className="text-center text-[2.4rem] text-white"
                    >
                        Facilities
                    </h2>
                    <div className="my-2 flex w-full items-center justify-center text-[1.05rem] font-[600] tracking-wide text-[#111]">
                        <Link href={route('facilities')} className="hover:underline">
                            MORE FACILITES
                        </Link>
                    </div>
                </div>
                <div className="mt-16 grid h-max w-full grid-cols-2 gap-y-12 sm:grid-cols-3">
                    {facilities?.slice(0, 6).map((facility, index) => (
                        <FacilityCard key={index} facility={facility} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacilityList;

const FacilityCard = ({ facility }) => {
    const Icon = LucideIcons[facility?.icons] || LucideIcons.HelpCircle;

    return (
        <Link href={`/facility/${facility?.slug}`} className="flex flex-col items-center justify-center rounded-md">
            <div className="flex aspect-square h-[120px] items-center justify-center rounded-full bg-[#eee]">
                <Icon className="text-primary h-12 w-12" />
            </div>
            <p className="text-cred mt-4 text-xl font-[600]">{facility?.title}</p>
        </Link>
    );
};
