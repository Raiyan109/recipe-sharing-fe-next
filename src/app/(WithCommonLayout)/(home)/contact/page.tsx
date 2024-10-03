

const page = () => {
    return (
        <div className="flex justify-center items-center container mx-auto">
            <div className="bg-gray-100">
                <div className=" py-12">
                    <div className="max-w-lg mx-auto px-4">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
                            How can we help you
                        </h2>

                        <form className="bg-white rounded-lg px-6 py-8 shadow-md">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Name</label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name" type="text" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Email</label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message" placeholder="Enter your message"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page