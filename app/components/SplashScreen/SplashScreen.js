import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NetInfo from "@react-native-community/netinfo";

export default  class SplashScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            isOnline : false
        }
    }
    componentDidMount(){
        NetInfo.isConnected.fetch().then(isConnected => {
            this.setState({
                isOnline : isConnected
            })
            if(isConnected){
                setTimeout(
                    () => { Actions.push('Login'); },
                    500
                  )
            }
        });  
    }

    
    getErrorMessage(){
        if(!this.state.isOnline){
            return(
            <Text style={styles.textStyle}>Check Your Internet Connection...</Text>
            )
        }
    }

  render() {

    return (
      <View style={styles.container}>
       <Image
          style={styles.stretch}
          source={require('../../images/Logo.png')}
        />
          {this.getErrorMessage()}  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3e3e3e',
  },
  stretch: {
    width: 320,
    height: 80
  },
  textStyle:{
    marginTop:10,
    color: '#fff'
  }
});

