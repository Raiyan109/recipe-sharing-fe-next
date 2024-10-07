'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

const filters = ["Dinner", "Vegetarian", "Breakfast", "Healthy"];

const SearchingFiltering = ({ placeholder }: { placeholder: string }) => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || "");
    const [category, setCategory] = useState(searchParams.get("category") || "");
    const [sortOrder, setSortOrder] = useState(searchParams.get("sortOrder") || "asc");

    const router = useRouter();


    const handleSearch = (value: string) => {
        setQuery(value);
        updateURL({ query: value, category, sortOrder });
    };

    const handleCategoryChange = (value: string) => {
        setCategory(value);
        updateURL({ query, category: value, sortOrder });
    };

    const handleSortChange = (value: string) => {
        setSortOrder(value);
        updateURL({ query, category, sortOrder: value });
    };

    const updateURL = ({ query, category, sortOrder }: { query: string, category: string, sortOrder: string }) => {
        const params = new URLSearchParams();
        if (query) params.set("query", query);
        if (category) params.set("category", category);
        params.set("sortOrder", sortOrder);
        router.push(`?${params.toString()}`);
    };
    return (
        <div>
            <form className="flex flex-col md:flex-row gap-3 max-w-3xl mx-auto container">
                <div className="flex">
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={(e) => handleSearch(e.target.value)}
                        // defaultValue={searchParams.get("query")?.toString() || ""}
                        value={query}
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                    />
                    {/* <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button> */}
                </div>

                <div>
                    <select
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        value={category}
                        className="px-3 h-10 border-2 border-sky-500 rounded"
                    >
                        <option value="">All Categories</option>
                        {filters.map((filter) => (
                            <option key={filter} value={filter}>{filter}</option>
                        ))}
                    </select>

                    <select
                        onChange={(e) => handleSortChange(e.target.value)}
                        value={sortOrder}
                        className="px-3 h-10 border-2 border-sky-500 rounded"
                    >
                        <option value="asc">Sort Ascending</option>
                        <option value="desc">Sort Descending</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default SearchingFiltering