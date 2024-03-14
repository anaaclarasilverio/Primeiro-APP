import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../componentes/Header";
import Stories from "../componentes/Stories";
import Post from "../componentes/Post";
import julia from "../assets/Praia-de-Tabatinga2-joao-pessoa.webp";

export default function Home() {
  return (
    <ScrollView style={{ marginVertical: 32, marginHorizontal: 16 }}>
      <Header />
      <Stories />
      <Post
        profileImage={julia}
        postImage={julia}
        profileName='Júlia Santos'
        description='Lorem Lorem Lorem Lorem Loren Loren Loren Loren Loren Loren'
      />

      <Post
        profileImage={julia}
        postImage={julia}
        profileName='Júlia Santos'
        description='Lorem Lorem Lorem Lorem Loren Loren Loren Loren Loren Loren'
      />

      <Post
        profileImage={julia}
        postImage={julia}
        profileName='Júlia Santos'
        description='Lorem Lorem Lorem Lorem Loren Loren Loren Loren Loren Loren'
      />
    </ScrollView>
  );
}


