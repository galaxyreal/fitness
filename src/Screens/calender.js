
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, Alert, TouchableOpacity,Platform  } from 'react-native';
//import { Icon, ListItem } from 'react-native-elements';
import { IconButton, Colors } from 'react-native-paper';
import {CalendarList, CalendarTheme} from 'react-native-calendars';
import R from '../res/R';

// import { Icon } from 'react-native-elements';

class CalenderScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

  render() {
    return (     
        <SafeAreaView >
          <View style={styles.container}>
            <View style={styles.top}>
              <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft:20, paddingRight:24, alignItems: 'center', justifyContent: 'space-between', borderBottomColor:'rgba(85, 211, 203, 0.1)', borderBottomWidth:2 }}>
                <IconButton icon={R.images.back} color='#55D3CB' size={24} onPress={() => this.props.navigation.goBack()} />
                <Text style={{fontSize:18, fontWeight:'bold', color:'#55D3CB'}}>Отчет</Text>
                <IconButton icon={R.images.threedots} color='#55D3CB' size={24} onPress={() => console.log('Pressed')} />
              </View>

            </View>
            <View style={styles.mid}>
               
                <CalendarList
                  // Callback which gets executed when visible months change in scroll view. Default = undefined
                  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                  // Max amount of months allowed to scroll to the past. Default = 50
                  pastScrollRange={0}
                  // Max amount of months allowed to scroll to the future. Default = 50
                  futureScrollRange={0}
                  // Enable or disable scrolling of calendar list
                  scrollEnabled={false}
                  // Enable or disable vertical scroll indicator. Default = false
                  showScrollIndicator={true}

                  calendarHeight={310}
                  theme = {{
                    dayTextColor:'#97BBBB',
                    monthTextColor:'#55D3CB',
                    textSectionTitleColor:'#55D3CB'
                  }}
                  markedDates={
                    {
                      '2020-02-10': {selected: true, selectedColor: '#55D3CB'},
                      '2020-02-19': {selected: true, selectedColor: '#55D3CB'},
                      '2020-02-21': {selected: true, selectedColor: '#55D3CB'},
                      '2020-02-24': {selected: true, selectedColor: '#55D3CB'},
                      '2020-02-29': {selected: true, selectedColor: '#55D3CB'},
                    }
                  }
                />
           
            </View>
            <View style={styles.bottom}> 
              <View style={{paddingTop:20, paddingBottom:15}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:'#55D3CB'}}>Всего тренировок</Text>
                <Text style={{fontSize:28, fontWeight:'bold', color:'#55D3CB'}}>  5 дней</Text>
              </View>
              <View style={{paddingTop:15, paddingBottom:15}}>
                 <Text style={{fontSize:14, fontWeight:'bold', color:'#55D3CB'}}> Общее время тренировок</Text>
                 <Text style={{fontSize:28, fontWeight:'bold', color:'#55D3CB'}}>14 мин 52 сек</Text>
              </View>
              <View style={{paddingTop:15, paddingBottom:40}}>
                 <Text style={{fontSize:14, fontWeight:'bold', color:'#55D3CB'}}>Потрачено за все время</Text>
                 <Text style={{fontSize:28, fontWeight:'bold', color:'#55D3CB'}}>  487 ккал</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
     
    );
  }

}



const styles = StyleSheet.create({
  container: {
    
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor:'#FFFFFF'
  },
  top: {
    height: 80,   
    
  },
  mid: {      
    alignItems: 'center',    
    backgroundColor:'white',
    height:310
  },
  bottom: {
    height:400,   
   
   alignItems:'center',
   backgroundColor:'white',
   
  }

});

export default CalenderScreen;

