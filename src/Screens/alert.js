
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View, SafeAreaView, ImageBackground, TouchableOpacity
} from 'react-native';

import R from '../res/R';
import { Dialog } from "react-native-simple-dialogs";



class AlertScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    openDialog = (show) => {
      this.initState({ showDialog: show });
    } 
  }
  


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={R.images.background} style={{ width: '100%', height: '100%' }}>
         
            <Dialog

              animationType="fade"
              contentStyle={
                {
                  alignItems: "center",
                  justifyContent: "center",
                  // width: 312,
                  // height: 568,

                }
              }
              onTouchOutside={() => this.openDialog(false)}
              visible={this.state.showDialog}
            >
              <View style={{ alignItems: "center", justifyContent: "center", }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#55D3CB' }}>Растяжка мышц поясницы</Text>
                <Text style={{ fontSize: 18, }}>      </Text>
                <Text style={{ fontSize: 14, color: '#97BBBB' }}>Сядьте на пол, правую ногу переведите вперёд, левую — назад. </Text>
                <Text style={{ fontSize: 4, }}></Text>
                <Text style={{ fontSize: 14, color: '#97BBBB' }}>Согните ноги в коленях под углом 90 градусов или чуть больше. Правую руку положите на пол, левую поднимите над головой.</Text>
              </View>
              <Image
                source={
                  R.images.image3
                }
                style={
                  {
                    width: 158,
                    height: 248,
                    // backgroundColor: "t",
                    paddingTop: 30,


                  }
                }
              />
              <View style={{ height: 100, paddingTop: 50 }}>


                <TouchableOpacity activeOpacity={0.5} onPress={() => this.openDialog(false)}>
                  <Text style={{ fontSize: 14, color: '#55D3CB' }}>Закрыть</Text>
                </TouchableOpacity>
              </View>
            </Dialog>
        </ImageBackground>
      </SafeAreaView>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
  },
  button: {
    margin: 24,
    padding: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "transparent",
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    backgroundColor: '#ff6666'
  },
});

export default AlertScreen;