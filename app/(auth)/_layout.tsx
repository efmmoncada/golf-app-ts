import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="SignIn"
        options={{
          title: "Sign In",
        }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          title: "Sign Up",
        }}
      />
    </Stack>
  );
}
