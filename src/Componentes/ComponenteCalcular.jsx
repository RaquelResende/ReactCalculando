import { StyleSheet, TextInput, Text, View } from "react-native";

export default function ComponenteCalcular() {
  return (
    <View style={style.Conteiner}>
      <Text style={style.Text1}>Calculando IMC</Text>
      <TextInput style={style.Imput1} placeholder="Digite seu peso" onChangeText={(altura)=>seTaltura(altura)} />
      <TextInput style={style.Imput2} onChangeText={(peso)=>setPeso(peso)} placeholder="Digite sua altura" />

      <button title="Calcular" onPress={(valor) => {}} />

    </View>
  );
}

const style = StyleSheet.create({
  Conteiner: {
    flex: 1,
    backgraoundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text1: {
    fontSize: 30,
    fontWeigth: "bold",
    marginBottom: 20,
  },
  Imput1: {
    padding: 10,
    borderWidth: 1,
    borderColor: "000",
    borderRadius: 5,
    marginBottom: 10,
    width: "80%",
  },
  Imput2: {
    padding: 10,
    borderWidth: 1,
    borderColor: "000",
    boderRadius: 5,
    marginBottom: 10,
    width: "80%",
    borderCurve: 5,
  },
});
