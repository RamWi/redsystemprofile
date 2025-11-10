import { Link } from "react-router-dom";

const ReleatedService = ({ data = [], currentId = "" }) => {
  // Filter out the card that matches the current page
    const filteredData = data.filter((item) => item.id !== currentId);

    return (
        <section className="w-full bg-[#0B141A] text-gray-200 px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
            <div
                key={item.id}
                className="bg-[#111827] rounded-2xl p-8 flex flex-col justify-between items-center 
                        shadow-md border border-transparent hover:border-red-500/40 
                        hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all duration-300"
            >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                {item.icon}
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>

                {/* Button */}
                <Link
                to={item.link.startsWith("/") ? item.link : `/${item.link}`}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md 
                            shadow-md hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300"
                >
                Check It Now
                </Link>
            </div>
            ))}
        </div>
        </section>
    );
};

export default ReleatedService;
