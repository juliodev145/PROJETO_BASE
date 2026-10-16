import { View, Text } from "react-native";
import LabeledInput from "../components/LabeledInput";

export default function RegisterScreen(){
    return(
        <View>
            <Text>Insira alguns dados básicos</Text>
            <LabeledInput
                label="Nome:"
                placeholder="Insira seu nome." 
            />
        </View>
    )
}