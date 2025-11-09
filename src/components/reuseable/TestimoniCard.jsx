import { testimonials } from "../TestiData"

function TestimoniCard(){
    return(
        <>
            
                        {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="w-full shrink-0 snap-center flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 py-10 bg-[#111827]/70 rounded-xl shadow-inner shadow-red-500/40 backdrop-blur-md border border-red-500/10"
                        >
                            <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                                “{item.message}”
                            </p>
                            <h4 className="text-xl font-semibold text-white">
                                {item.name}
                            </h4>
                            <p className="text-red-400 text-sm font-medium">{item.role}</p>
                        </div>
                        ))}
            
    
        </>
    )
}

export default TestimoniCard