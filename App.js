import React from 'react';
import { View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
import S from "./AppStyles";

export default function App() {
  return (
    <View style={S.container}>
      <Title/>
      <Main/>
    </View>
  );
}


