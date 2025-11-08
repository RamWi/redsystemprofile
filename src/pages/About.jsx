import Header from "../components/Header"
import Footer from "../components/Footer"
import MediaSection from "../components/reuseable/MediaSection"
import CEOMessage from "../components/CEOMessage"
import CardSection from "../components/reuseable/CardSection"
import profile from "../assets/teampic1.jpg"
import ProfileCard from "../components/reuseable/ProfileCard"

const team = [
    {
        name: "Kadek Bondan Noviadi",
        role: "CEO & Founder",
        image: profile,
        description: "Memimpin strategi dan inovasi teknologi Red System.",
    },
    {
        name: "Rini Swari",
        role: "Marketing Director",
        image: profile,
        description: "Membangun brand dan kemitraan strategis untuk ekspansi global.",
    },
    {
        name: "Made Santara",
        role: "CTO",
        image: profile,
        description: "Mengawasi pengembangan sistem dan keamanan teknologi perusahaan.",
    },
];

function About(){
    return(
        <>
            <Header />

            <MediaSection image={profile}>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
                        Judul
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        Profile perushaaan
                    </p>
                </div>
            </MediaSection>

            <CEOMessage />

            <MediaSection image={profile} reverse>
                <CardSection layout="vertical" />
                <CardSection layout="vertical" />
            </MediaSection>

            <section className="bg-[#0B141A] text-gray-300 py-20 px-6 md:px-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">
                        MEET OUR <span className="text-red-500">TEAM</span>
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">
                        Tim profesional kami yang berkomitmen untuk kesuksesan digital Anda.
                    </p>
                </div>

                {/* Grid Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                    {team.map((member, index) => (
                    <ProfileCard key={index} {...member} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About