//import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput , StatusBar,Platform,TouchableHighlight} from 'react-native';

var touchProps = {
  activeOpacity: 1,
   // <-- but you can still apply other style changes
  onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
};
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pin1 :"",
      pin2 :"",
      pin3 :"",
      pin4 :"",
    }
  }
  componentDidMount=()=>{
    this.refs.pin1ref.focus();
  }
  render() {
    const {pin1, pin2, pin3, pin4} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <Image style={{alignItems:'center', height:22,paddingRight:15}} source ={require('./assets/SIDE.png')} />
        <View style={styles.centre}>
          <Image style={{alignItems:'center', height:250, width:200,}} source ={require('./assets/image.png')} />
        </View>
        <Text style={{fontSize:20, fontWeight:'bold',paddingTop:15}}>{'\n'}Verify your mobile number</Text>
        <Text style={{}}>{'\n'}Enter the OTP that you will recieve at your mobile number +91********99{'\n\n\n'}</Text>
        <View style={{flexDirection:'row',width:'100%'}}> 
          <TextInput
          maxLength={1}
          ref="pin1ref"
          onChangeText={(pin1)=> {
            this.setState({pin1: pin1})
            if(pin1 !=""){
              this.refs.pin2ref.focus()
            }
          }}
          value={pin1}
          style={{backgroundColor:'#f5f4f2', fontWeight:'600',fontSize:20,height:45,width:'15%',borderRadius:10,borderWidth:0.5, borderColor:'grey',textAlign:'center',}}
          />
          <Text>{'\t\t\t\t\t\t'}</Text>
          <TextInput
          maxLength={1}
          ref="pin2ref"
          onChangeText={(pin2)=> {
            this.setState({pin2: pin2})
            if(pin2 !=""){
              this.refs.pin3ref.focus()
            }
          }}
          value={pin2}
          style={{backgroundColor:'#f5f4f2',fontWeight:'600',fontSize:20,height:45,width:'15%',borderRadius:10,borderWidth:0.5, borderColor:'grey',textAlign:'center',}}
          />
          <Text>{'\t\t\t\t\t\t'}</Text>
          <TextInput
          maxLength={1}
          ref="pin3ref"
          onChangeText={(pin3)=> {
            this.setState({pin3: pin3})
            if(pin3 !=""){
              this.refs.pin4ref.focus()
            }
          }}
          value={pin3}
          style={{backgroundColor:'#f5f4f2', fontWeight:'600',fontSize:20,height:45,width:'15%',borderRadius:10,borderWidth:0.5, borderColor:'grey',textAlign:'center',}}
          />
          <Text>{'\t\t\t\t\t\t'}</Text>
          <TextInput
          maxLength={1}
          ref="pin4ref"
          onChangeText={(pin4)=> {
            this.setState({pin4: pin4})
          }}
          value={pin4}
          style={{backgroundColor:'#f5f4f2', fontWeight:'600',fontSize:20,height:45,width:'15%',borderRadius:10,borderWidth:0.5, borderColor:'grey',textAlign:'center',}}
          />
        </View>
        <Text>{'\n'}</Text>
        <View style={{width:'95%',}}>
          <TouchableHighlight {...touchProps}>
            <Text style={{color:'grey',backgroundColor:'#f5f4f2',margin:'auto',textAlign: 'center',padding:10,fontSize:20,borderRadius:10}}>Verify</Text>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:12}}>{'\n'}Didn{'’'}t recieve the code?  </Text>
          <Text style={{fontSize:12,color:'purple'}}>{'\n'}RESEND</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}
// style={{backgroundColor:'#f5f4f2',padding: 10,fontWeight:'600',alignSelf: 'center',fontSize:20,paddingLeft:130,paddingRight:130}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:17,
    backgroundColor: '#fff',
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight:0,
  }, 
  left: {
    fontSize:35,
  },
  centre: {
    alignItems:'center',
  },
  button: {
    color:'grey'
  }
});
