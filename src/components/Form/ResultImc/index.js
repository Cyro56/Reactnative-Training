import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import S from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.ResultImc,
    });
  };

  return (
    <View style={S.resultImc}>
      <View style={S.boxSharebutton}>
        {props.ResultImc != null && (
          <TouchableOpacity 
          style={S.shared}
          onPress={onShare}
          >
            <Text style={S.sharedText}>Share</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={S.information}>{props.messageResultImc}</Text>
      <Text style={S.numberImc}>{props.ResultImc}</Text>
    </View>
  );
}
