export default function Loader() {
    return (
        <div className="">
            <div className="flex py-4 justify-around shadow-lg shadow-gary-600/50 mb-6">
                <div className="flex items-center gap-10">
                    <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                    <div className="w-16 h-4 bg-gray-300 rounded-xl"></div>
                </div>
                <div className="flex items-center gap-10">
                    <div className="w-41 h-5 bg-gray-300"></div>
                    <div className="w-18 h-5 bg-gray-300"></div>
                    <div className="w-18 h-5 bg-gray-300"></div>
                    <div className="w-16 h-5 bg-gray-300"></div>
                    <div className="w-19.5 h-5 bg-gray-300"></div>
                    <div className="w-19 h-5 bg-gray-300"></div>
                </div>
            </div>

            <div className="w-[90%] flex flex-wrap gap-10 mx-auto">
                {Array.from({ length: 8 }).map(() => (
                    <div>
                        <div className="bg-gray-300 w-75 h-50 rounded-2xl"></div>
                        <div className="mx-4 my-2 flex flex-col gap-2">
                            <div className="bg-gray-300 w-32 h-6 rounded-xl"></div>
                            <div className="bg-gray-300 w-20 h-5 rounded-xl"></div>
                            <div className="bg-gray-300 w-48 h-4 rounded-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}