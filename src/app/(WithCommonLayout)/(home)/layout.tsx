import GetStarted from '@/components/home/GetStarted'
import Header from '@/components/shared/Header'
import MenuBar from '@/components/shared/MenuBar'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
                <div className='flex flex-col gap-5 sticky top-[5.25rem] h-fit'>
                    <MenuBar className="hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
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
            </div>
            <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" />
        </div>
    )
}

export default HomeLayout