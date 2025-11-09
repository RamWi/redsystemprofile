import Header from "../components/Header"
import Footer from "../components/Footer"
import TestimoniCard from "../components/reuseable/TestimoniCard"
import CTASection from "../components/reuseable/CTASection"

function Testimoni(){
    return(
        <>
            <Header />
            <section className="w-full py-20 bg-gradient-to-b from-[#0B141A] via-[#111827] to-[#111111] text-gray-300">
                {/* Title */}
                <div className="text-center mb-14 px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
                        WHAT OUR <span className="text-red-500">CLIENTS SAY</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
                        Real experiences from our happy partners and clients.
                    </p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
                    <TestimoniCard />
                </div>
            </section>

            <CTASection />

            <Footer />
        </>
    )
}

export default Testimoni