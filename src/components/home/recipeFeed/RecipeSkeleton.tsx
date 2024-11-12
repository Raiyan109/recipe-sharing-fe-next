

const RecipeSkeleton = () => {
    return (
        <div className="border rounded-lg p-4 bg-gray-100 shadow-lg animate-pulse w-full md:w-[700px]">
            {/* User Avatar */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="flex flex-col gap-1">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
            </div>
            {/* Recipe Image */}
            <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
            {/* Recipe Title */}
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
            {/* Recipe Description */}
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
            {/* Ratings and Comments */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <div className="w-20 h-4 bg-gray-300 rounded"></div>
                    <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export default RecipeSkeleton;
