import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import Header from "../../Components/Header";

export default function Details() {
  return (
    <View style={estilo.container}>
     <Header></Header>        
     <Text style={estilo.texto}>Essa é a tela de detalhes!!!!</Text>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
  texto:{
    marginTop:40,
    fontSize: 30
  }
});