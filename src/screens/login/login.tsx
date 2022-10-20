import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import Button from "../../components/button";
import WhiteBackgroundView from "../../components/white-background-view/white-background-view";
import Input from "../../components/input/input";
import ButtonWithLoading from "../../components/button-with-loading/button-with-loading";
import Theme from "../../styles/Theme";
// import ErrorText from "../../components/error-text/error-text";
import TextButton from "../../components/text-button/text-button";

interface Props {
}

export default function Login({ }: Props) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const buttonContainerStyles = [styles.loginButtonContainer, email && password && styles.loginButtonContainerEnabled];
  const buttonTextStyles = [styles.loginButtonText, email && password && styles.loginButtonTextEnabled];

  const fieldChanged = (field: 'username' | 'password') => (text: string) => {
    if (field === 'username') {
      setEmail(text);
    } else {
      setPassword(text);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>Ingresá</Text>
      <WhiteBackgroundView viewStyles={styles.whiteBackgroundContainer}>
        <Input
          onChangeText={fieldChanged("username")}
          // disabled={isLoading}
          placeholder="Email"
          value={email}
          // showError={value.invalidEmail}
          viewStyles={styles.inputContainer}
          inputStyles={styles.input}
          errorText="El mail ingresado no es correcto."
          errorStyles={styles.inputError}
        />
        <Input
          onChangeText={fieldChanged("password")}
          // disabled={isLoading}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          // showError={isInvalidPassword}
          inputStyles={styles.input}
          viewStyles={styles.inputContainer}
          errorText="Debe completar el campo password para ingresar."
          errorStyles={styles.inputError}
        />
        {/* {isInvalidCredentials && (
          <ErrorText errorText="Credenciales ingresadas no son válidas" />
        )} */}
        <TextButton
          buttonContainerStyle={styles.forgotPasswordContainer}
          text="¿Olvidaste tu contraseña?"
        />
        <ButtonWithLoading
          title="Ingresar"
          contentContainerStyle={buttonContainerStyles}
          titleStyle={buttonTextStyles}
          // onPress={onLoginPress}
          // disabled={value.invalidEmail || value.invalidPassword}
          // isLoading={isLoading}
        />
        <View style={styles.separator} />
        <Button
          title="Google"
          // style={{
          //   container: styles.googleSSOButtonContainer,
          //   text: styles.googleSSOButtonText,
          // }}
          // icon={
          //   <Image source={require("../../../assets/images/misc/google.png")} />
          // }
        />
      </WhiteBackgroundView>
      <View style={styles.bottomContainer}>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>¿No tenés cuenta?</Text>
          <TextButton
            buttonContainerStyle={styles.noAccountButtonContainer}
            text="Registrate"
            // onPress={onRegisterPress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    lineHeight: 36,
    fontWeight: "bold",
    // color: Colors.blue,
    marginVertical: 75,
  },
  whiteBackgroundContainer: {
    minWidth: 350,
    paddingHorizontal: 17,
    paddingVertical: 24,
    marginHorizontal: 24,
    alignSelf: "stretch",
  },
  inputContainer: {
    marginVertical: 4,
  },
  inputError: {
    marginBottom: 4,
  },
  input: {
    paddingHorizontal: 16,
  },
  forgotPasswordContainer: {
    marginBottom: 24,
  },
  loginButtonContainer: {
    borderWidth: 1,
    // borderColor: Colors.gray,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  loginButtonText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
    // color: Colors.gray,
  },
  loginButtonTextEnabled: {
    // color: Colors.white,
  },
  loginButtonContainerEnabled: {
    // backgroundColor: Colors.blue,
  },
  separator: {
    borderTopWidth: 1,
    // borderColor: Colors.grayAlmostBlack,
    marginTop: 24,
    marginBottom: 16,
  },
  googleSSOButtonContainer: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  googleSSOButtonText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
    // color: Colors.gray,
    marginHorizontal: 16,
  },
  bottomContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  noAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  noAccountText: {
    // color: Colors.blue,
    letterSpacing: 0.1,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
  },
  noAccountButtonContainer: {
    paddingLeft: 5,
  },
});
