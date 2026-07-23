import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Modal, Pressable,  } from 'react-native';


export default function App() {
  
  const [modalVisible, setModalVisible] = useState (true)
  const [posicao,setPosicao] = useState(0)

  const [Dados, setDados] = useState([
    {
    nome:"Sol",
    anosLuz:"19000km/h",
    duracaoDia:"24,5 dias terrestres",
    duracaoAno:"365 dias e 6 horas",
    temperatura:"Aproximadamente 5.000.000c",
    diametro:"Aproximadamente 1.392.700km",
    imagem:require("./assets/sol.png"),
    },
    {
    nome:"Mercurio",
    anosLuz:"0,000006",
    duracaoDia:"176 dias terrestres",
    duracaoAno:"88 dias terrestres",
    temperatura:"Diurno:430c,Noturno:-180c",
    diametro:" aproximadamente 4.880 km",
    imagem:require("./assets/mercurio.png"),
    },
    {
    nome:"Vênus",
    anosLuz:"0,000011",
    duracaoDia:"243 dias terrestres ",
    duracaoAno:"225 dias terrestres",
    temperatura:"aproximadamente 462C",
    diametro:"12.104 km",
    imagem:require("./assets/venus.png"),
    },
    {
    nome:"Terra",
    anosLuz:"0,000016",
    duracaoDia:"24 horas ",
    duracaoAno:"365 terrestres",
    temperatura:"aproximadamente 15C",
    diametro:"aproximadamente 12.700 km",
    imagem:require("./assets/terra.png"),
    },
    {
    nome:"Marte",
    anosLuz:"0,000024",
    duracaoDia:"24 horas e 37 minutos ",
    duracaoAno:"687  dias terrestres",
    temperatura:"aproximadamente -63C",
    diametro:"6.779 km",
    imagem:require("./assets/marte.png"),
    },
    {
    nome:"Jupiter",
    anosLuz:"0,000082",
    duracaoDia:" aproximadamente 9 horas e 50 minutos  ",
    duracaoAno:"4.331 dias terrestres ",
    temperatura:"aproximadamente -110C a -145C",
    diametro:"aproximadamente 142.984km",
    imagem:require("./assets/jupiter.png"),
    },
    {
    nome:"Saturno",
    anosLuz:"0,00015",
    duracaoDia:"0d 10h 34m ",
    duracaoAno:"29,4 anos terrestres",
    temperatura:" aproximadamente -138°C",
    diametro:"120.500 km.",
    imagem:require("./assets/saturno.png"),
    },
    {
    nome:"Urano",
    anosLuz:"0,00030",
    duracaoDia:"0d 17h 14m ",
    duracaoAno:" 84 anos terrestres",
    temperatura:" aproximadamente -220 C",
    diametro:"51.118 km",
    imagem:require("./assets/urano.png"),
    },
    {
    nome:"Netuno",
    anosLuz:"0,00048",
    duracaoDia:"0d 16h 6m ",
    duracaoAno:"cerca de 165 anos terrestres",
    temperatura:" aproximadamente -214 c",
    diametro:"aproximadamente 49.528km",
    imagem:require("./assets/netuno.png"),
    },

]);

function voltar(){
    setModalVisible(false)
}

function abrirModal(p){
    setModalVisible(true);
    setPosicao(p);
}
  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Modal visible={modalVisible} animationType = "slide">
                    <View style={styles.fundo}>
                      <View style={styles.containerImagemModal}>
                           <Image 
                              style={{ width: '100%', height: '100%', justifyContent:'center',alignItems:'center',backgroundColor:'black'}}
                              source={Dados[posicao].imagem}
                              resizeMode="contain"
                           />
                      </View>
                        <View style={styles.Textos}> 
                            <Text style={styles.texto1}>Nome :{Dados[posicao].nome}</Text>
                            <Text style={styles.texto1}>Anos Luz:{Dados[posicao].anosLuz}</Text>
                            <Text style={styles.texto1}>Duração do Dia:{Dados[posicao].duracaoDia}</Text>
                            <Text style={styles.texto1}>Duração do Ano:{Dados[posicao].duracaoAno}</Text>
                            <Text style={styles.texto1}>Temperatura:{Dados[posicao].temperatura}</Text>
                            <Text style={styles.texto1}>Diâmetro:{Dados[posicao].diametro}</Text>
           
                        </View>
                         
                        <View style={styles.areaBotao}>
                          <Button title="voltar"color={"#2563EB"} onPress={() => voltar()} /> 
                        </View>
                      
                    </View>
                  
                    
        </Modal>
        <View style={styles.conteudo1}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(0)}>
            <Image 
                style={{ width: 500, height: 500}}
                source={ require("./assets/sol.png")}
            />
        </Pressable>
        </View>
        
        <View style={styles.conteudo2}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(1)}>
            <Image 
                style={{ width: 100, height: 100}}
                source={ require("./assets/mercurio.png")}
            />
        </Pressable>    
        </View>
        <View style={styles.conteudo3}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(2)}>
            <Image 
                style={{ width: 150, height: 150}}
                source={ require("./assets/venus.png")}
            />
        </Pressable>
        </View>
        <View style={styles.conteudo4}>
            <Pressable style={styles.botao} onPress={()=>abrirModal(3)}>
            <Image 
                style={{ width: 250, height: 250}}
                source={ require("./assets/terra.png")}
            />
        </Pressable>
        </View>
        <View style={styles.conteudo5}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(4)}>
            <Image 
                style={{ width: 200, height: 200}}
                source={ require("./assets/marte.png")}
            />
        </Pressable>
        </View>
        <View style={styles.conteudo6}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(5)}>
            <Image 
                style={{ width: 320, height: 320}}
                source={ require("./assets/jupiter.png")}
            />
        </Pressable>
        </View>
        <View style={styles.conteudo7}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(6)}>
            <Image 
                style={{ width: 250, height: 250}}
                source={ require("./assets/saturno.png")}
            />
        </Pressable >
        </View>
        <View style={styles.conteudo8}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(7)}>
            <Image 
                style={{ width: 220, height: 220}}
                source={ require("./assets/urano.png")}
            />
        </Pressable>
        </View>
        <View style={styles.conteudo9}>
        <Pressable style={styles.botao} onPress={()=>abrirModal(8)}>
            <Image 
                style={{ width: 200, height: 200}}
                source={ require("./assets/netuno.png")}
            />
        </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  fundo: {
    flex: 1,
    backgroundColor: 'black',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  containerImagemModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  Textos: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  texto1: {
    color: 'white',
    fontSize: 20,
    marginBottom: 15,
    fontFamily: 'monospace',
  },

  areaBotao: {
    marginBottom: 30,
    paddingHorizontal: 30,
  },

  scrollContent: {
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  conteudo1: {
    marginBottom: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo2: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo3: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo4: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo5: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo6: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo7: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo8: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteudo9: {
    marginBottom: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },

});