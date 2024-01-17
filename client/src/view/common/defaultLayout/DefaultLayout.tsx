import {Component} from "react";
import {Navbar} from "../navBar/Navbar";
import {Footer} from "../footer/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Footer/>
            </>
        );
    }
}