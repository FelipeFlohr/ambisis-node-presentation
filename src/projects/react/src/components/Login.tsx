import { useFonts } from "expo-font";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";

export default function Login() {
    const navigation = useNavigate()

    useFonts({
        "REZ": require("../../../shared/REZ.ttf")
    })

    const styles = StyleSheet.create({
        divStyleSheet: {
            display: "flex",
            width: "300px",
            height: "500px",
            backgroundColor: "#f8fafc",
            borderRadius: 10,
            maxWidth: "300px",
            maxHeight: "500px",
            overflow: "hidden",
            shadowColor: "#000",
            shadowOffset: {
                height: 2,
                width: 2
            },
            shadowOpacity: 1,
            shadowRadius: 3
        },
        h1: {
            fontSize: 48,
            fontFamily: "REZ",
            width: "100%",
            textAlign: "center",
            marginTop: 10
        },
        h2: {
            fontSize: 24,
            marginBottom: 10
        },
        inputArea: {
            width: "100%",
            height: "100%",
            marginTop: 80,
            display: "flex",
            alignItems: "center",
            
        },
        input: {
            width: "90%",
            height: "36px",
            borderColor: "#cbd5e1",
            borderStyle: "solid",
            borderWidth: 2,
            paddingLeft: 10,
            borderRadius: 5
        },
        passwordMargin: {
            marginTop: 32
        },
        button: {
            marginTop: 120,
            width: "90%",
            height: "48px",
            backgroundColor: "#134e4a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10
        },
        buttonText: {
            color: "#fff",
            fontSize: 18
        }
    })

    const handleLogin = () => {
        navigation("/home")
    }

    return (
        <View style={styles.divStyleSheet}>
            <Text style={styles.h1}>Felipesis</Text>
            <View style={styles.inputArea}>
                <Text style={styles.h2}>Faça login</Text>
                <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#9ca3af" keyboardType="email-address" />
                <TextInput style={{ ...styles.input, ...styles.passwordMargin }} placeholder="Senha" placeholderTextColor="#9ca3af" textContentType="password" secureTextEntry={true} />
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}