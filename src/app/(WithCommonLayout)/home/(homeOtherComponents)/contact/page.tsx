

const ContactPage = () => {
    return (
        <div className="px-3 mx-auto max-w-xl bg-card pb-3">
            <h1 className="text-2xl pt-2 font-bold text-center">Contact us</h1>
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full py-2.5 px-4   border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                <input type='email' placeholder='Email'
                    className="w-full py-2.5 px-4   border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                <input type='text' placeholder='Subject'
                    className="w-full py-2.5 px-4   border focus:border-black focus:bg-transparent text-sm outline-none transition-all" />
                <textarea placeholder='Message' rows={4}
                    className="w-full px-4   border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"></textarea>
                <button type='button'
                    className=" bg-primary tracking-wide text-sm px-4 py-2.5 w-full outline-none">Send</button>
            </form>
        </div>
    )
}

export default ContactPage