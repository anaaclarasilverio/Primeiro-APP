import { View, StyleSheet} from "react-native";
import Header from "../componentes/Header";
import Stories from "../componentes/Stories";

export default function Home() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, flex: 1 }}>
     <Header/>
     <Stories/>
      
      
      
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
