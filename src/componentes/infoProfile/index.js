import { View, Image, Text, StyleSheet } from 'react-native';
export default function InfoProfile({image, publi, followers, following, description}){
    return(
        <View style={styles.container}>
            <Image style = {{width: 100, height: 100, borderRadius:50}} source={image}/>
            <View style={{flexDirection:'row'}}>
                <View style = {{alignItems: "center"}}>
                    <Text>{publi}</Text>
                    <Text style = {{fontWeight: "bold"}}>Publicações</Text>
                </View>

                <View style = {{marginHorizontal: 20, alignItems:"center"}}>
                    <Text>{followers}</Text>
                    <Text style = {{fontWeight: "bold"}}>Seguidores</Text>
                </View>

                <View style = {{alignItems:"center"}}>
                    <Text>{following}</Text>
                    <Text style = {{fontWeight: "bold"}}>Seguindo</Text>
                </View>
            </View>
                
        </View>
       

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        justifyContent: "space-between", 
        alignItems: "center"
    }

})
