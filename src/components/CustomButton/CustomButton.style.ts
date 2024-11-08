import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold"
    }
})

const styles = {
    primary : StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            borderColor: '#66ae7c',
            backgroundColor: '#66ae7c'
        },
        text: {
            ...base_style.text,
            color: '#bddcc5'
        }
    }),
    secondary : StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            borderColor: '#66ae7c',
            backgroundColor: '#ffffff',
        },
        text: {
            ...base_style.text,
            color: '#66ae7c'
        }
    })
}

export default styles