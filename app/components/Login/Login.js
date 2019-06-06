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
    ActivityIndicator
} from 'react-native';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false
        }
    }

    onClickListener = (viewId) => {
        Actions.SignUpView();
    }
    onClickLogin() {
        Actions.Home()
        // if (this.state.email == "" || this.state.password == "") {
        //     Alert.alert(
        //         'Error',
        //         'Please Enter All Details',
        //         [
        //             {
        //                 text: 'Cancel',
        //                 onPress: () => console.log('Cancel Pressed'),
        //                 style: 'cancel',
        //             },
        //             { text: 'OK', onPress: () => console.log('OK Pressed') },
        //         ],
        //         { cancelable: false },
        //     )
        // } else {
        //     this.setState({
        //         loading: true
        //     })
        //     firebase
        //         .auth()
        //         .signInWithEmailAndPassword(this.state.email, this.state.password)
        //         .then(() => {
        //             this.setState({
        //                 loading: false
        //             })
        //             Actions.Home()
        //         })
        //         .catch(error => {
        //             this.setState({
        //                 loading: false
        //             })
        //             Alert.alert(
        //                 'Error',
        //                 '' + error.message,
        //                 [
        //                     {
        //                         text: 'Cancel',
        //                         onPress: () => console.log('Cancel Pressed'),
        //                         style: 'cancel',
        //                     },
        //                     { text: 'OK', onPress: () => console.log('OK Pressed') },
        //                 ],
        //                 { cancelable: false },
        //             )
        //         }
        //         )
        // }
    }

    render() {
        return (
            <View style={styles.container}>
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

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickLogin()}>
                    {this.state.loading ?
                     <ActivityIndicator size="large" color="#DCDCDC" />
                        :

                        <Text style={styles.loginText}>Login</Text>
                    }

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
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
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});