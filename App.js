import { View, StyleSheet} from "react-native";
import InfoProfile from "./src/componentes/infoProfile";
import Perfil from './src/assets/Praia-de-Tabatinga2-joao-pessoa.webp'
import MyPosts from "./src/componentes/MyPosts";

export default function App() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, flex: 1 }}>

      <InfoProfile
      image={Perfil}
      publi={250}
      followers={1230}
      following={5}
      description=""/>

      <MyPosts
      image={Perfil}/>
      
      
      
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
