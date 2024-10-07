


const PaginationComponent = ({ currentPage, onPageChange, totalPages }: {
  currentPage: number,
  onPageChange: (page: number) => void,
  totalPages: number | undefined
}) => {
  console.log(totalPages);

  // Hide pagination if there's only one page
  if (!totalPages || totalPages <= 1) return null;
  return (
    <div>
      {/* <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
          
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink >1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default PaginationComponent