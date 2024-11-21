import Categories from '@/components/home/categories/Categories'
import GetStarted from '@/components/home/GetStarted'
import LatestRecipes from '@/components/home/latestRecipe/LatestRecipes'
import UserAvatars2 from '@/components/home/userAvatars2/UserAvatars2'

import Header from '@/components/shared/Header'
import MenuBar from '@/components/shared/MenuBar'
import { getAllUsers, getAnUser } from '@/services/AuthService'
import { ReactNode } from 'react'

const HomeLayout = async ({ children }: { children: ReactNode }) => {
    const user = await getAnUser()
    const users = await getAllUsers();
    // Check if users data is available and if the user is logged in
    const hasUsers = users?.data?.length > 0;
    const isLoggedIn = !!user;
    return (
        <div className="flex min-h-screen flex-col w-full">
            <Header user={user} />
            <div className="mx-auto flex w-auto md:w-full max-w-[1400px] flex-grow gap-0 md:gap-5 py-5 px-0 md:px-5">
                <div className='flex flex-col gap-5 sticky top-[5.25rem] h-fit'>
                    <MenuBar className="hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm md:block lg:px-5 xl:w-80" />
                    <div className='sticky hidden lg:block'>
                        <Categories />
                    </div>
                    <div className='sticky hidden lg:block'>
                        <GetStarted />
                    </div>
                    <div className='sticky hidden md:block lg:hidden'>
                        <button className='flex items-center justify-center w-full px-2 py-2.5 text-center text-xs lg:text-xl duration-200 bg-primary text-card border-2 border-card rounded-full  focus:outline-none focus-visible:outline-black focus-visible:ring-black'>Subscribe</button>
                    </div>
                </div>
                <div>
                    {children}
                </div>
                <div className='xl:flex flex-col gap-5 sticky top-[5.25rem] h-fit hidden'>
                    {isLoggedIn && hasUsers && (
                        <UserAvatars2 users={users?.data} />
                    )}
                    <LatestRecipes />
                </div>
            </div>
            {/* w-[530px] md: */}
            <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 md:hidden" />
        </div>
    )
}

export default HomeLayout