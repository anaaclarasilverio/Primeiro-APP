import { TouchableOpacity, Image, StyleSheet } from "react-native";
export default function Stories({image}) {
    return(
        <TouchableOpacity>
        <Image
          style={styles.storie}
          source={image} />

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    storie: { width: 100, height: 100, borderRadius: 50}
});