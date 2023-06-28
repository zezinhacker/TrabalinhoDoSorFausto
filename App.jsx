import { DefaultTheme, Provider as NativeProvider } from "react-native-paper";
import RootNavigation from './src/index.js';

export default function App() {
  return (
  <NativeProvider>
    <RootNavigation />
  </NativeProvider>);
}