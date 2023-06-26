import { StyleSheet, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { Text, View } from "../../../components/Themed";
import { Link } from "expo-router";
import PageButton from "../../../components/PageButton";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

export default function Home() {
  const colorscheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Image
        style={styles.images}
        contentFit="contain"
        contentPosition="center"
        source={require("../../../assets/images/beaverLogo.png")}
      />
      <Image
        style={styles.images}
        contentFit="contain"
        contentPosition="center"
        source={require("../../../assets/images/OSUBlockLetters.png")}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {["/Home/Drills", "/Home/Leaderboard", "/Home/Progress"].map(
        (href, i) => (
          <Link href={href} key={i} asChild>
            <PageButton>
              <FontAwesome
                name="code"
                size={25}
                color={Colors[colorscheme ?? "light"].text}
              />
              <Text>{href.split("/").at(-1)}</Text>
            </PageButton>
          </Link>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  images: {
    flex: 0.8,
    width: "40%",
    marginVertical: -100,
  },
});
