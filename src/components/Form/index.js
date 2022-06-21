import React ,{useState} from "react";
import {View, Text,TextInput,TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc";
import S from "./style";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator(){
        return setImc((Number(weight)/Number(height)**2).toFixed(2));
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular novamente");
            return;
        }
        setImc(null)
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
    }

    return(
        <View  style={S.formContext}>
            <View style={S.form}>
                <Text style={S.formLabel}>Altura</Text>
                <TextInput
                 style={S.formInput}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.70"
                keyboardType="numeric"
                />
                <Text style={S.formLabel}>Peso</Text>
                <TextInput
                 style={S.formInput}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 70"
                keyboardType="numeric"
                />
                <TouchableOpacity 
                style={S.buttonCalculator}
                onPress={()=>{
                    validationImc()
                }}>
                    <Text style={S.textButtonCalculator}>{textButton}</Text>   
                </TouchableOpacity>
                
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
        </View>
    )
}