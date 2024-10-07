'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SearchingFiltering = ({ placeholder }: { placeholder: string }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div>
            <form className="flex flex-col md:flex-row gap-3 max-w-3xl mx-auto container">
                <div className="flex">
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={(e) => {
                            handleSearch(e.target.value);
                        }}
                        defaultValue={searchParams.get("query")?.toString() || ""}
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                    />
                    {/* <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button> */}
                </div>
                <select id="pricingType" name="pricingType"
                    className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                    <option value="All" >All</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                </select>
            </form>
        </div>
    )
}

export default SearchingFiltering