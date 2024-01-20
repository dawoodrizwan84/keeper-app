//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.

import React from "react";

let text = "Keeper";



function Header()
{
    
    return <header>
        <h1>{text}</h1>
    </header>
}

export default Header;