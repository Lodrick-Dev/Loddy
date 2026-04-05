import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ShoppingScreen from './src/Screens/Shopping/ShoppingScreen';
import KeyboardSafeView from './src/Components/KeyboardSafeView/KeyboardSafeView'; //important pour faire remonter le clavier et éviter qu’il ne cache les champs de saisie sur les écrans de formulaire
import { colors } from './src/Theme/Colors';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={['top']}
        style={{ backgroundColor: colors.primary }}
      />
      <StatusBar
        backgroundColor={colors.primary} // vert (ex. Tailwind green-500)
        //barStyle="light-content"// pour que les icônes du status bar soient visibles sur le fond vert
        translucent={true} //pour que le status bar ne soit pas transparent et ne chevauche pas le contenu et visible sur ios
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardSafeView>
          <ShoppingScreen />
        </KeyboardSafeView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
