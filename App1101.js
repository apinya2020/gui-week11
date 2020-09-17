import React from 'react'
import {View,Text} from 'react-native'

//Child Componet
const HomeScreen=()=>{
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

//Parent Component
const App=()=>{
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Overview</Text>
      <HomeScreen></HomeScreen>
      <HomeScreen />
      <HomeScreen />
    </View>
  )
}
export default App