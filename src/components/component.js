import { useState } from "react";

export default function Component() {
    const [toggle, settoggle] = useState(false)
    return (
        <div className="content">
            <button className="btn btn-primary" onClick={() => settoggle(!toggle)}> Toggle btn</button>
            {toggle ? <div><br /><h3>You Tube content</h3></div> : null}
        </div>
    )
}