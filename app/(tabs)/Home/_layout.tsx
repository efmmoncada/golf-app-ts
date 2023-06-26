import { Stack } from 'expo-router';


export default function StackLayout() {

  return (
    <Stack >
      <Stack.Screen name='index' />
      <Stack.Screen name='Drills' />
      <Stack.Screen name='Progress' />
      <Stack.Screen name='Leaderboard' />
    </Stack>
  )
}