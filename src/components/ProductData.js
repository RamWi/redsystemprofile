import logoakunta from "../assets/akuntalogo.png";
import logoforstaff from "../assets/logo-forstaff-1024x357.png";
import logoredpos from "../assets/redposlogo-5-1024x237.png";
import lakunta from "../assets/akuntalayout.png";
import lforstaff from "../assets/forstafflayout.png";
import lredposs from "../assets/redpostlayoutss-gtpos-1024x512.jpg";


export const products = [
    {
        id: 1,
        title: "For Staff",
        phrase: "Meet Forstaff – Smarter HR Management Starts Here",
        desc: "With the power of AI, turn your website vision into a meaningful brief, sitemap and wireframe at near-instant speed.",
        image: lforstaff,
        logo: logoforstaff,
        logoS: "h-14",
        button: "Learn More",
        advantages: [
            {
                title: "Automated Bookkeeping",
                desc: "Save time with real-time transaction automation.",
            },
            {
                title: "Smart Tax Tools",
                desc: "Easily manage reports and e-faktur integration.",
            },
            {
                title: "Team Collaboration",
                desc: "Multi-user access with secure permissions.",
            },
            {
                title: "Cloud Backup",
                desc: "Access and secure your data anytime, anywhere.",
            },
        ],
    },
    {
        id: 2,
        title: "Akunta",
        phrase: "Meet Forstaff – Smarter HR Management Starts Here",
        desc: "Generate responsive wireframes instantly using AI. Adjust layout and structure in seconds, not hours.",
        image: lakunta,
        logo: logoakunta,
        logoS: "h-16",
        button: "Learn More",
        advantages: [
            {
                title: "Automated Bookkeeping",
                desc: "Save time with real-time transaction automation.",
            },
            {
                title: "Smart Tax Tools",
                desc: "Easily manage reports and e-faktur integration.",
            },
            {
                title: "Team Collaboration",
                desc: "Multi-user access with secure permissions.",
            },
            {
                title: "Cloud Backup",
                desc: "Access and secure your data anytime, anywhere.",
            },
        ],
    },
    {
        id: 3,
        title: "Red Pos",
        phrase: "Meet Forstaff – Smarter HR Management Starts Here",
        desc: "Get professional website copy instantly. Let AI write engaging, SEO-friendly content tailored to your product.",
        image: lredposs,
        logo: logoredpos,
        logoS: "h-10",
        button: "Hubungi Kami",
        advantages: [
            {
                title: "Automated Bookkeeping",
                desc: "Save time with real-time transaction automation.",
            },
            {
                title: "Smart Tax Tools",
                desc: "Easily manage reports and e-faktur integration.",
            },
            {
                title: "Team Collaboration",
                desc: "Multi-user access with secure permissions.",
            },
            {
                title: "Cloud Backup",
                desc: "Access and secure your data anytime, anywhere.",
            },
        ],
    },
];