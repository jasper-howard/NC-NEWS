import { StyleContext } from "../context/styleContext";
import { useContext } from "react";

const DivWithContext = (props) => {
  const { borderStyle, setBorderStyle } = useContext(StyleContext);

  if ((borderStyle === "all") | (borderStyle === "undefined")) {
    setBorderStyle("");
  }

  return <div className={`Div ${borderStyle}`}>{props.children}</div>;
};

export default DivWithContext;
