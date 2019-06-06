import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { Header ,Icon} from 'react-native-elements';


export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      loading: false
    }
  }

  onClickListener = (viewId) => {
    if (this.state.fullName == "" || this.state.email == "" || this.state.password == "") {
      Alert.alert(
        'Error',
        'Please Enter All Details',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      )
    } else {
      this.setState({
        loading: true
      })

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.setState({
            loading: false
          })
          Actions.Login();
        })
        .catch(error => {
          this.setState({
            loading: false
          })
          Alert.alert(
            'Error',
            '' + error.message,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
          )
        }
        )
    }
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <Header
          backgroundColor="#00b5ec"
          containerStyle={{ marginTop: Platform.OS === 'ios' ? 0 : - 25 }}
          leftComponent={()=>{
            return <Icon
            name='arrow-left'
            type='evilicon'
            color='#ffffff'
            size={40}
            onPress={()=>{Actions.pop()}}
          />}}
          centerComponent={{ text: 'Sign Up', style: { color: '#fff' } }}

        />
        {this.state.loading ? <ActivityIndicator size="large" color="#00b5ec" />
          :
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db' }} />
              <TextInput style={styles.inputs}
                placeholder="Full name"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(fullName) => this.setState({ fullName })} />
            </View>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
              <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({ email })} />
            </View>

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
              <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({ password })} />
            </View>
            <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  }
  ,
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: "#00b5ec",
  },
  signUpText: {
    color: 'white',
  }
});
