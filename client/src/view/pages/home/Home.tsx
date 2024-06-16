import { Component } from "react";
import img from "../../../image/maxresdefault.jpg"
export class Home extends Component {
    render() {
        return (
            <>

                <div className="border border-black h-[100%]">
                    <div className={"w-[full] h-[500px] mr-24 ml-24 mt-10 border border-black flex"}>
                        <img className="w-full" src={img} alt="" />
                    </div>

                    <div className={"m-10 w-[full] h-[60px] border border-black"}></div>

                </div>
            </>
        );
    }
}