import React from "react";
import {View, Text} from "react-native";
import S from "./styleTitle";

export default function Title(){
    return(
        <View style={S.boxTitle}>
            <Text style={S.textTitle}>ONEBITHEALTH</Text>
        </View>
    )
}