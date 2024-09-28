import { ArrowRight, Cylinder, Notebook } from "lucide-react"
import heroImg from '@/assets/login.jpg'
import Image from "next/image"

const Hero = () => {
    return (
        <div className="pt-8 pb-20 md:pt-5 md:pb-10">
            <div className="container">
                <div className="md:flex items-center">
                    {/* Right */}
                    <div className="md:w-[478px]">
                        <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tighter">Version 2.0 is here</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
                        <p className="text-xl text-[#010d3e] tracking-tight mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam ipsa vel nobis maiores ad dolore molestias aperiam in eius dolorum esse fuga, velit, repellat unde. Cumque incidunt quam sint!</p>
                        <div className="flex gap-1 items-center mt-16">
                            <button className="btn btn-primary">Get for free</button>
                            <button className="btn btn-text gap-1">
                                <span>Learn more</span>
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Left */}
                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <Image
                            src={heroImg}
                            height={500}
                            width={500}
                            alt="hero image"
                            className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0"
                        />
                        <Cylinder size={50} className="hidden md:block -top-8 -left-32 md:absolute" />
                        <Notebook size={50} className="absolute top-[524px] left-[448px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero