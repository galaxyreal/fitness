
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, Alert, TouchableOpacity, } from 'react-native';
//import { Icon, ListItem } from 'react-native-elements';
import { IconButton, Colors, ProgressBar} from 'react-native-paper';
import R from '../res/R';
import CountDown from 'react-native-countdown-component';
import StepIndicator from 'react-native-step-indicator';
import { Dialog} from "react-native-simple-dialogs";

const customStyles = {
  stepIndicatorSize: 8,
  currentStepIndicatorSize: 8,
  separatorStrokeWidth: 0,
  currentStepStrokeWidth: 0,
  stepStrokeCurrentColor: '#9AE7E0',
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: '#FFFFFF',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#9AE7E0',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#FFFFFF',
  stepIndicatorUnFinishedColor: '#9AE7E0',
  stepIndicatorCurrentColor: '#9AE7E0',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize:0,
  stepIndicatorLabelCurrentColor: '#FFFFFF',
  stepIndicatorLabelFinishedColor: '#9AE7E0',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 0,
  currentStepLabelColor: '#FFFFFF'
}

const labels = ["", "", "","","","","","","","","","","","","","","","","","","","","",];

class PlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 30, currentPosition: 4, currentProgress:0};
  }
  
  openDialog = (show) => {
    this.setState({ showDialog: show });
  }
  static navigationOptions = {
    header: null,
  };

  updateProgressBar = ()=>{
    var progressValue = this.state.currentProgress + 1/this.state.timer;
    this.setState({currentProgress: progressValue})
  };

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  goPush(){    
    this.setState({showDialog: false});
    this.props.navigation.navigate('Finish');
  }

  render() {
    return (
      <ImageBackground source={R.images.background} style={{ width: '100%', height: '100%' }}>
        <SafeAreaView >
          <View style={styles.container}>
            <View style={styles.top}>
              <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft:20, paddingRight:24, alignItems: 'center', justifyContent: 'space-between' }}>
                <IconButton icon={R.images.back} color='white' size={24} onPress={() => this.props.navigation.goBack()} />
                <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>5 / 21</Text>
                <View style={{ width: 24 }}></View>
              </View>
              <View style={{paddingLeft:24, paddingRight:24, paddingTop:15}}>
                <StepIndicator
                  customStyles={customStyles}
                  currentPosition={this.state.currentPosition}
                  stepCount= {labels.length}
                />
              </View>
            </View>
            <View style={styles.mid}>
              <View style={{paddingTop:30,paddingBottom:10}}>
                <Text style={{fontSize:24, fontWeight:'bold', color:'#55D3CB'}}>Бег, колени вверх</Text>
              </View>
              <Image source={R.images.yoga} style={{width:232, height:268}}/>
              <View style={{paddingTop:10}}>
                <CountDown
                  size={42}
                  until={this.state.timer}                               
                  digitStyle={{backgroundColor: '#FFF',}}
                  digitTxtStyle={{color: '#55D3CB'}}
                  timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                  separatorStyle={{color: '#55D3CB'}}
                  timeToShow={[ 'M', 'S']}
                  timeLabels={{m: null, s: null}}
                  showSeparator
                  onChange={()=> this.updateProgressBar()}
                  onFinish={() => this.props.navigation.navigate('Finish')}
                />
              </View>                
            </View>
           
              <ProgressBar progress={this.state.currentProgress} color='#55D3CB' />   
             
            <View style={styles.bottom}> 
            <View style={{height:2, backgroundColor:'rgba(85, 211, 203, 0.1)'}}></View>
            <IconButton icon={ R.images.pause} color='#55D3CB' size={56} onPress={() => this.openDialog(true)} />
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
              <View style={{ alignItems: "center", justifyContent: "center", paddingLeft:30, paddingRight:30}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#55D3CB' }}>Stop Session</Text>
                <Text style={{ fontSize: 18, }}>      </Text>
                <Text style={{ fontSize: 14, color: '#97BBBB' }}>Are you sure you want to stop today’s session? You will need to resume this day from the beginning. </Text>
              
              </View>
              <View style={{alignItems: "center", justifyContent: "center",}}>
                <Image
                  source={
                    R.images.image4
                  }
                  style={
                    {
                      width:144,
                      height:232,
                      marginTop:20

                    }
                  }
                />
              </View>              
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.goPush()} style={{paddingLeft:20, paddingRight:20, paddingTop:20,paddingBottom:10}} >
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor:'red', height:46 }}>
                <Text style={{color:'#B8B8B8', fontSize:22, fontWeight:'bold'}}>STOP</Text>
                  </View>
              </TouchableOpacity>
              
              <TouchableOpacity activeOpacity={0.5} onPress={() => this.openDialog(false)}  style={{paddingLeft:20, paddingRight:20, paddingBottom:20}}>
                <View style={{ alignItems: "center", justifyContent: "center", backgroundColor:'white', height:46, borderColor:'#B8B8B8',borderBottomWidth:1,borderTopWidth:1, borderLeftWidth:1,borderRightWidth:1 }}>
                <Text style={{color:'#B8B8B8', fontSize:22, fontWeight:'bold'}}>CANCEL</Text>
                  </View>
              </TouchableOpacity>
              </Dialog>
        </SafeAreaView>
      </ImageBackground>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    
    alignItems: 'stretch',
    justifyContent: 'flex-start',

  },
  top: {
    height: 120,
  },
  mid: {      
    alignItems: 'center',    
    backgroundColor:'white',
    
  },
  bottom: {
    height:400,   
   justifyContent:'flex-start',
   alignItems:'center',
   backgroundColor:'white',
   
  }

});

export default PlayScreen;

