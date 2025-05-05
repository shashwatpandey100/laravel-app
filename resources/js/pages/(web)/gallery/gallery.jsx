import { Head, Link, usePage } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';

export default function Gallery() {
    const { galleryImages } = usePage().props;

    const [selectedImage, setSelectedImage] = useState(null);

    const closeOverlay = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedImage]);

    return (
        <>
            <Layout>
                <Head title="Welcome">
                    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap" rel="stylesheet"></link>
                </Head>
                <div className="flex h-max flex-col pb-30">
                    {/* Banner */}
                    <div
                        style={{
                            backgroundImage: `url(https://raghumahostels.com/build/assets/gallery-banner-Co9-j5dN.jpeg)`,
                        }}
                        className="h-[240px] w-full bg-cover bg-center bg-no-repeat sm:h-[300px] md:h-[440px]"
                    ></div>

                    {/* Gallery */}
                    <div className="container mx-auto">
                        <h2
                            style={{
                                fontFamily: 'lily script one',
                            }}
                            className="text-cred mt-16 text-center text-[2rem]"
                        >
                            Our Gallery
                        </h2>
                        <div className="mt-10 grid h-max w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                            {galleryImages?.data?.map((img, index) => (
                                <div
                                    key={index}
                                    className="bg-cred/10 h-max w-full cursor-pointer rounded-md p-4"
                                    onClick={() => setSelectedImage(img.image_path)}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${img.image_path})`,
                                        }}
                                        className="h-[320px] w-full rounded-sm bg-cover bg-center bg-no-repeat shadow-lg"
                                    ></div>
                                    <p className="mt-2 flex items-center justify-center text-black md:mt-4">
                                        <p className="text-[1.25rem] font-[500]">{img.title}</p>
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-20 flex justify-center gap-2">
                            {galleryImages.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url ?? '#'}
                                    className={`rounded px-4 py-2 text-sm ${
                                        link.active ? 'bg-cred text-white' : 'hover:bg-cred/10 bg-white text-black'
                                    } ${!link.url && 'pointer-events-none text-gray-400'}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Overlay */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={closeOverlay}>
                        <div className="relative max-h-[90%] max-w-[90%]" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedImage} alt="Selected" className="h-auto max-h-[75vh] w-full rounded-md" />
                        </div>
                        <button
                            className="absolute top-2 right-2 cursor-pointer rounded-full p-2 text-white hover:bg-white/20"
                            onClick={closeOverlay}
                        >
                            <X size={24} className="text-white" />
                        </button>
                    </div>
                )}
            </Layout>
        </>
    );
}
