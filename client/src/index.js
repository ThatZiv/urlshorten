import React, { useState } from "react";
import { render } from "react-dom";

import "./style.css";
import api from "./api";
import HeaderNav from "./comps/HeaderNav";
import Output from "./comps/Output";

import Launch32 from "@carbon/icons-react/lib/launch/32";
import { TextInputSkeleton, TextInput, Form, FormGroup, Button, ComposedModal, Loading } from "carbon-components-react";
//import { TextInput, Form, FormGroup } from "carbon-components-react";

const styles = {
  innerContainer: {
    padding: 25
  },
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center"
  }
}

const isURL = (url) => {
  try {
    new URL(url)
  } catch {
    return false
  }
  return true
}

const App = () => {
  const [url, setUrl] = useState("")
  const [error, setError] = useState("") // for errors in the input field
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState(null)

  const handleInput = (e) => {
    let val = e.target.value
    setUrl(val)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) {
      return setError("Please enter a URL") // TODO: make these into react toast msgs
    }
    if (!isURL(url)) {
      return setError("Invalid URL")
    }
    setError("")
    // axios get req
    setLoading(true)
    api.create(url).then((data) => {
      //JSON.parse(data)
      setOutput(data)
    }).catch((error) => {
      console.error(error)
    }).finally(() => {
      setLoading(false)
    })

  }
  return (
    <div className="container">

      {/* Navbar */}
      <HeaderNav></HeaderNav>
      <div style={styles.innerContainer}>
        <Form onSubmit={handleSubmit}>
          <FormGroup legendText="" >
            <TextInput id="text-input-1"
              type="text"
              labelText="A free open-source alternative to shortening URLs."
              style={error ? { color: "#551010", background: "#E48080" } : {}}
              helperText={error ? error : "Enter URL here (e.g. https://google.com)"}
              onChange={handleInput}
            />
          </FormGroup>

          <Button
            style={{ width: "100%", textAlign: "center" }}
            kind="secondary"
            renderIcon={(props) => <Launch32 {...props} />}
            onClick={handleSubmit}>Shorten</Button>

        </Form>
      </div>
      {output && !loading ? <Output data={output} /> : null}
      {loading ? <Loading
        description="Generating URL" withOverlay={true}
      /> : null}
    </div>
  )
};

render(<App />, document.getElementById("root"));
