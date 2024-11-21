'use client'

import { Button } from '@/components/ui/button';
import { CloudUpload } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';

interface Props {
    setImage: React.Dispatch<React.SetStateAction<string>>
}
const UploadImages = ({ setImage }: Props) => {
    return (
        <CldUploadWidget uploadPreset="recipeUpload" onSuccess={({ info }) => {
            if (typeof info !== 'string' && info?.secure_url) {
                setImage(info.secure_url)
            } else {
                console.log('Unexpected info format:', info);
            }
        }}>
            {({ open }) => {
                return (
                    <Button className='bg-primary dark:bg-primary hover:bg-primary/80 dark:hover:bg-primary/90 flex items-center gap-3 text-black' onClick={() => open()}>
                        <CloudUpload />
                        Upload an Image
                    </Button>
                );
            }}
        </CldUploadWidget>
    )
}

export default UploadImages