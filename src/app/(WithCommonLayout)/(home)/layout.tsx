import Categories from '@/components/home/categories/Categories'
import GetStarted from '@/components/home/GetStarted'
import LatestRecipes from '@/components/home/latestRecipe/LatestRecipes'

import Header from '@/components/shared/Header'
import MenuBar from '@/components/shared/MenuBar'
import { getAnUser } from '@/services/AuthService'
import { ReactNode } from 'react'

const HomeLayout = async ({ children }: { children: ReactNode }) => {
    const user = await getAnUser()
    return (
        <div className="flex min-h-screen flex-col">
            <Header user={user} />
            <div className="mx-auto flex w-full max-w-[1400px] flex-grow gap-0 md:gap-5 p-5">
                <div className='flex flex-col gap-5 sticky top-[5.25rem] h-fit'>
                    <MenuBar className="hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
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
                    <LatestRecipes />
                </div>
            </div>
            <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" />
        </div>
    )
}

export default HomeLayout