import Link from "next/link"


const GetStarted = () => {
  return (
    <div>
      <div className="flex flex-col bg-card rounded-2xl">
        <div className="px-3 py-4 lg:px-6 lg:py-4">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2
                className="text-lg font-medium tracking-tighter  lg:text-3xl"
              >
                Subscribe
              </h2>
              <p className="mt-2 text-sm hidden lg:block">Subscribe to get premium contents</p>
            </div>
            <div className="mt-2 lg:mt-6">
              <p>
                <span className="text-2xl lg:text-5xl font-light tracking-tight">
                  $19
                </span>
                <span className="text-base font-medium"> /mo </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-4 py-2 lg:px-6 lg:py-4">
          {/* hover:bg-transparent hover:border-black hover:text-black */}
          <Link href={`/subscription`} className="flex items-center justify-center w-full px-6 py-2.5 text-center text-xs lg:text-xl duration-200 bg-primary text-black font-medium border-2 border-card rounded-full  focus:outline-none focus-visible:outline-black focus-visible:ring-black">
            Subscribe
          </Link>
        </div>
      </div>

    </div>
  )
}

export default GetStarted