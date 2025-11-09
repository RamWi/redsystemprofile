import React from "react";


function HeroSection({
    background, // URL gambar background
    title = "Solusi Digital Masa Depan",
    subtitle = "Kami mengubah ide Anda menjadi aplikasi web dan mobile yang powerful. Software house terpercaya dengan tim developer berpengalaman.",
    buttonPrimary = null,
    buttonSecondary = null,
    textPosition = "left", // "left" | "center" | "right"
    overlay = true, // kontrol overlay hitam
}) {
  // Atur posisi teks berdasarkan props
    const alignment =
        textPosition === "center"
        ? "items-center text-center justify-center"
        : textPosition === "right"
        ? "items-end text-right justify-end"
        : "items-start text-left justify-start";

    const buttonAlignment =
        textPosition === "center"
        ? "justify-center"
        : textPosition === "right"
        ? "justify-end"
        : "justify-start";

  // Check if any button should be shown
    const showPrimary =
        buttonPrimary && buttonPrimary.text && buttonPrimary.link;
    const showSecondary =
        buttonSecondary && buttonSecondary.text && buttonSecondary.link;

    const showButtons = showPrimary || showSecondary;

    return (
        <section
            className="relative w-full min-h-screen flex items-center bg-cover bg-no-repeat text-white bg-position[80%, 70%]"
            style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: "80% 70%",
                backgroundSize: "cover",
            }}
        >
            {/* Overlay gelap opsional */}
            {overlay && <div className="absolute inset-0 bg-black/60"></div>}

            {/* Konten */}
            <div
                className={`relative z-10 w-full px-6 md:px-16 lg:px-24 flex flex-col ${alignment} gap-6`}
            >
                <div className="max-w-2xl">
                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        {title.split(" ").map((word, i) =>
                        word.toLowerCase() === "digital" ? (
                            <span key={i} className="text-red-500">
                            {word + " "}
                            </span>
                        ) : (
                            word + " "
                        )
                        )}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-200 text-base sm:text-lg mb-8 leading-relaxed">
                        {subtitle}
                    </p>


                    {/* Buttons (optional, appear only if valid) */}
                    {showButtons && (
                        <div
                            className={`flex flex-wrap gap-4 ${buttonAlignment} transition-all duration-300`}
                        >
                            {showPrimary && (
                                <a
                                    href={buttonPrimary.link}
                                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                                >
                                    {buttonPrimary.text}
                                </a>
                            )}

                            {showSecondary && (
                                <a
                                    href={buttonSecondary.link}
                                    className="border border-gray-300 text-gray-100 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                                >
                                    {buttonSecondary.text}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
