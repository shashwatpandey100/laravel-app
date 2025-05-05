import { Link } from '@inertiajs/react';
import Button from '../../components/button';

const GalleryPreview = ({ images }) => {
    return (
        <div>
            <div className="container mx-auto py-20">
                <h2
                    style={{
                        fontFamily: 'lily script one',
                    }}
                    className="text-cred text-center text-[2rem]"
                >
                    Photogallery
                </h2>
                <div className="my-2 flex w-full items-center justify-center text-[1.05rem] font-[600] tracking-wide text-[#111]">
                    <Link href={route('gallery')} className="hover:underline">
                        Latest images from our Gallery
                    </Link>
                </div>
                <div className="mt-10 grid h-max w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
                    {images?.slice(0, 6).map((img, index) => (
                        <img src={img.image_path} key={index} className="" />
                    ))}
                </div>
                <Link href={`/gallery`} className="mx-auto mt-10 flex w-full items-center justify-center">
                    <Button variant="primary" className="rounded-md text-[16px]">
                        View More
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default GalleryPreview;
