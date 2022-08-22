import { ImageBackground, StyleSheet } from "react-native";
import Login from "../components/Login";

export default function LoginView() {
    return (
        <ImageBackground style={styles.container} source={{
            uri: require("../../../shared/windowsxp.png")
        }}>
            <Login />
        </ImageBackground>
    )
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