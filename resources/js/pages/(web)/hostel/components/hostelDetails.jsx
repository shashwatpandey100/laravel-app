import { BedDouble, List, MapPin, Wallet } from 'lucide-react';

const HostelDetails = ({ hostel }) => {
    return (
        <div className="mb-16 pt-2">
            <h2
                style={{
                    fontFamily: 'lily script one',
                }}
                className="text-cred px-4 py-8 text-[2.5rem]"
            >
                Hostel Overview
            </h2>
            <div className="flex h-full w-full flex-col bg-gray-100 px-0 pt-2 pb-10 md:rounded-[12px] md:px-[22px]">
                {/* Room Types */}
                <div className="flex h-max w-full flex-col justify-between border-b px-4 py-6 last:border-none md:flex-row">
                    <p className="flex h-max w-[270px] items-center gap-6 text-[15px] font-[500] text-black">
                        <BedDouble className="h-12 w-6" />
                        <span>Room Types</span>
                    </p>
                    <ul className="grid w-full list-inside list-disc grid-cols-1 gap-2 pl-[50px] text-[15px] font-[400] text-black/70 md:w-[calc(100%-270px)]">
                        {hostel?.room_types?.map((room, i) => (
                            <li key={i}>
                                {room.type} - {room.occupancy} {room.occupancy > 1 ? 'people' : 'person'}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing */}
                <div className="flex h-max w-full flex-col justify-between border-b px-4 py-6 last:border-none md:flex-row">
                    <p className="flex h-max w-[270px] items-center gap-6 text-[15px] font-[500] text-black">
                        <Wallet className="h-12 w-6" />
                        <span>Pricing</span>
                    </p>
                    <div className="flex w-full flex-col gap-2 pl-[50px] text-[15px] font-[400] text-black/70 md:w-[calc(100%-270px)]">
                        {['monthly', 'quarterly', 'yearly'].map((term) => (
                            <div key={term} className="mt-4">
                                <span className="font-semibold text-black capitalize">{term}:</span>
                                <div className="ml-4">
                                    <p>Normal: ₹{hostel.pricing[term].normal}</p>
                                    <p>AC: ₹{hostel.pricing[term].ac}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location */}
                <div className="flex h-max w-full flex-col justify-between border-b px-4 py-6 last:border-none md:flex-row">
                    <p className="flex h-max w-[270px] items-center gap-6 text-[15px] font-[500] text-black">
                        <MapPin className="h-12 w-6" />
                        <span>Location</span>
                    </p>
                    <p className="w-full pl-[50px] text-[15px] font-[400] text-black/70 md:w-[calc(100%-270px)]">{hostel?.location?.full_address}</p>
                </div>

                {/* Amenities */}
                <div className="flex h-max w-full flex-col justify-between border-b px-4 py-6 last:border-none md:flex-row">
                    <p className="flex h-max w-[270px] items-center gap-6 text-[15px] font-[500] text-black">
                        <List className="h-12 w-6" />
                        <span>Amenities</span>
                    </p>
                    <ul className="mt-2 grid w-full list-inside list-disc grid-cols-2 gap-2 pl-[50px] text-[15px] font-[400] text-black/70 md:w-[calc(100%-270px)]">
                        {hostel?.amenities?.map((amenity, i) => (
                            <li key={i}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HostelDetails;
