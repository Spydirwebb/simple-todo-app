/*Header.js
/src/components/
*/

import React from "react";

const Header = () => {

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }
    return(
        <header style={headerStyle}>
            <h1 style={{fontSize: "25px", marginBotton: "15px"}}>Simple Todo App</h1>
            <p style={{fontsize: "19px"}}>Please add to-dos item(s) throughthe input field</p>
        </header>
    )
}

export default Header;
