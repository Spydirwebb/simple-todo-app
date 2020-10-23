/*Header.js
/src/components/
*/

import React, { Component } from "react";

class Header extends Component{

    /////lifestyle methods
    componentDidUpdate(prevProps, prevState) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb("+x+","+y+","+z+")";

        if (prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById("inH1").innerHTML = "clicked";
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }
    }

    render() {
        const headerStyle = {
            padding: "20px 0",
            lineHeight: "2em",
        }
        return(
            <header style={headerStyle}>
                <h1 style={{fontSize: "25px", marginBotton: "15px"}}>
                    Simple Todo App <span id="inH1"></span>
                </h1>
                <p style={{fontsize: "19px"}}>Please add to-dos item(s) throughthe input field</p>
                </header>
        )
    }
}

export default Header;
