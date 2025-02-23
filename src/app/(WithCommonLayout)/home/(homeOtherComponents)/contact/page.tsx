

const ContactPage = () => {
    return (
        // <div className="flex justify-center items-center container mx-auto">
        //     <div className="bg-card w-full">
        //         <div className=" py-12">
        //             <div className=" px-4">
        //                 <h2 className="text-3xl font-semibold mb-4 text-center">
        //                     How can we help you
        //                 </h2>

        //                 <form className="bg-secondary rounded-lg px-6 py-8 shadow-md">
        //                     <div className="mb-4">
        //                         <label className="block  font-bold mb-2">Name</label>
        //                         <input
        //                             className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
        //                             id="name" type="text" placeholder="Enter your name" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block  font-bold mb-2">Email</label>
        //                         <input
        //                             className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
        //                             id="email" type="email" placeholder="Enter your email" />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block  font-bold mb-2">Message</label>
        //                         <textarea
        //                             className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
        //                             id="message" placeholder="Enter your message"></textarea>
        //                     </div>
        //                     <div className="flex w-full">
        //                         <button
        //                             className="bg-primary w-full hover:bg-primary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //                             type="button">
        //                             Send
        //                         </button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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