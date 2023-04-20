import React from "react";
import classes from "@/components/UI/FetchWrapper.module.css";

export default function FetchWrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

