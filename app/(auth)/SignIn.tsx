import { FC, PropsWithChildren } from "react";
import { Text, View } from "../../components/Themed";
import { useAuth } from "../../context/Auth";
import { Link } from "expo-router";

const SignIn: FC<PropsWithChildren> = ({ children }) => {
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => signIn()}>Sign In</Text>
      <Link href="SignUp">Sign Up</Link>
    </View>
  );
};

export default SignIn;
