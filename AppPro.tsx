import React from 'react';

import {View, SafeAreaView, Text, StyleSheet,useColorScheme} from 'react-native';

function AppPro():JSX.Element {
    const isDarkmode=useColorScheme()==='dark';
  return (
    <SafeAreaView  style={styles.container}>
      <View>
        <Text style={isDarkmode?styles.whitetext:styles.darkText}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    whitetext:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }
})

export default AppPro;
