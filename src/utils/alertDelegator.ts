import { Alert } from "react-native";

function showAlert(status: number, message: string) {
  console.log(status)

  if (status === 200) {
    Alert.alert(
      "Sucesso",
      message,
    )
  } else {
    Alert.alert("Erro", message);
  }
}

function signUpPasswordValidation(password: string, confirmPassword: string) {
  if (!password) {
    Alert.alert("Erro", "Preencha o campo de senha");
    return false
  }

  if (password === confirmPassword) {
    return true
  }

  Alert.alert("Senhas não conferem")
  return false
}

export default {
  showAlert,
  signUpPasswordValidation
}