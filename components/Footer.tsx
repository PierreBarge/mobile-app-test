import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.main}>
      <Link style={styles.link} href="/">
        Accueil
      </Link>
      <Link style={styles.link} href="/HelloPage">
        Bonjour
      </Link>
      <Link style={styles.link} href="/SocietyPage">
        Société
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 20,
  },
});
