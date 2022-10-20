import * as React from "react";
import { ButtonProps, Button as MaterialButton } from "@react-native-material/core";

export default function Button(props: ButtonProps) {
  return <MaterialButton {...props} />;
}
