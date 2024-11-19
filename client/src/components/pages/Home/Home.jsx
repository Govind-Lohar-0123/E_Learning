import Background from "./Background";

import Layer from "./Layer";
import Courses from "../Courses/Courses";
import Contact from "./Contact";
import FeedbackCard from "../partials/FeedbackCard";
import Feedback from "./Feedback";
import { list1, list2 } from "../partials/data";
import Footer from "../partials/Footer";



export default function Home() {
    return (
        <>
            <Background flag={false} />
            <Layer list={list1} />
            <Courses />
            <Contact />
            <Feedback />
            <Layer list={list2} />
            <Footer />

        </>
    )
}