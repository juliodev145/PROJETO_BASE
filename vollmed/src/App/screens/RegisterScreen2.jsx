import { StyleSheet, Text, View, Image } from "react-native";
import LabeledInput from "../components/LabeledInput";
import Button from "../components/Button";

export default function RegisterScreen2() {
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>
                Agora mais alguns dados sobre você
            </Text>
            <LabeledInput
            label="CEP:"
            placeholder="Insira seu cep" 
            />
            <LabeledInput
            label="Endereço:"
            placeholder="Insira seu endereço" 
            />
            <LabeledInput
            label="Número:"
            placeholder="Insira o número do endereço" 
            />
            <LabeledInput
            label="Complemento:"
            placeholder="Insira o seu complemento" 
            />
            <LabeledInput
            label="Telefone:"
            placeholder="() 00000-0000" 
            />
            <Button textButton="Voltar"/>
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