import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function MainView() {
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleAdicionarItem = () => {
        if (inputValue.trim() !== "") {
            items.push(inputValue)
            setInputValue("")
        }
    }

    return (
        <View>
            <Text style={styles.header}>Lista de afazeres:</Text>
            <FlatList data={items} renderItem={(i) => <Text>{i.item}</Text>} />
            <View style={styles.divInputs}>
                <TextInput style={styles.input} onChangeText={setInputValue} value={inputValue} />
                <Button onPress={handleAdicionarItem} title="Adicionar" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 36
    },
    input: {
        borderColor: "#000",
        borderWidth: 2,
        height: 36
    },
    divInputs: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    }
})