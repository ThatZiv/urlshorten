import Copy32 from "@carbon/icons-react/lib/copy/32";
import { Button, ComposedModal, Link, ModalBody, ModalHeader } from "carbon-components-react"
import React from "react"
// { data: { original, shortened, id } }
const Output = ({ data }) => {
    const doCopy = () => {
        navigator.clipboard.writeText(data.shortened).catch(console.error)
    }
    return <div>
        <ComposedModal open>
            <ModalHeader label="Your new URL:" />
            <ModalBody>
                <p style={{ marginBottom: '1rem' }}>
                    {data.original} ➾ <Link id="mainURL" href={data.shortened}>{data.shortened}</Link>
                </p>
                <Button kind="tertiary" renderIcon={(props) => <Copy32 {...props} />} onClick={doCopy}>
                    Copy
                </Button>
            </ModalBody>
        </ComposedModal>
    </div>
}

export default Output