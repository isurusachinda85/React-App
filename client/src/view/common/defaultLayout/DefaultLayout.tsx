import { Component } from "react";
import { Navbar } from "../navBar/Navbar";
import { Footer } from "../footer/Footer";
import { MainContent } from "../mainContent/MainContent";

export class DefaultLayout extends Component {
    render() {
        return (
            <>

                <Navbar />
                <MainContent />
                <Footer />

            </>
        );
    }
}