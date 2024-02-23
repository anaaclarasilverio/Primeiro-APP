import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Logo from "../../assets/insta.png";


export default function Header() {
    return (
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center"
          }}>
          <Image style={{ width: 160, height: 60 }} source={Logo} />
          <View style={ style.icons}>
            <TouchableOpacity>
              <Feather name="message-circle" size={24} color="black" />
            </TouchableOpacity><FontAwesome5 style={style.icon} name="heart" size={24} color="black" />
          </View>
  
        </View>
   

     
    )
}

const style = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"


  },
  icons: {flexDirection: "row"},
  icon: {marginLeft: 8}
    
  
})