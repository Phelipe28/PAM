import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [jogador, setJogador] = useState(0)
  const [maquina, setMaquina] = useState(0)

  const [imagens, setImagens] = useState(
    [require("./assets/vermelho.webp"),//0
      require("./assets/amarelo.webp"),//1
      require("./assets/pedra.png"),//2
      require("./assets/mao.png"),//3
      require("./assets/tesoura.png")//4
  ])

  const [jogadorImg, setJogadorImg] = useState(0)
  const [maquinaImg, setMaquinaImg] = useState(1)

  const pedra =()=>{
    setJogadorImg(2)
    const valorMaquina = Math.floor(Math.random() * 3)+2
    setMaquinaImg(valorMaquina)
    if(valorMaquina==4){
      setJogador(jogador+1)
    }else if(valorMaquina == 3){
      setMaquina(maquina+1)
    }
  }

  const mao =()=>{
    setJogadorImg(3)
    const valorMaquina = Math.floor(Math.random() * 3)+2
    setMaquinaImg(valorMaquina)
    if(valorMaquina==2){
      setJogador(jogador+1)
    }else if(valorMaquina == 4){
      setMaquina(maquina+1)
    }
  }
  
  
  const tesoura =()=>{
    setJogadorImg(4)
    const valorMaquina = Math.floor(Math.random() * 3)+2
    setMaquinaImg(valorMaquina)
    if(valorMaquina==3){
      setJogador(jogador+1)
    }else if(valorMaquina == 2){
      setMaquina(maquina+1)
    }
  }

  const start =()=>{
    setJogador(0)
    setMaquina(0)
    setJogadorImg(0)
    setMaquinaImg(1)
  }

  

  return (
    <View style={styles.container}>

      <View style={styles.conteudo1}>
        <Text style={styles.text1}>JOKENPO</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.conteudo2}>
        <Text style={styles.text2}>Placar</Text>
        <View style={styles.div}>
          <Text style={styles.text}>{jogador}</Text>
          <Text style={styles.text}>{maquina}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.conteudo3}>
        <View style={styles.Image}>
            <Image 
                style={{ width: 85, height: 85 }}
                source={imagens[jogadorImg]}
            />
            <Image 
                style={{ width: 90, height: 90 }}
                source={require("./assets/image.png")}
            />
            <Image 
                style={{ width: 85, height: 85 }}
                source={imagens[maquinaImg]}
            />
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.conteudo4}>
        <Pressable style={styles.Botao} onPress={() => start()}>
          <Text style={styles.textoBotao}>Nova Partida</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
      <View style={styles.conteudo5}>
         <View style={styles.imagem2}>
          <Pressable onPress={() => pedra()}>
            <Image 
                style={{ width: 85, height: 85}}
                source={require("./assets/pedra.png")}
            />
          </Pressable>
          <Pressable onPress={() => mao()}>
            <Image 
                style={{ width: 85, height: 85}}
                source={require("./assets/mao.png")}
            />
          </Pressable>
          <Pressable onPress={() => tesoura()}>
            <Image 
                style={{ width: 85, height: 85}}
                source={require("./assets/tesoura.png")}
            />
          </Pressable>
        </View>
        <StatusBar style="auto" />
        </View>

    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(201, 0, 0)',
  },

  conteudo1: {
    flex:1.6,
    backgroundColor: 'rgb(156, 231, 241)',
    fontSize:1
  },
  text1: {
    fontSize: 50,
    textAlign: 'center',
    marginTop:45,
    fontFamily:'Georgia',
    letterSpacing: 10,
    color:'#rgb(0, 0, 0)' ,
  },
  conteudo2: {
    flex:1.6,
    backgroundColor: '#rgb(156, 231, 241)',
    
  },
  text2:{
    fontSize:29,
    textAlign:'center',
    marginTop:10,
    fontFamily:'Georgia',
    color:'#rgb(0, 0, 0)' ,
  },
  text:{
    fontSize:25,
    textAlign:'center',
    fontFamily:'Arial',
  },
  div:{
    justifyContent:'space-around',
    flexDirection:'row',
    marginTop:50,
  },
  conteudo3: {
    flex:1.3,
    backgroundColor: 'rgb(156, 231, 241)'
  },

  Image:{
  justifyContent: 'space-around',
  flexDirection:'row',
  marginTop:25,
  },

  Botao:{
    borderWidth:2,
    borderColor:'rgb(0, 0, 0)',
    backgroundColor: 'rgba(255, 21, 72, 0.84)',
    width:200,
    borderRadius:10,
    paddingVertical: 25,  // altura
    paddingHorizontal: 40, // largura
    marginTop:20,
  },

  textoBotao:{
    textAlign:'center',
    fontSize:20,
    fontFamily:'Georgia',
  },

  conteudo4: {
    alignItems:'center',
    justifyContent:'center',
    flex:1.6,
    backgroundColor: 'rgb(156, 231, 241)',
  },
  conteudo5: {
    flex:1.8,
    backgroundColor: 'rgb(156, 231, 241)'
  },
  imagem2:{
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop:25,
  },

});