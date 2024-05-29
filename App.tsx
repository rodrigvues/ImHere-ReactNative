import { Home } from './src/screens/Home'; // importing the home page 
import { StatusBar } from 'react-native'; // importing status bar prop from react to edit it

export default function App() {
  return (
    // editing status bar and opening the home page
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent 
      />
      
      <Home />
    </>
  );
}