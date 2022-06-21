import React from "react";
import {View,Text} from "react-native";
import S from "./style";

export default function ResultImc(props){
    return(
        <View style={S.resultImc}>
            <Text style={S.information}>{props.messageResultImc}</Text>
            <Text style={S.numberImc}>{props.ResultImc}</Text>
        </View>
    )
}