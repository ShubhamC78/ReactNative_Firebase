import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as commonFunctions from '../../utils/modCommon';
import { connect } from 'react-redux';

class Home extends Component {
  onPressBack() {
    commonFunctions.popScreen(this.props, 'Home');
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {this.props.name}</Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  const { name } = state.login
  return {
    name
  }
}


export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3e3e',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#fff'

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

