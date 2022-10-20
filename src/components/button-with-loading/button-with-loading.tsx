import * as React from "react";
import { StyleSheet } from "react-native";
import { Button as MaterialButton, ButtonProps } from "@react-native-material/core";
import LoadingBanner from "../loading-banner/loading-banner";

type ButtonWithLoadingProps = ButtonProps & {
  isLoading?: boolean;
};

export default function ButtonWithLoading(props: ButtonWithLoadingProps) {
  if (props.isLoading) {
    return <MaterialButton {...props} title="Loading" /*icon={<LoadingBanner />}*/ />;
  }

  return <MaterialButton {...props} />;
}
