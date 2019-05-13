import React from 'react';
import { Image, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import * as loginAction from '../../actions/login.action';


class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    onLoginPress(){
     this.props.dispatch(loginAction.login("Shubham"));
    }
         
    
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.stretch}
                    source={require('../../images/Logo.png')}
                  />
                 <View style={styles.buttonViewStyle}>
                    <Button
                        color="#7dbb46"
                        onPress={() => this.onLoginPress()}
                        title="Login"
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonViewStyle: {
        marginTop: 50,
        backgroundColor: '#7dbb46',
        margin: 40,
        width:100,
        borderRadius: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e3e3e',
      },
      stretch: {
        width: 320,
        height: 80
      }
});

function mapStateToProps(state) {
    const { data } = state.login;
    return {
        data
    }
}

export default connect(mapStateToProps)(Login);