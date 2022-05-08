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

export default {
  showAlert
}