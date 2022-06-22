import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
} from "react-native";
import ResultImc from "./ResultImc";
import S from "./style";

export default function Form(props) {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    let heightFormat = height.replace(",",".");
    let weightFormat = weight.replace(",",".");
    return setImc((Number(weightFormat) / Number(heightFormat) ** 2).toFixed(2));
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual:");
      setTextButton("Calcular novamente");
      setErrorMessage(null);
      return;
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={S.formContext}>
      <View style={S.form}>
        <Text style={S.formLabel}>Altura</Text>
        <Text style={S.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={S.formInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.70"
          keyboardType="numeric"
        />
        <Text style={S.formLabel}>Peso</Text>
        <Text style={S.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={S.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 70"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={S.buttonCalculator}
          onPress={() => {
            validationImc();
          }}
        >
          <Text style={S.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} ResultImc={imc} />
    </Pressable>
  );
}
