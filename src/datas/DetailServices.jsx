import React from "react";
import { FaCode, FaMobileAlt, FaLightbulb, FaPencilRuler } from "react-icons/fa";
import Hero from "../assets/hero-bg.jpg";

export const services = [
        {
            id: "web",
            title: "Website Development",
            desc: "Do you need a visually appealing and useful website to represent your company online? At RED System, we provide expert website development services that are customized to meet the demands and objectives of your company.",
            icon: <FaCode size={40} />,
            bg: "bg-black text-white",
            arrowColor: "text-white",
            link : "services/web"
        },
        {
            id: "mobile",
            title: "Mobile Apps Development",
            desc: "Mobile app development is crafting software applications tailored for mobile devices like smartphones and tablets. It focuses on creating apps for major platforms like iOS (Apple) and Android (Google).",
            icon:  <FaMobileAlt size={40} />,
            bg: "bg-white text-black border border-gray-200",
            arrowColor: "text-black",
            link : "services/mobile"
        },
        {
            id: "erp",
            title: "ERP Development",
            desc: "ERP, a software system, integrates organizational processes, enhancing resource management. It streamlines operations, boosts productivity, and facilitates real-time information sharing among departments like finance, HR, procurement, manufacturing, and sales.",
            icon: <FaPencilRuler size={40} />,
            bg: "bg-white text-black border border-gray-200",
            arrowColor: "text-black",
            link : "services/erp"
        },
        {
            id: "itconsult",
            title: "IT Consultation",
            desc: "IT consultation involves offering expert advice on various information technology aspects to individuals, businesses, or companies. IT consultants, with extensive knowledge and experience, help clients make informed technology-related decisions.",
            icon: <FaLightbulb size={40} />,
            bg: "bg-black text-white",
            arrowColor: "text-white",
            link : "services/itconsult"
        }
    ];

export const DetailHero = {
    web: {
            background : Hero,
            title: "Website Development",
            subtitle: "Do you need a visually appealing and useful website to represent your company online? At RED System, we provide expert website development services that are customized to meet the demands and objectives of your company.",
        },

    mobile: {
            background : Hero,
            title: "Mobile Apps Development",
            subtitle: "Mobile app development is crafting software applications tailored for mobile devices like smartphones and tablets. It focuses on creating apps for major platforms like iOS (Apple) and Android (Google).",
        },

    erp: {
            background : Hero,
            title: "ERP Development",
            subtitle: "ERP, a software system, integrates organizational processes, enhancing resource management. It streamlines operations, boosts productivity, and facilitates real-time information sharing among departments like finance, HR, procurement, manufacturing, and sales.",
        },

    itconsult: {
            background : Hero,
            title: "IT Consultation",
            subtitle: "IT consultation involves offering expert advice on various information technology aspects to individuals, businesses, or companies. IT consultants, with extensive knowledge and experience, help clients make informed technology-related decisions.",
        },
}

