import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/filhote-de-golden-retriever.jpg";
import Fake2 from "../../assets/Praia-de-Tabatinga2-joao-pessoa.webp";
import Story from "../Story";



export default function Stories() {
    return(
        <ScrollView
      contentContainerStyle={style.container} 
      horizontal 
      showsHorizontalScrollIndicator={false}>


        <Story image={Fake1}/>
        <Story image={Fake2}/>
        <Story image={Fake1}/>
        <Story image={Fake2}/>
        <Story image={Fake1}/>
        <Story image={Fake2}/>
        <Story image={Fake1}/>
        
        
          
      </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        gap:8

    },
   

})