// Componente reutilizável do botão principal
import { Pressable, Text, StyleSheet } from "react-native";

const BG_BUTTON = '#00213D';
const TEXT_PRIMARY = '#FFFFFF';

export default function Button({ textButton }) {
    return(
        <Pressable style={styles.button}>
            <Text  style={styles.title}>{ textButton  ? textButton : "Enviar" }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: BG_BUTTON,
        borderRadius: 8,
        marginHorizontal: 20,
        marginVertical: 10,

    },
    title: {
        color: TEXT_PRIMARY,
        textAlign: "center",
        marginVertical: 2,
        paddingVertical: 7,
    }

})
