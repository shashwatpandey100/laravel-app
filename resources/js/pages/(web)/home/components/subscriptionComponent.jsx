import { useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from '../../components/button';

const SubscriptionComponent = () => {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.toast) {
            toast[flash.toast.type](flash.toast.message);
        }
    }, [flash]);

    const { data, setData, errors, post, processing } = useForm({
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('subscription.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    email: '',
                });
            },
        });
    };

    return (
        <div
            style={{
                backgroundImage: 'url(https://res.cloudinary.com/dw0bwetr1/image/upload/v1746285893/news-letter-bg-BoVPqJDd_mjnsro.jpg)',
            }}
            className="relative h-[350px] w-full bg-cover bg-top bg-no-repeat md:h-[400px] lg:h-[500px]"
        >
            <div className="absolute flex h-full w-full flex-col items-center justify-center bg-black/30 px-4">
                <h2
                    style={{
                        fontFamily: 'lily script one',
                    }}
                    className="text-center text-[2rem] text-white sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem]"
                >
                    Stay Tuned With Updates
                </h2>
                <form onSubmit={handleSubmit} className="mt-4 flex w-[380px] items-center bg-white md:w-[400px] lg:w-[600px]">
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        className="h-[50px] w-[75%] border border-transparent px-4 text-[16px] font-[500] focus:border-white focus:outline-none"
                        placeholder="Email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    <Button
                        type="submit"
                        className="h-[50px] w-[25%] rounded-none border border-white px-2 text-[15px] font-[600] sm:px-4 sm:text-[14px] md:px-6"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SubscriptionComponent;
