import { useFonts } from 'expo-font';

export default function CachedResources(): boolean {
  const [fontsLoaded] = useFonts({
    SF_Pro_Display_Thin: require('../assets/fonts/SF-Pro-Display-Thin.ttf'),
    SF_Pro_Display_Regular: require('../assets/fonts/SF-Pro-Display-Regular.ttf'),
    SF_Pro_Display_Medium: require('../assets/fonts/SF-Pro-Display-Medium.ttf'),
    SF_Pro_Display_SemiBold: require('../assets/fonts/SF-Pro-Display-Semibold.ttf'),
    SF_Pro_Display_Bold: require('../assets/fonts/SF-Pro-Display-Bold.ttf'),
  });

  return fontsLoaded;
}
