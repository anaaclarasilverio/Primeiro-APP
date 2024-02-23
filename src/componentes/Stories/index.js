import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/filhote-de-golden-retriever.jpg";
import Fake2 from "../../assets/Praia-de-Tabatinga2-joao-pessoa.webp";



export default function Stories() {
    return(
        <ScrollView
      contentContainerStyle={style.container} 
      horizontal 
      showsHorizontalScrollIndicator={false}>
        
        <TouchableOpacity>
        <Image
          style={style.storie}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />
          
        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={style.storie}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={style.storie}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
           
        <Image
          style={style.storie}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={style.storie}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={style.storie}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={style.storie}
          source={{
            uri: "https://ogoldenretriever.com.br/wp-content/uploads/2021/08/filhote-de-golden-retriever.jpg"
          }} />

        </TouchableOpacity>

        <TouchableOpacity>
        <Image
          style={style.storie}
          source={{
            uri: "https://i0.wp.com/viajeinaoparei.com.br/wp-content/uploads/2021/01/Praia-de-Tabatinga2-joao-pessoa.jpg?fit=800%2C550&ssl=1"
          }} />

        </TouchableOpacity>
        
          
          
          
          
          
          
      </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        gap:8

    },
    storie: { width: 100, height: 100, borderRadius: 50}

})