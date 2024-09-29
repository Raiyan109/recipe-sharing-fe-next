import Spinner from "./Spinner"


const GlassSpinner = () => {
    return (
        <div className='h-screen inset-0 fixed z-[999] backdrop-blur-md bg-black/10 flex items-center justify-center'>
            <Spinner />
        </div>
    )
}

export default GlassSpinner