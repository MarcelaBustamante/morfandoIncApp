import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Switch, SwitchProps } from "@react-native-material/core";
import Container from "../container";

type RadioProps = SwitchProps;

export default function RadioButtonComponent(props: RadioProps) {
  return <Switch {...props} />;
}
