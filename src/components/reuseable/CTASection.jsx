function CTASection(){

    return(
        <>
            <section className="w-full bg-red-600/70 py-16 md:py-20 text-center text-white px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Judul */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Want to Be Our Next Client?
                    </h2>

                    {/* Deskripsi */}
                    <p className="text-sm md:text-base text-red-100 mb-8">
                        Get in touch with us today to start your project with RedSystem and experience the professionalism that drives real results.
                    </p>

                    {/* Tombol */}
                    <a href="https://api.whatsapp.com/send/?phone=6281228663080&text&type=phone_number&app_absent=0" target="_blank" className="bg-white text-red-600 font-semibold px-8 py-3 rounded-md hover:bg-red-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    )
}

export default CTASection