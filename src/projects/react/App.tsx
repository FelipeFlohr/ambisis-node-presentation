import { StyleSheet } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import LoginView from './src/views/LoginView';
import MainView from './src/views/MainView';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/home" element={<MainView />} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: "100%"
  },
});
