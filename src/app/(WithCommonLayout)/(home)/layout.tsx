import GetStarted from '@/components/home/GetStarted'
import Header from '@/components/shared/Header'
import MenuBar from '@/components/shared/MenuBar'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
                <div className='flex flex-col gap-5'>
                <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
                <GetStarted/>
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