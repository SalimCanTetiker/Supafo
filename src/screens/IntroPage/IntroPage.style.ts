import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Image_container: {
        flex: 2.6
    },
    image: {
        width: 190,
        height: 251,
        top: 100,
        left: 86,
    },
    Button_container: {
        flex: 0.5
    },
    CheckBox_container: {
        marginTop: 30,
        flex: 0.8
    },
    first_checkbox: {
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 15,
        flexDirection: 'row'
    },
    second_checkbox: {
        marginLeft: 15,
        flexDirection: 'row',
    },
    text: {
        fontWeight: 'bold',
    },
    press_text: {
        fontWeight: 'bold',
        color: "#66ae7c",
    }
})

export default styles