import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BlueTitle from "../../components/blue-title/blue-title";
import Button from "../../components/button";
import Input from "../../components/input/input";
import WhiteBackgroundView from "../../components/white-background-view/white-background-view";
import ButtonWithLoading from "../../components/button-with-loading/button-with-loading";
// import Colors from "../../constants/colors";
import TextButton from "../../components/text-button/text-button";

interface Props {
}
type Fields = 'nombre' | 'apellido'| 'email'| 'password' | 'confirmPassword'

export default function RegisterView({
}: Props) {
  const [ registerButtonEnabled, setRegisterButtonEnabled] = React.useState<boolean>(false);
  const buttonContainerStyles = [styles.registerButtonContainer, registerButtonEnabled && styles.registerButtonContainerEnabled];
  const buttonTextStyles = [styles.registerButtonText, registerButtonEnabled && styles.registerButtonTextEnabled];
  const [nombre, setNombre] = React.useState<string>("");
  const [apellido, setApellido] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmconfirmPassword] = React.useState<string>("");
  

  const fieldChanged = (field: Fields) => (text: string) => {
    switch (field) {
      case 'nombre':
        setNombre(text);
        break;
      case 'apellido':
        setNombre(text);
        break;
      case 'email':
      setNombre(text);
      break;
    }
  };

  // const onSelectDropdown = (selectedItem: string) => {
  //   fieldChanged("sex")(selectedItem);
  // };

  // const blurField = (field: keyof RegisterValue) => () => {
  //   onBlurField(field);
  // };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <BlueTitle
          titleText="Registro de usuario"
          viewStyles={styles.titleContainer}
        />
        <Text style={styles.subtitle}>
          Registrate en Educación Fianciera Simple y aprendé a potenciar tus
          ingresos de forma rápida e inteligente.
        </Text>
        <WhiteBackgroundView viewStyles={styles.registerBox}>
          <Input
            placeholder="Nombre"
            viewStyles={styles.inputContainer}
            errorStyles={styles.errorText}
            value={nombre}
            onChangeText={fieldChanged("nombre")}
            errorText="El nombre ingresado no es correcto."
            // showError={value.invalidEmail}
            // onBlur={blurField("email")}
            // disabled={isLoading}
          />
          <Input
            placeholder="Apellido"
            viewStyles={styles.inputContainer}
            errorStyles={styles.errorText}
            value={apellido}
            onChangeText={fieldChanged("apellido")}
            errorText="Debe completar este campo."
            // showError={value.invalidName}
            // onBlur={blurField("nameAndLastName")}
            // disabled={isLoading}
          />
          <Input
            placeholder="Contraseña"
            viewStyles={styles.inputContainer}
            errorStyles={styles.errorText}
            secureTextEntry
            value={password}
            onChangeText={fieldChanged("password")}
            errorText="La password no cumple con los criterios. Al menos 1 caracter especial, 1 letra mayuscula, 1 minuscula, 1 numero."
            // showError={value.invalidPassword}
            // onBlur={blurField("password")}
            // disabled={isLoading}
          />
          <Input
            placeholder="Confirmar contraseña"
            secureTextEntry
            viewStyles={styles.inputContainer}
            errorStyles={styles.errorText}
            value={confirmPassword}
            onChangeText={fieldChanged("confirmPassword")}
            errorText="La password ingresada no es identica a la anterior."
            // showError={value.invalidConfirmPassword}
            // onBlur={blurField("confirmPassword")}
            // disabled={isLoading}
          />
        </WhiteBackgroundView>
        <View style={styles.termsAndCondsContainer}>
          <Text style={styles.termsAndCondsTitle}>
            *Al registrarse, usted acepta nuestros
          </Text>
          <TextButton
            textStyle={styles.termsAndCondButtonText}
            buttonContainerStyle={styles.termsAndCondButtonContainer}
            text="Términos y condiciones"
            onPress={() => console.log('terminos')}
          />
        </View>
        <ButtonWithLoading
          // disabled={!value.registerButtonEnabled}
          title="Registrarse"
          // style={{
          //   container: buttonContainerStyles,
          //   text: buttonTextStyles,
          // }}
          onPress={()=>console.log('pachurrao')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    height: "100%",
    marginTop: 15,
  },
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  titleContainer: {
    marginHorizontal: 23,
    marginBottom: 16,
  },
  subtitle: {
    marginHorizontal: 16,
    maxWidth: 328,
    fontSize: 16,
    lineHeight: 26,
    //color: Colors.lightGray,
    marginBottom: 9,
    // fontFamily: 'redhatdisplay-regular'
  },
  registerBox: {
    marginLeft: 24,
    marginRight: 39,
    paddingVertical: 7,
    paddingHorizontal: 8,
    alignSelf: "stretch",
  },
  inputContainer: {
    marginVertical: 7,
    marginHorizontal: 8,
    //borderColor: Colors.inputBorder,
  },
  errorText: {
    marginHorizontal: 10,
  },
  termsAndCondsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  termsAndCondsTitle: {
   // color: Colors.gray,
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  termsAndCondButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 15,
    marginVertical: 1,
  },
  termsAndCondButtonText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  registerButtonContainer: {
    borderWidth: 1,
    //borderColor: Colors.gray,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 24,
    marginRight: 39,
    alignSelf: "stretch",
  },
  registerButtonText: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
   // color: Colors.gray,
  },
  registerButtonTextEnabled: {
   // color: Colors.white,
  },
  registerButtonContainerEnabled: {
    //backgroundColor: Colors.blue,
  },
  dropdownContainer: {
    //borderColor: Colors.inputBorder,
    borderRadius: 3.5,
    borderWidth: 0.3,
    marginHorizontal: 8,
    paddingHorizontal: 5,
  },
  dropdown: {
    width: "100%",
    height: 48,
  },
  dropdownText: {
    //color: Colors.black,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.16,
  },
});
