function CTASection(){

    return(
        <>
            <section className="w-full bg-red-600 py-16 md:py-20 text-center text-white px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Judul */}
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ingin Jadi Klien Kami Selanjutnya?
                    </h2>

                    {/* Deskripsi */}
                    <p className="text-sm md:text-base text-red-100 mb-8">
                        Hubungi kami hari ini untuk memulai proyek Anda bersama RedSystem dan
                        rasakan pengalaman kerja profesional kami.
                    </p>

                    {/* Tombol */}
                    <button className="bg-white text-red-600 font-semibold px-8 py-3 rounded-md hover:bg-red-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                        Hubungi Kami
                    </button>
                </div>
            </section>
        </>
    )
}

export default CTASection