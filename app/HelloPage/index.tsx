import Footer from "@/components/Footer";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HelloPage() {
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.text}>Oui bonjour.</Text>
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
    textAlign: "center",
    fontSize: 30,
  },
});
