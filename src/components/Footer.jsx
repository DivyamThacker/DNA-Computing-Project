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
        <a href="https://twitter.com/guptalab">
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
        </a>

        <a href="https://www.linkedin.com/company/guptalab/about/">
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
        </a>
        <a href="https://github.com/guptalab">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 p-1"
            href="https://github.com/guptalab"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </a>
        <a href="https://www.youtube.com/c/ManishGuptamankg">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1 p-1"
            href="https://www.youtube.com/c/ManishGuptamankg"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="youtube" />
          </MDBBtn>
        </a>
      </span>
    </div>
  );
};

export default Footer;
