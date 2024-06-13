import { createBrowserRouter } from "react-router-dom";
import DefualtLayout from "./defualtLayout";
import Home from "../modules/home";
import Error from "../error";
import TesrRide from "../modules/testRide";
import Dealership from "../modules/dealership";
import Dealership2 from "../modules/dealership2";
import ViewDealership from "../modules/viewDealership";
import Financial from "../modules/financial";
import Contact from "../modules/contact";
import Pricing from "../modules/pricing";
import Faq from "../modules/faq";
import Social from "../modules/socialMedia";
import SocialDetail from "../modules/socialDetail";
import Bangalore from "../modules/bangloare";
import DealershipBanglore from "../modules/dealershipBanglore";
import TopScooter from "../modules/topScooter";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefualtLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/testRide",
                element: <TesrRide />
            },
            {
                path: "/dealership",
                element: <Dealership />
            },
            {
                path: "/dealership2",
                element: <Dealership2 />
            },
            {
                path: "/viewDealership",
                element: <ViewDealership />
            },
            {
                path: "/financial",
                element: <Financial />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/social",
                element: <Social />
            },
            {
                path: "/socialDetail",
                element: <SocialDetail />
            },
            {
                path: "/bangalore",
                element: <Bangalore />
            },
            {
                path: "/dealershipBanglore",
                element: <DealershipBanglore />
            },
            {
                path: "/topScooter",
                element: <TopScooter />
            }
        ]
        
    }, {
        path: "*",
        element: <Error/>
    }
])

export default router;