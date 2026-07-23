import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView,Pressable } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState("");
  const [analisado, setAnalisado] = useState(false);
  const [resultado, setResultado] = useState({
    tipo: "",
    sinal: "",
    dobro: "",
    triplo: "",
    metade: "",
    quadrado: "",
    cubo: "",
    raiz: "",
    digitos: "",
    binario: "",
    ehPrimo: "",
    tabuada:[]
  });

  const ehPrimo = (n) => {
    if (n < 2) return "Não é primo";
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return "Não é primo";
    }
    return "Primo";
  };

  const analisar = () => {
  const n = parseInt(numero);

    if (isNaN(n)) {
      alert("Digite um número válido");
      return;
    }

     const tabuada = [];

  for (let i = 1; i <= 10; i++) {
    tabuada.push(`${n} x ${i} = ${n * i}`);
  }
    
    setResultado({
      tipo: n % 2 === 0 ? "Par" : "Ímpar",
      sinal: n > 0 ? "Positivo" : n < 0 ? "Negativo" : "Zero",
      dobro: n * 2,
      triplo: n * 3,
      metade: n / 2,
      quadrado: n ** 2,
      cubo: n ** 3,
      raiz: n >= 0 ? Math.sqrt(n).toFixed(2) : "Não existe",
      digitos: Math.abs(n).toString().length,
      binario: n.toString(2),
      ehPrimo: ehPrimo(n),
      tabuada:tabuada,
    });

    setAnalisado(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Analisador de Números</Text>
      <Text style={styles.subtitle}>Descubra tudo sobre o numero!</Text>

      <TextInput
        style = {styles.TextInput}
        placeholder='Digite um numero'
        placeholderTextColor="#9CA3AF"
        keyboardType='numeric'
        value={numero}
        onChangeText={setNumero}
      />

      <Pressable style={styles.button} onPress={analisar}>
        <Text style={styles.TextButton}>Analisar</Text>
      </Pressable>

      {analisado &&(
        <View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Resultado</Text>

          <Text style={styles.infoValue}>Tipo: {resultado.tipo}</Text>
          <Text style={styles.infoValue}>Sinal: {resultado.sinal}</Text>
          <Text style={styles.infoValue}>Dobro: {resultado.dobro}</Text>
          <Text style={styles.infoValue}>Triplo: {resultado.triplo}</Text>
          <Text style={styles.infoValue}>Metade: {resultado.metade}</Text>
          <Text style={styles.infoValue}>Quadrado: {resultado.quadrado}</Text>
          <Text style={styles.infoValue}>Cubo: {resultado.cubo}</Text>
          <Text style={styles.infoValue}>Raiz: {resultado.raiz}</Text>
          <Text style={styles.infoValue}>Digitos: {resultado.digitos}</Text>
          <Text style={styles.infoValue}>Binario: {resultado.binario}</Text>
          <Text style={styles.infoValue}>Primo: {resultado.ehPrimo}</Text>
    

        </View>
        <View style={styles.tabuadaBox}>
         <Text style={styles.infoTitle}>Tabuada:</Text>
         {resultado.tabuada.map((item, index) => (
         <Text key={index} style={styles.infoValue}>
         {item}
         </Text>
            ))}
        </View>
        </View>

      )}
    
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0eaf7",
    padding: 20,
    paddingTop: 70,
  },

  title:{
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    textAlign: 'center',
    marginTop: 10,
    color:'#000000bb',
    fontWeight: '500',
  },

  TextInput:{
    backgroundColor: '#fcfcfcbb',
    borderColor: '#a4a5a7',
    borderWidth: 1,
    borderRadius: 20,
    padding: 17,
    marginTop: 30,
    fontSize: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4, 
    outlineStyle: 'none', 
  },

  button: {
    backgroundColor: '#0077ff',
    borderColor: '#a4a5a7',
    borderWidth: 1,
    borderRadius: 20,
    padding: 17,
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius:4,
    elevation: 4,
  },

  TextButton: {
    textAlign: 'center',
    fontSize:17,
    color: '#e3e3e4',
    fontWeight:'bold',
  },

  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 25,
    padding: 23,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius:4,
    elevation: 4,
  },
   
  infoTitle: {
    textAlign: 'center',
    marginBottom:20,
    fontSize: 23,
    fontWeight:'bold',
  },

  infoValue: {
    marginBottom:20,
    borderColor:'#a4a5a7',
    borderWidth:1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingBottom:4,
    color: '#0e0d0d',
    fontWeight: '500',
  },

tabuadaBox: {
  backgroundColor: '#fff',
  borderRadius: 20,
  marginTop: 20,
  padding: 20,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 4,
},


});