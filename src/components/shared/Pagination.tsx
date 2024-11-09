type PaginationProps = {
    handlePageChange: (page: number) => void;
    currentPage: number;
    totalPages: number;
};

const Pagination = ({ handlePageChange, currentPage, totalPages }: PaginationProps) => {
    return (
        <div>
            <div className="flex justify-center items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 mx-1 bg-primary font-bold rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1 mx-1 rounded ${currentPage === page ? 'bg-primary text-white' : 'bg-card text-primary font-bold'}`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 mx-1 bg-primary rounded disabled:opacity-50 font-bold"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination