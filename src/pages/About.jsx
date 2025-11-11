import Header from "../components/Header"
import Footer from "../components/Footer"
import MediaSection from "../components/reuseable/MediaSection"
import CEOMessage from "../components/CEOMessage"
import CardSection from "../components/reuseable/CardSection"
import profile from "../assets/teampic1.jpg"
import ProfileCard from "../components/reuseable/ProfileCard"

import { companyData } from "../datas/CompanyData"
import { team } from "../datas/CompanyData"

function About(){
    return(
        <>
            <Header />

            <MediaSection image={profile}>
                <div className="text-center md:text-left">
                    <h2 className="md:text-4xl text-sm font-bold text-white mb-4 tracking-wide">
                        A Technology Company Already Established as a Limited Liability Company (PT)
                    </h2>
                    <p className=" text-gray-400 leading-relaxed text-base text-left md:text-lg">
                        Red System is an “IT Partner & Consultant” company operating under PT. Guna Teknologi Nusantara, headquartered at Jl. Tukad Anyar 1 No.1, Sanur, Denpasar, Bali. Supported by a business team and IT professionals with over 8 years of experience, Red System is ready to be the best choice for business players (individuals or companies) who want to make IT the foundational core and driving force behind their business success.
                    </p>
                </div>
            </MediaSection>

            <CEOMessage />

            <MediaSection image={profile} classImage="h-40 md:h-90 text-sm" reverse>
                <CardSection layout="vertical" data={companyData} classCard="w-50" />
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