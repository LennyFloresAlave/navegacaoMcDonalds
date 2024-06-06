import { Text, View, Image,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import estilo from "./style";

export default function Card({ preco, titulo, imagem, descricao, valorCalorico, categoria }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={estilo.card} onPress={()=> navigation.navigate('Details')}>
      <Image style={estilo.imagemCard} source={{ uri: imagem }} />

      <View style={{ marginLeft: 15, width: 150 }}>
        <Text style={estilo.tituloCard}>{titulo}</Text>

        <Text style={estilo.textoCard}>{descricao}</Text>
        <Text style={estilo.textoCard}>{valorCalorico}</Text>
        <Text style={estilo.textoCard}>{categoria}</Text>
      </View>

      <Text style={{ fontSize: 20,marginTop:20 }}>{preco}</Text>
    </TouchableOpacity>
  );
}