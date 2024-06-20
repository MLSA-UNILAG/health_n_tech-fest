// src/components/ui/Carousel/index.jsx
import { Image1, Image2, Image3, Image4 } from '@/public/Images';

export const Carousel = () => {
    const images = [
        <Image1 key='1'/>,
        <Image2 key='2'/>,
        <Image3 key='3'/>,
        <Image4 key='4'/>,
        // <Image1 />,
        // <Image2 />,
        // <Image3 />,
        // <Image4 />,
        // <Image1 />,
        // <Image2 />,
        // <Image3 />,
        // <Image4 />,
    ];

    return (
        <div className="!bg-white flex overflow-hidden w-full pb-10">
            <div className="flex transition-transform duration-1000 ease-in-out">
                {images.map((image, index) => (
                    <div key={index} className='border-t-8 border-r-4 border-b-8 border-black border-collapse'>
                        {image}
                    </div>
                ))}
            </div>
        </div>
    );
}
