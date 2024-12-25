import estify_desktop from "../public/portfolio/pages/estify.png";
import estify_mobile from "../public/portfolio/pages/mobile-estify.png";
import gocrisp_desktop from "../public/portfolio/pages/gocrisp.png";
import gocrisp_mobile from "../public/portfolio/pages/mobile-gocrisp.png";
import honk_desktop from "../public/portfolio/pages/honkforhelp.png";
import honk_mobile from "../public/portfolio/pages/mobile-honkforhelp.png";
import partstrader_desktop from "../public/portfolio/pages/partstrader.png";
import partstrader_mobile from "../public/portfolio/pages/mobile-partstrader.png";
import numerator_desktop from "../public/portfolio/pages/numerator.png";
import numerator_mobile from "../public/portfolio/pages/mobile-numerator.png";
import mbatrading_desktop from "../public/portfolio/pages/mbatradinginc.png";
import mbatrading_mobile from "../public/portfolio/pages/mobile-mbatradinginc.png";

// const portfolioPages = {
//     estify: [estify_desktop, estify_mobile, "Estify"],
//     crisp: [gocrisp_desktop, gocrisp_mobile, "Crisp"],
//     honk: [honk_desktop, honk_mobile, "Honk"],
//     mba_trading: [mbatrading_desktop, mbatrading_mobile, "MBA Trading"],
//     partstrader: [partstrader_desktop, partstrader_mobile, "PartsTrader"],
//     numerator: [numerator_desktop, numerator_mobile, "Numerator"],
// };

const portfolioPages = {
    estify:
    {
        desktop: estify_desktop,
        mobile: estify_mobile,
        title: "Estify",
        info: "Web portal for selling services of car repair estimates automatization."

    },
    crisp: {
        desktop: gocrisp_desktop,
        mobile: gocrisp_mobile,
        title: "Crisp",
        info: "B2B web solution for automatically analyzing trading data."

    },
    honk: {
        desktop: honk_desktop,
        mobile: honk_mobile,
        title: "Honk",
        info: "Website for road assistance service helping rent and lease a car tow."

    },
    mba_trading: {
        desktop: mbatrading_desktop,
        mobile: mbatrading_mobile,
        title: "MBA Trading",
        info: "An online store for a mid-sized consumer goods retailer."

    },
    partstrader: {
        desktop: partstrader_desktop,
        mobile: partstrader_mobile,
        title: "PartsTrader",
        info: "Selling website for a complex car procurement solution."

    },
    numerator: {
        desktop: numerator_desktop,
        mobile: numerator_mobile,
        title: "Numerator",
        info: "B2B product solution to promote consumer insights processing."

    },
};

export default portfolioPages;