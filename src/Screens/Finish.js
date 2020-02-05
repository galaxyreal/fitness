
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View, SafeAreaView, TouchableOpacity, Dimensions
} from 'react-native';

// import { Icon, ListItem } from 'react-native-elements';
import R from '../res/R';

class FinishScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <SafeAreaView>        
         <View style={{height:80}}/>
         <View style={styles.mid}>
            <View >
              <Text style={{fontSize:14, fontWeight:'bold', color:'#55D3CB'}}>Время тренировки</Text>
              <Text style={{fontSize:28, fontWeight:'bold', color:'#55D3CB'}}>14 минут</Text>
            </View>
            <View style={{height:80}}></View>
            <View>
              <Text style={{fontSize:14, fontWeight:'bold', color:'#55D3CB'}}>Потрачено сегодня</Text>
              <Text style={{fontSize:28, fontWeight:'bold', color:'#55D3CB'}}>120 ккал</Text>
            </View>
            <Image
              source={R.images.illustration}

              style={{marginTop:40, aspectRatio:1.2}}
            />
            <View style={styles.bottom}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Confirm')}>
                <Image
                  source={R.images.rocate}
                />
              </TouchableOpacity>
            </View>
         </View>
       
       
      </SafeAreaView>
    );
  }

}



const styles = StyleSheet.create({
  
  mid: {
    flex: 1,    
    alignItems: 'center',
    
  },
  bottom: {
   height:150,   
   justifyContent:'center',
   paddingBottom:30,
   paddingTop:30
  
  },
});

export default FinishScreen;