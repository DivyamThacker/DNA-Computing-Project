import React from "react";
import Image from "next/image";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
const Footer = (props) => {
  return (
    <div
      className="flex-initial p-2 m-0  flex-row justify-evenly items-center"
      style={{
        display: "flex",
        backgroundColor: "rgb(25,62,110)",
        width: "100%",
        color: "white",
        justifyContent: "center",
      }}
    >
      <span style={{ padding: " 0px 10px" }}>
        <a href="https://www.guptalab.org/">GUPTALAB</a>
      </span>
      <span>
        <MDBBtn
          outline
          color="light"
          floating
          className="m-1 p-1"
          href="https://twitter.com/guptalab"
          role="button"
          zindex="2"
          target="_blank"
        >
          <MDBIcon fab icon="twitter" />
        </MDBBtn>

        {/* <MDBBtn
          outline
          color="light"
          floating
          className="m-1 p-1"
          href="https://www.youtube.com/c/ManishGuptamankg"
          role="button"
          target="_blank"
        > */}
        <a href="https://www.youtube.com/c/ManishGuptamankg" className="m-1 p-1" target="_blank">
          <MDBIcon fab icon="youtube" />
          </a>
        {/* </MDBBtn> */}
        
        {/* <MDBBtn
          outline
          color="light"
          floating
          className="m-1 p-1"
          href="https://github.com/guptalab"
          role="button"
          target="_blank"
        > */}
        <a href="https://github.com/guptalab" className="m-1 p-1" target="_blank">
          <MDBIcon fab icon="github" />
          </a>
        {/* </MDBBtn> */}
        <MDBBtn
          outline
          color="light"
          floating
          className="m-1 p-1"
          href="https://www.linkedin.com/company/guptalab/about/"
          target="_blank"
          role="button"
        >
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtn>
      </span>
    </div>
  );
};

export default Footer;
