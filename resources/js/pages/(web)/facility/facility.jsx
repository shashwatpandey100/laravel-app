import { Head, usePage } from '@inertiajs/react';
import * as LucideIcons from 'lucide-react';
import Layout from '../components/layout/layout';

export default function Hostel() {
    const { facility } = usePage().props;
    console.log(facility);

    const Icon = LucideIcons[facility?.icon] || LucideIcons.HelpCircle;

    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <div>
                    <div
                        style={{
                            backgroundImage: `url(${facility?.thumbnail})`,
                        }}
                        className="bg- h-[240px] w-full bg-cover bg-center bg-no-repeat sm:h-[300px] md:h-[440px]"
                    ></div>

                    <div className="container mx-auto flex flex-col-reverse justify-center gap-4 px-4 py-4 md:py-10 lg:flex-row lg:gap-16 lg:py-16">
                        <div className="flex h-full w-full flex-col lg:w-[70%]">
                            <h2
                                style={{
                                    fontFamily: 'lily script one',
                                }}
                                className="text-cred text-[2.5rem]"
                            >
                                {facility?.title}
                            </h2>
                            <p className="mt-4 text-[15px] font-[500] lg:text-[17px]">
                                {facility?.headline}
                                <br />
                                <br />
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: facility?.description.replaceAll('</br>', '<br />'),
                                    }}
                                ></span>
                            </p>
                        </div>

                        <div className="bg-cred top-[calc(95px+4rem)] h-max w-full p-4 lg:sticky lg:w-[450px]">
                            <div
                                style={{
                                    backgroundImage: `url(${facility?.image})`,
                                }}
                                className="h-[320px] w-full bg-cover bg-center bg-no-repeat shadow-lg md:h-[400px] lg:h-[440px] lg:w-[calc(450px-2rem)]"
                            ></div>
                            <p className="mt-2 flex items-center justify-center text-white md:mt-4">
                                <Icon color="#ffffff" className="text-primary h-8 w-8" />
                                &nbsp;&nbsp;&nbsp;
                                <p className="text-[2rem] font-[500]">{facility?.title}</p>
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
