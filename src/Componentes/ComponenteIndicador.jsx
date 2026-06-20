import { View, Text, StyleSheet } from "react-native";

export default function ComponentIndicador({ imc }) {
  const posicao = Math.min((imc / 40) * 100, 100);

  function classificacao(valor) {
    if (valor < 18.5) return "Abaixo do peso";
    if (valor < 25) return "Peso normal";
    if (valor < 30) return "Sobrepeso";
    return "Obesidade";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.indicador}>
        <Text style={{ left: `${posicao}%`, position: "absolute" }}>▲</Text>
      </Text>

      <View style={styles.barra}>
        <View
          style={[styles.faixa, { backgroundColor: "#3b82f6", flex: 18.5 }]}
        />
        <View
          style={[styles.faixa, { backgroundColor: "#22c55e", flex: 6.5 }]}
        />
        <View style={[styles.faixa, { backgroundColor: "#facc15", flex: 5 }]} />
        <View
          style={[styles.faixa, { backgroundColor: "#ef4444", flex: 10 }]}
        />
      </View>

      <Text style={styles.valor}>IMC: {imc}</Text>

      <Text style={styles.classificacao}>{classificacao(imc)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },

  barra: {
    flexDirection: "row",
    height: 25,
    borderRadius: 12,
    overflow: "hidden",
  },

  faixa: {
    height: "100%",
  },

  indicador: {
    height: 20,
    position: "relative",
  },

  valor: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },

  classificacao: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 18,
  },
});
