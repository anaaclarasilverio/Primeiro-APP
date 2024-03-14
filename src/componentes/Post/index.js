import { View, Image, Text, StyleSheet } from "react-native";
import { Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Post({
    profileImage,
    postImage,
    profileName,
    description,

}) {

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
                <Image source={profileImage} style={{ width: 60, height: 60, borderRadius: 50 }} />
                <Text style={{ flex: 1, marginLeft: 16 }}>{profileName}</Text>
                <Feather name="more-vertical" size={24} color="black" />
            </View>
            <Image style={{  marginVertical: 8, width: "100%", height: 300 }} source={postImage} />
            <View style={{flexDirection: "row", width:"100%", justifyContent:"space-between"}}>
                <View style={{ flexDirection: "row", gap: 8 }}>
                    <MaterialCommunityIcons name="cards-heart-outline" size={28} color="black" />
                    <Feather name="message-circle" size={28} color="black" />
                    <FontAwesome name="paper-plane-o" size={28} color="black" />
                </View>
                <MaterialCommunityIcons name="bookmark-outline" size={28} color="black" />
            </View>
                
            <Text>{description}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        width: '100%',
        alignItems: 'baseline',



    },


})




