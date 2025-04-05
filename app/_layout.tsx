import { Stack } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import GradientBackground from "@/components/universal/Gradient";

export default function RootLayout() {
  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="report" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </GradientBackground>

  )
}
