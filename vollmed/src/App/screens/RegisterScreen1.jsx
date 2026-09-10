import { StyleSheet, Text, View } from "react-native";
import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";

export default function RegisterScreen1() {
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>
                Insira alguns dados básicos
            </Text>
            <LabeledInput
            label="Nome:"
            placeholder="Insira seu nome" 
            />
            <LabeledInput
            label="E-mail:"
            placeholder="Insira seu endereço de e-mail" 
            />
            <LabeledInput
            label="Crie uma senha:"
            placeholder="Insira sua senha" 
            />
            <LabeledInput
            label="Repita a senha:"
            placeholder="Insira sua senha" 
            />
            <Button textButton="Avançar"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingTop: 62,
    },
    title:{
      fontSize: 20,
      fontWeight: 700,
      textAlign: "center",
      color: "#6B6E71",
      marginBottom: 26,
    },
})