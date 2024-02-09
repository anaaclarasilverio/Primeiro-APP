import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Logo from "./assets/insta.png";

export default function App() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center"
        }}>
        <Image style={{ width: 160, height: 60 }} source={Logo} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Feather name="message-circle" size={24} color="black" />
          </TouchableOpacity><FontAwesome5 name="heart" size={24} color="black" />
        </View>

      </View>
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
