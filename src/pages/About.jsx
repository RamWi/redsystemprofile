import Header from "../components/Header"
import Footer from "../components/Footer"
import MediaSection from "../components/reuseable/MediaSection"
import CEOMessage from "../components/CEOMessage"
import CardSection from "../components/reuseable/CardSection"
import profile from "../assets/teampic1.jpg"

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

            <Footer />
        </>
    )
}

export default About