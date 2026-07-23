import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';


export default function App() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [hobby, setHobby] = useState('');
  const [aceito, setAceito] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.conteudo1}> 
          <Image
            style={styles.imagem}
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png" }}
          />
      </View>

      
      <View style={styles.conteudo2}> 
        <View style={styles.div1}>
        <Text>Dados Pessoais</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Digite seu nome"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={setTelefone}
            value={telefone}
            placeholder="Digite seu telefone"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEndereco}
            value={endereco}
            placeholder="Digite seu endereço"
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Digite seu E-mail"
            keyboardType="email-address"
          />
          
        </View>
      </View>
      
      <View style={styles.conteudo3}> 
        <View style={styles.div2}>
          <Text style={styles.text2}>Outras informações</Text>
          < Picker selectedValue={hobby} onValueChange={(itemValue, itemIndex) => setHobby(itemValue)} style={styles.picker1}>
            <Picker.Item label="Programa" value="java"/>
            <Picker.Item label="Html" value="html"/>
          </Picker>
          <View style={styles.checkbox1}>
            <Checkbox value={aceito} onValueChange ={setAceito} >
              value={true}
            </Checkbox>
            <Text style={styles.textCheck}>Aceitar os termos de serviço. </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.conteudo4}> 
          <View style={styles.div3}>
            <Text style={styles.Text3}>Nome: {nome}</Text>
            <Text style={styles.Text3}>Telefone: {telefone}</Text>
            <Text style={styles.Text3}>Endereço: </Text>
            <Text style={styles.Text3}>Email: {email}</Text>
            <Text style={styles.Text3}>Hobby: {hobby}</Text>
            <Text style={styles.text3}>Aceito:{aceito ==true?"👍":"👎"} </Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo1:{
    flex:1,
    alignItems: 'center'
  },

  picker1:{
    borderRadius:2,
    borderColor:'black',
    paddingHorizontal:7,
    paddingVertical:7,
    marginBottom:10
  },

  text2:{
    marginBottom:10,
    fontSize:17
  },

  conteudo2:{
    flex:1.6
  },
  conteudo3:{
    flex:1
  },
  conteudo4:{
    flex:1.5
  },

  checkbox1:{
    flexDirection:'row',
  },

  textCheck:{
    marginLeft:5,
  },

  imagem:{
    width: 120,
    height:120,
    borderRadius:20,
    marginVertical:5,
    marginHorizontal:10,
  },

  div1:{
    paddingVertical:10,
    paddingHorizontal:10,
    marginHorizontal:10,
    marginBottom:1,
    borderWidth:2,
    borderRadius:20,
    borderColor:'black',
  },

  div2:{
    paddingVertical:10,
    marginTop:4,
    paddingHorizontal:10,
    marginHorizontal:10,
    borderWidth:2,
    borderRadius:20,
    borderColor:'black',
  },

  div3:{
    paddingVertical:10,
    paddingHorizontal:10,
    marginHorizontal:10,
    paddingBottom:2,
    borderWidth:2,
    borderRadius:20,
    borderColor:'black',
  },

  Text3:{
    marginBottom:10,
    fontSize:16
  },

  text3:{
    fontSize:16
  },

  input:{
  borderWidth:1,
  borderColor:'black',
  padding:7,
  marginTop:8,
  fontSize:12
  }
});
