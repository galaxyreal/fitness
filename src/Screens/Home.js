import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, Alert, TouchableOpacity } from 'react-native';

import { Icon, ListItem } from 'react-native-elements';
import R from '../res/R';
import { FlatList } from 'react-native-gesture-handler';
import { Dialog, } from "react-native-simple-dialogs";
//import AlertScreen from './alert';



class HomeScreen extends Component {
  state = {
    list: [
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 1
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 2
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 3
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 4
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 5
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 6
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 7
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 8
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 9
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 10
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 11
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 12
      },
      {
        name: 'Бег, колени вверх',
        avatar_url: R.images.image1,
        subtitle: '15 секунд',
        id: 13
      },
      {
        name: 'Захлест голени',
        avatar_url: R.images.image2,
        subtitle: '15 секунд',
        id: 14
      },
    ]
  }
  static navigationOptions = {
    header: null,
  };
  openDialog = (show) => {
    this.setState({ showDialog: show });
  }

  constructor(props){
    super(props);
   
  }

  goPush(){
    
    this.setState({showDialog: false});
    this.props.navigation.navigate('Play');
  }


  renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => this.openDialog(true)}>
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
          <View style={{ height: 40, width: 53, paddingLeft: 10, alignItems: 'center', justifyContent: 'center', }}>
            <Image source={item.avatar_url} />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text>{item.name}</Text>
            <Text>{item.subtitle}</Text>
          </View>
          <View style={{ right: 20, position: 'absolute' }}>
            <Image source={R.images.activebutton} />
          </View>
        </View>
      </TouchableOpacity>
    );

  }

  render() {

    return (
      <ImageBackground source={R.images.background} style={{ width: '100%', height: '100%' }}>
        <SafeAreaView style={styles.container}>

          <View style={styles.top} >
            <View style={{ height: 35, }}></View>
            <Text style={styles.title}>День 6</Text>
            <View style={{ height: 20 }}></View>
            <View style={styles.time}>
              <TouchableOpacity activeOpacity={0.5} >
                <View style={styles.count}>
                  <Icon name='reorder' size={24} color='#F8FEFD' />
                  <Text style={{ paddingLeft: 10, color: '#F8FEFD' }}>20 упражнений</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} >
                <View style={styles.timer}>
                  <Icon name='schedule' size={24} color='#F8FEFD' />
                  <Text style={{ paddingLeft: 10, color: '#F8FEFD' }}>14 минут</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            style={{ backgroundColor: '#F8FEFD', paddingTop: 30, paddingLeft: 20 }}
            data={this.state.list}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />

          <View style={styles.bottom}>
            <View style={{ height: 2, backgroundColor: 'rgba(85, 211, 203, 0.1)' }}></View>
            <View style={{ height: 24 }}></View>
            <View style={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', }}>
              <View style={{ width: 32 }}></View>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.openDialog(true)}>
                <Image source={R.images.play} />
              </TouchableOpacity >
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Calender')}>
                <Image source={R.images.threedots} />
              </TouchableOpacity>
            </View>
          </View>
          <Dialog
            
            animationType="fade"
            dialogStyle={{
              backgroundColor:'#F8FEFD',                  
            }}
            
            contentStyle={{
              paddingBottom:0,
              paddingLeft:0,
              paddingRight:0
            }}

            onTouchOutside={() => this.openDialog(false)}
            visible={this.state.showDialog}
            >
            
            <View style={{ alignItems: "center", justifyContent: "center", paddingLeft:20, paddingRight:20, paddingBottom:30 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#55D3CB' }}>Растяжка мышц поясницы</Text>
              <Text style={{ fontSize: 18, }}>      </Text>
              <Text style={{ fontSize: 14, color: '#97BBBB' }}>Сядьте на пол, правую ногу переведите вперёд, левую — назад. </Text>
              <Text style={{ fontSize: 4, }}></Text>
              <Text style={{ fontSize: 14, color: '#97BBBB' }}>Согните ноги в коленях под углом 90 градусов или чуть больше. Правую руку положите на пол, левую поднимите над головой.</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', paddingBottom:30}}>
            <Image
              source={
                R.images.image3
              }
              
            />
            </View>
            
            <View style={{ height: 2, backgroundColor: 'rgba(85, 211, 203, 0.1)', alignItems:'stretch', }}></View>
            <View style={{ height:60, justifyContent:'center', alignItems:'center', }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.goPush()}>
                <Text style={{ fontSize: 14, color: '#55D3CB' }}>Закрыть</Text>
              </TouchableOpacity>
            </View>
          </Dialog>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',

  },
  top: {
    height: 140,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 38,
    textAlign: 'center',
    color: '#F8FEFD',
  },
  time: {
    flexDirection: 'row',
    height: 24,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    // paddingBottom: 10
  },
  count: {
    flexDirection: 'row',
    width: 156,
    height: 24,
    paddingLeft: 32,
  },
  timer: {
    flexDirection: 'row',
    width: 156,
    height: 24,
    paddingRight: 32,
  },
  bottom: {
    height: 100,
    backgroundColor: '#F8FEFD',
  }
});

export default HomeScreen;