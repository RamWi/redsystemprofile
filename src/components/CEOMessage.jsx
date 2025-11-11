import ceoImage from "../assets/Bondan-Noviada-Photoroom.png";

function CEOMessage(){
    return(
        <>
            <section className="bg-white text-black w-full py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Teks Kiri */}
                <div className="md:w-2/3 space-y-6 text-justify">
                    <p className="leading-relaxed text-base md:text-lg">
                        At <span className="text-red-500 font-semibold">Red System</span>, our mission is clear: to empower small and medium-sized
                        businesses through digital innovation. We believe that Indonesia’s future lies in the hands of its entrepreneurs — UMKM
                        (micro, small, and medium enterprises) — and we’re here to help them grow through technology.
                    </p>

                    <p className="leading-relaxed text-base md:text-lg">
                        Our company was born from a vision to make digital transformation accessible, especially for those who are often overlooked by
                        expensive, complex systems. During the pandemic, like many others, we faced uncertainty. But instead of retreating, we chose to
                        stand with UMKM — building tools, offering support, and growing stronger together. That experience shaped who we are today.
                    </p>

                    <p className="leading-relaxed text-base md:text-lg">
                        We now offer end-to-end digital solutions — from ERP development, custom software, and HR systems, to AI-powered tools. We’re
                        not just creating software — we’re building a stronger foundation for Indonesia’s digital economy.
                    </p>

                    <p className="leading-relaxed text-base md:text-lg">
                        The potential of technology and AI in Indonesia is enormous. And we believe the best way to unlock that potential is by starting
                        with those who build the country from the ground up: our local businesses.
                    </p>

                    <p className="leading-relaxed text-base md:text-lg">
                        Let’s move forward, together.
                    </p>

                    {/* Identitas CEO */}
                    <div className="mt-8">
                        <h4 className="text-lg md:text-xl font-semibold">Kadek Bondan Noviadi</h4>
                        <p className="text-red-500 text-sm md:text-base font-medium">CEO, Red System</p>
                    </div>
                </div>

                {/* Gambar CEO */}
                <div className="md:w-1/3 flex justify-center">
                    <img
                    src={ceoImage}
                    alt="Kadek Bondan Noviadi"
                    className="rounded-3xl shadow-[0_0_1px_rgba(255,0,0,0.25)] w-72 md:w-96 object-cover bg-white p-1"
                    />
                </div>
            </section>
        </>
    )
}

export default CEOMessage