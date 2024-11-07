import Link from "next/link"


const GetStarted = () => {
  return (
    <div>
 
<div className="flex flex-col bg-card rounded-2xl">
  <div className="px-6 py-8 sm:p-10 sm:pb-6">
    <div className="grid items-center justify-center w-full grid-cols-1 text-left">
      <div>
        <h2
          className="text-lg font-medium tracking-tighter  lg:text-3xl"
        >
          Subscribe
        </h2>
        <p className="mt-2 text-sm ">Subscribe to get premium contents</p>
      </div>
      <div className="mt-6">
        <p>
          <span className="text-5xl font-light tracking-tight">
            $19
          </span>
          <span className="text-base font-medium"> /mo </span>
        </p>
      </div>
    </div>
  </div>
  <div className="flex px-6 pb-8 sm:px-8">
  {/* hover:bg-transparent hover:border-black hover:text-black */}
  <Link href={`/subscription`} className="flex items-center justify-center w-full px-6 py-2.5 text-center duration-200 bg-primary text-card  text-xl border-2 border-card rounded-full  focus:outline-none focus-visible:outline-black focus-visible:ring-black">    
      Get started
      </Link>
  </div>
</div>

    </div>
  )
}

export default GetStarted