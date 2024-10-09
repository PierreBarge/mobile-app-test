import Footer from "@/components/Footer";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.text}>Ceci est l'index.</Text>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});
