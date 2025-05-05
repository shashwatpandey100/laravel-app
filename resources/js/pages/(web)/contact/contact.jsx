import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from '../components/button';
import Layout from '../components/layout/layout';

export default function Contact() {
    const { auth } = usePage().props;

    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <div className="min-h-[70vh]">
                    <div
                        style={{
                            backgroundImage: `url(https://raghumahostels.com/build/assets/contact-banner-DMli9PSL.jpeg)`,
                        }}
                        className="h-[200px] w-full bg-cover bg-center bg-no-repeat sm:h-[300px] md:h-[440px]"
                    ></div>
                    <h2
                        style={{
                            fontFamily: 'lily script one',
                        }}
                        className="text-cred mt-16 text-center text-[2.4rem]"
                    >
                        Get In Touch
                    </h2>
                    <p className="text-center font-[500]">Book your stay today and elevate your lifestyle to new heights</p>
                    <div className="container mx-auto flex flex-col gap-12 pt-6 pb-20 lg:flex-row">
                        <ContactModule />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.6773568580404!2d77.48169503498126!3d28.468862375754508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea08950593b7%3A0x2ba17f028de339d1!2s40B%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1713006598482!5m2!1sen!2sin"
                            loading="lazy"
                            allowfullscreen=""
                            referrerpolicy="no-referrer-when-downgrade"
                            width="100%"
                            className="mt-8 h-[475px] shadow-[0_5px_10px_#bababa] lg:rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </Layout>
        </>
    );
}

const ContactModule = () => {
    const { url, flash } = usePage().props;

    useEffect(() => {
        if (flash.toast) {
            toast[flash.toast.type](flash.toast.message);
        }
    }, [flash]);

    const { data, setData, errors, post, processing } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        source_page: url,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('lead.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
            },
        });
    };

    return (
        <div>
            <div className="container mx-auto mb-16 h-[475px] px-4 pb-20 lg:mb-0">
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

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="mt-4 w-full rounded-md border px-4 py-[0.7rem] text-[15px] font-[500] outline-none"
                            value={data.subject}
                            onChange={(e) => setData('subject', e.target.value)}
                            required
                        />
                        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}

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