export const DetailServices ={
    web: [
        {
            icon: "",
            title: "Web Design",
            content: "Creating unique and tailored web designs that align with your company’s identity. The design is customized to the user experience, resulting in a visually appealing and comfortable website to look at.",
            descT : "Find the Solution with our Website Development Service",
            desc : "For your demands as an online business, you can discover the ideal solution. Our team of developers possesses extensive experience in crafting visually appealing, purposeful websites that align with your corporate identity. Together, we'll make sure the website we create embodies your company's principles and draws in prospective clients."
        },
        {
            icon: "",
            title: "Web Development",
            content: "Website development using the latest technology and following structured development stages to produce high-quality websites.",
            descT :"Create a Website that Boosts Your Business' Online Presence",
            desc :"You can have a website that draws in visitors by employing our website development services. Our websites are designed with optimal functionality and aesthetics to enhance your company's online visibility, draw in more clients, and boost revenues overall.",
        },
        {
            icon: "",
            title: "Responsive Design",
            content: "The design is made to be responsive, meaning it can adapt to the screen sizes of various devices used by website visitors, ensuring the website remains neat and visually appealing.",
            descT :"Contact Us Today to Start Your Website Development Project",
            desc :"Don't let this chance be taken away from you. Get in touch with us immediately to begin developing your website. From concept to launch, our staff is prepared to help you at any stage of the website development process.",

        },
        {
            icon: "",
            title: "Search Engine Optimization",
            content: "Website structures are implemented to be friendly to Google’s search engine, increasing the chances of ranking high in search results. The website must be managed with regularly updated articles and popular keywords to stay competitive.",
        },
        {
            icon: "",
            title: "Digital Marketing",
            content: "A website must also be consistently promoted. This includes managing articles that contain high-traffic keywords to attract visitors. This ensures the site is easily found and frequently visited — especially if it’s used to market a product.",
        },
        {
            icon: "",
            title: "Copywriting",
            content: "Copywriting refers to written content within the website. Good copywriting is essential because it attracts and retains visitor attention, encourages purchases, and supports product sales through persuasive and well-structured content.",
        },
    ],

    mobile: [
        {
            icon: "",
            title: "Provide Direct Marketing Channels",
            content: "Direct marketing channels enable businesses to communicate directly with their target audience without relying on intermediaries. This approach allows for personalized messaging, faster feedback, and measurable results. It helps companies promote their products or services efficiently through channels like email, SMS, and social media.",
            descT : "Mobile App Development (Android & iOS)",
            desc : "Mobile application or mobile application is the process of developing applications for handheld devices, mobile phones, PDAs, or better known as smartphones."
        },
        {
            icon: "",
            title: "Provide More Value to Customers",
            content: "Delivering more value means giving customers something beyond the basic product or service. This could include excellent customer service, loyalty programs, educational content, or exclusive offers. By providing extra value, businesses build stronger relationships, improve satisfaction, and encourage long-term loyalty.",
            descT : "Mobile applications have many advantages when compared to website and desktop applications.",
            desc : `The user interface and user experience of the application are generally attractive and easy to use.
                    There are many applications that can be used without having to be connected to the internet.
                    Users can access the application at any time via the gadget.`
        },
        {
            icon: "",
            title: "Build and Introduce the Brand",
            content: "Building and introducing a brand involves crafting a unique identity that reflects the company’s values, vision, and purpose. Through consistent visuals, messaging, and experiences, businesses can establish recognition and trust among their target audience. A strong brand presence helps differentiate the company in a competitive market.",
            descT : "Developing Mobile Applications With R.E.D System",
            desc : ` To help your company in developing mobile applications, R.E.D System helps your company with experienced experts in developing mobile applications. By outsourcing our IT staff, you will save costs in developing mobile applications for your business.
                    R.E.D System with trained and experienced experts in mobile application development and mastery of the latest technology will help you find innovative solutions in mobile application development according to your business needs.`
        },
        {
            icon: "",
            title: "Increase Customer Engagement",
            content: "Customer engagement focuses on fostering two-way interactions between a business and its audience. By using interactive campaigns, personalized content, and responsive communication, companies can build stronger emotional connections. High engagement levels often lead to higher retention rates and greater brand advocacy.",
        },
        {
            icon: "",
            title: "Improve Business Process",
            content: "Improving business processes involves analyzing, optimizing, and automating workflows to enhance efficiency and reduce operational costs. Streamlined processes ensure better coordination among teams, faster service delivery, and improved customer experiences. Continuous improvement helps organizations stay agile and competitive in a dynamic market.",
        },
    ],

    erp: [
        {
            icon: "",
            title: "Better Business Integration and Data Accuracy",
            content: "ERP development enables seamless integration between different business functions such as finance, operations, sales, and human resources. By connecting these departments under one centralized system, data becomes more accurate, consistent, and accessible across the organization. This integration reduces duplication, minimizes errors, and supports informed decision-making.",
            descT : "Why does your business need a system / ERP?",
            desc : `ERP is an Enterprise Resource Planning, which is an integrated management tool to help make it easier for businesses to collect data from their various business departments.

                    This ERP system is used as a tool to connect or integrate a production process of goods or services within the company, including integrating the relevant data in the operational processes of a business.

                    The purpose of using ERP is to facilitate work and make it more efficient and effective, both for internal and external parties of the company.`,
        },
        {
            icon: "",
            title: "Help Develop Plans Using the Information Generated by the System",
            content: "An ERP system provides valuable insights by collecting and analyzing real-time data from various departments. These insights help management and stakeholders develop strategic plans based on accurate and up-to-date information. With data-driven decision-making, businesses can forecast demand, allocate resources effectively, and respond quickly to market changes.",
            descT : "Develop ERP System with R.E.D System",
            desc : `To help your company in developing an ERP system, R.E.D System helps your company with experienced experts in developing an ERP system. By outsourcing our IT staff, you will save costs in developing an ERP system for your business.

                    R.E.D System with trained and experienced experts in system development and mastery of the latest technology will help you find innovative solutions in ERP system development according to your business needs.`
        },
        {
            icon: "",
            title: "Increase Efficiency and Productivity",
            content: "Through process automation and centralized data management, ERP development helps eliminate repetitive manual tasks and streamline workflows. Employees can focus on higher-value activities rather than routine administrative work. As a result, operational efficiency improves, productivity increases, and overall business performance becomes more scalable and sustainable.",
        },
    ],

    itconsult: [
        {
            icon: "",
            title: "Focus on Core Business Strategy",
            content: "You can concentrate more on running your business strategy and not spend your precious time just on IT troubleshooting, allowing you to focus on developing your company’s growth and long-term goals.",
            descT : "Why does your business need an IT consultant?",
            desc : `In today's business world, technology implementation is closely related to business development. Companies on a large scale are also competing in developing and adopting various technologies. Generally, to follow technological developments and direct the IT strategy of a company is carried out by a General Manager or IT Director who has a complete IT team to take care of day-to-day IT operations so that he can concentrate more on carrying out his role as captain of the technology side of the company. his.

                    Unfortunately, not many small to medium scale companies have the same enthusiasm. They see IT as a big investment and think that IT is a very luxurious way and has less direct impact on growing a business. To have a General Manager or IT Director with extensive experience and insight tends to be expensive.`
        },
        {
            icon: "",
            title: "Efficient and Effective Technology Implementation",
            content: "The application of technology can be carried out more efficiently and effectively. Using the services of experienced IT consultants ensures that technology solutions are implemented faster, more accurately, and aligned with your business objectives.",
        },
        {
            icon: "",
            title: "Controlled and Predictable IT Costs",
            content: "Expenditures can be more controlled through IT outsourcing. Partnering with professional IT service providers helps companies save costs compared to building an in-house team, maintaining fixed budgets while ensuring measurable project success.",
        },
        {
            icon: "",
            title: "Flexible and Scalable IT Resources",
            content: "With on-demand resources, you can easily request additional consulting personnel to meet tight deadlines or support new business initiatives. Although it may incur extra costs, these are far lower than the potential risks of delayed or failed projects.",
        },
    ],
}

