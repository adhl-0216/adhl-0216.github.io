export default function PlaceholderCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-primary-900 p-4 md:p-8 rounded-lg w-full md:w-[48rem] h-auto md:h-[27rem] min-h-[280px] animate-pulse">
            <div className="flex flex-col">
                <div className="h-8 bg-primary-800 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-primary-800 rounded w-1/2 mb-4"></div>
                <div className="flex gap-2 flex-wrap mt-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 md:w-14">
                            <div className="bg-primary-800 rounded-full w-8 h-8 md:w-10 md:h-10 mb-1"></div>
                            <div className="bg-primary-800 rounded h-2 w-full"></div>
                        </div>
                    ))}
                </div>
                <div className="flex-grow"></div>
                <div className="h-10 bg-primary-800 rounded mt-4"></div>
            </div>
            <div className="hidden md:block col-span-2 bg-primary-800 rounded"></div>
        </div>
    )
}