import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/button';

const BookYourRoom = () => {
    const { allHostels, flash } = usePage().props;

    useEffect(() => {
        if (flash.toast) {
            toast[flash.toast.type](flash.toast.message);
        }
    }, [flash]);

    const hostelItems = allHostels.map((hostel) => ({
        label: hostel.title,
        value: hostel.id,
        room_types: typeof hostel.room_types === 'string' ? JSON.parse(hostel.room_types) : hostel.room_types,
    }));

    const [selectedHostel, setSelectedHostel] = useState('');
    const [roomTypes, setRoomTypes] = useState([]);

    const handleHostelChange = (e) => {
        const selected = e.target.value;
        setSelectedHostel(selected);

        const hostel = hostelItems.find((h) => h.value.toString() === selected);
        setRoomTypes(hostel ? hostel.room_types : []);
        setData('hostel_id', selected);
        setData('room_type', '');
    };

    const { data, setData, errors, post, processing } = useForm({
        name: '',
        phone: '',
        hostel_id: '',
        room_type: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('booking-requests.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: '',
                    phone: '',
                    hostel_id: '',
                    room_type: '',
                    email: '',
                    message: '',
                });
                setSelectedHostel('');
                setRoomTypes([]);
            },
        });
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-20">
                <h2
                    style={{
                        fontFamily: 'lily script one',
                    }}
                    className="text-cred text-center text-[2rem]"
                >
                    Book Your Hostel
                </h2>
                <div className="mt-8 flex h-max w-full justify-center gap-8">
                    <form onSubmit={handleSubmit} className="w-[700px] rounded-lg border bg-white p-8 shadow-[0_5px_10px_#bababa]" method="POST">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                className="rounded-md border px-4 py-[0.7rem] text-[15px] font-[500] outline-none"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="rounded-md border px-4 py-[0.7rem] text-[15px] font-[500] outline-none"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                required
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                            <select
                                name="hostel"
                                className="rounded-md border px-4 py-[0.7rem] text-sm font-[500] outline-none"
                                value={data.hostel}
                                onChange={handleHostelChange}
                                required
                            >
                                <option value="">-------- Choose Hostel --------</option>
                                {hostelItems.map((hostel) => (
                                    <option key={hostel.value} value={hostel.value}>
                                        {hostel.label}
                                    </option>
                                ))}
                            </select>
                            {errors.hostel_id && <p className="mt-1 text-sm text-red-600">{errors.hostel_id}</p>}
                            <select
                                name="room_type"
                                className="rounded-md border px-4 py-[0.7rem] text-sm font-[500] outline-none"
                                value={data.room_type}
                                onChange={(e) => setData('room_type', e.target.value)}
                                required
                            >
                                <option value="">------ Select Room Type ------</option>
                                {roomTypes.map((room, i) => (
                                    <option key={i} value={room.type}>
                                        {room.type} (Occupancy: {room.occupancy})
                                    </option>
                                ))}
                            </select>
                            {errors.room_type && <p className="mt-1 text-sm text-red-600">{errors.room_type}</p>}
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="mt-4 w-full rounded-md border px-4 py-[0.7rem] text-[15px] font-[500] outline-none"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}

                        <div className="mt-4">
                            <textarea
                                name="message"
                                rows="6"
                                placeholder="Type your message..."
                                className="w-full resize-none rounded-md border px-4 py-[0.7rem] text-[15px] font-[500] outline-none"
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                        </div>

                        <div className="mt-4 flex justify-center">
                            <Button variant="primary" type="submit" className="rounded-md text-[16px]" disabled={processing}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookYourRoom;
