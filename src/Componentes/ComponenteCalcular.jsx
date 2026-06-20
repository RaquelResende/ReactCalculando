import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { useState } from "react";
import ComponenteIndicador from "./ComponenteIndicador";

export default function ComponenteCalcular() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("");

  function calcularImc() {
    if (isNaN(altura) || isNaN(peso)) {
      alert("Preencha os campos para calcular o IMC");
      return;
    }
    const valorResultado = peso / Math.pow(altura, 2);
    setImc(valorResultado.toFixed(2));
  }

  return (
    <View style={style.Conteiner}>
      <Text style={style.Text1}>Calculando IMC</Text>
      <TextInput
        style={style.Imput1}
        placeholder="Digite seu altura"
        onChangeText={setAltura}
      />
      <TextInput
        style={style.Imput2}
        onChangeText={setPeso}
        placeholder="Digite sua Peso"
      />

      <Button title="Calcular" onPress={calcularImc} />

      {imc !== "" && <ComponenteIndicador imc={Number(imc)} />}
      <Text style={style.Text2}>{imc}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  Conteiner: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Text2: {
    fontSize: 30,
    fontWeight: "bold",
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
    borderRadius: 5,
    marginBottom: 10,
    width: "80%",
    borderCurve: 5,
  },
});
