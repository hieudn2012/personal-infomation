import React from "react";
import * as IconUI from "@material-ui/icons";

export default function Icon({ source, ...props }) {
  const IconResult = IconUI[source]
  return <IconResult {...props} />
}
