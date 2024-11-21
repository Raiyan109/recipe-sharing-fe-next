


const Post = () => {
    return (
        <div>
            <div className="w-full ">
                <div className="w-full mx-auto h-full flex items-center justify-center">
                    <div
                        className="w-full flex flex-col gap-1 p-2 border shadow-lg rounded-xl mx-2 bg-white dark:border-gray-400 dark:bg-gray-800">
                        <div className="flex items-center gap-2 pt-2">
                            {/* <Image src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="User profile" className="w-[3.5rem] h-[3.5rem] rounded-full" /> */}
                            <textarea className="w-full resize-none truncate border border-gray-400 rounded-full p-[12px] text-left xs:text-sm sm:text-lg  dark:bg-gray-700 dark:text-white dark:border-gray-500" placeholder="Start a post, try writing with AI"></textarea>
                        </div>

                        <div className="flex sm:px-4 mt-2 justify-between">
                            <div
                                className="flex items-center gap-2 p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="material-symbols-outlined text-blue-400">panorama</span>
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Media</h3>
                            </div>

                            <div
                                className="flex items-center gap-2 p-2 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="material-symbols-outlined text-yellow-700">calendar_month</span>
                                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">Event</h3>
                            </div>

                            <div
                                className="flex items-center gap-2 sm:p-2 xs:p-1 rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className="material-symbols-outlined text-orange-400">newsmode</span>
                                <h3 className="text-sm sm:font-semibold xs:truncate text-gray-600 dark:text-gray-300">Write article</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post