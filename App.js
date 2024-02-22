import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Logo from "./assets/insta.png";
import Header from "./src/componentes/Header";

export default function App() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, flex: 1 }}>
     <Header/>
      <ScrollView
      contentContainerStyle={{gap:8}} 
      horizontal style={{flexDirection: "row", gap: 10}}
      showsHorizontalScrollIndicator={false}>
        
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />
          
        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
           
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>
        
          
          
          
          
          
          
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
