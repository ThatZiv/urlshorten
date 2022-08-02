import React, { useState } from "react";
import InformationSquare24 from "@carbon/icons-react/lib/information/24";
import {
    Header,
    HeaderName,
    HeaderGlobalAction,
    HeaderGlobalBar,
} from "carbon-components-react/lib/components/UIShell";
import { Link, Tile } from "carbon-components-react"

const HeaderNav = ({ children }) => {
    const [open, setOpen] = useState(false)
    return <div><Header aria-label="URL Shortener">
        <HeaderName href="https://info.zavaar.net" prefix="URL">
            Shortener
        </HeaderName>
        {children}
        <HeaderGlobalBar>
            <HeaderGlobalAction
                aria-label="More Info"
                onClick={() => { setOpen(() => !open) }}>
                <InformationSquare24 />
            </HeaderGlobalAction>
        </HeaderGlobalBar>

    </Header>
    {open ? <Tile style={{padding: 25, marginTop: 50}}>Created by <Link target="_blank"  href="https://info.zavaar.net"> Zavaar Shah</Link>. Powered by <Link target="_blank" href="https://deta.sh">Deta.sh</Link></Tile>: null}
    </div>
}

export default HeaderNav