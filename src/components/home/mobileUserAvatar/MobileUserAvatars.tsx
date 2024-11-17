'use client'
import { IUser } from "@/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import MobileUserAvatar from "./MobileUserAvatar";
import { Plus } from "lucide-react";
import Link from "next/link";


const MobileUserAvatars = ({ users }: { users: IUser[] }) => {
    return (
        <div className="w-full overflow-x-hidden px-8 border-b pb-5">
            {/* <div className="w-16 h-16 object-cover bg-secondary rounded-full mb-4 shrink-0 border-primary border-dashed border-4 absolute left-20 z-20">
                <Plus />
            </div> */}
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                className={'mySwiper'}
                navigation={false}
                // centeredSlides={true}
                grabCursor={true}
            // breakpoints={{
            //     0: {
            //         slidesPerView: 1,
            //     },
            //     390: {
            //         slidesPerView: 1.5,
            //     },
            //     502: {
            //         slidesPerView: 2,
            //     },
            //     802: {
            //         slidesPerView: 2.5,
            //     },
            //     992: {
            //         slidesPerView: 3,
            //     },
            //     1200: {
            //         slidesPerView: 4,
            //     },
            // }}
            >

                {/* Plus Icon Slide */}
                <SwiperSlide key="plus-icon" className="flex items-center justify-center">
                    <Link href='/user-dashboard/create-recipe'
                        className="w-16 h-16 flex items-center justify-center bg-secondary rounded-full border-dashed border-4 border-primary cursor-pointer"

                    >
                        <Plus size={24} />
                    </Link>
                </SwiperSlide>


                {users?.map((user) => {
                    return (
                        <SwiperSlide key={user._id}>
                            <MobileUserAvatar user={user} key={user._id} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default MobileUserAvatars