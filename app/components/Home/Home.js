import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as commonFunctions from '../../utils/modCommon';
import { connect } from 'react-redux';
import { Header, Icon, Input } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearchBar: false
    }
  }


  render() {

    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#4d4e4f"
          containerStyle={{ marginTop: Platform.OS === 'ios' ? 0 : - 25, borderBottomWidth: 0 }}
          leftComponent={() => {
            return <Icon
              name='navicon'
              type='evilicon'
              color='#ffffff'
              size={30}
            />
          }}
          centerComponent={() => {
            if (this.state.showSearchBar) {
              return <Input inputStyle={{ color: "#ffffff" }} />
            }
          }}
          rightComponent={() => {
            return <TouchableOpacity onPress={() => {
              this.setState({
                showSearchBar: !this.state.showSearchBar
              })
            }}>
              <Icon
                name='search'
                type='evilicon'
                color='#ffffff'
                size={30}

              />
            </TouchableOpacity>
          }}
        />
        <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
          <View style={{ height: 250, marginTop: 20, flex: 1 }}>
            <Swiper showsButtons={true} showsButtons={false} autoplay={true} autoplayTimeout={5} dotColor="#ffffff" activeDotColor="#000000">
              <TouchableOpacity style={{borderRadius:20 ,overflow:'hidden'}}>
                <Image
                   borderRadius={20}

                  style={{ height: 240 ,position:'absolute'}}
                  source={require('../../images/b1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity >
                <Image
                borderRadius={20}
                  style={{ height: 240 }}
                  source={require('../../images/b2.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity >
                <Image
                   borderRadius={20}
                  style={{ height: 240 ,position:'absolute'}}
                  
                  source={require('../../images/b3.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity >
                <Image
                   borderRadius={20}
                  style={{ height: 240 }}
                  source={require('../../images/b4.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity >
                <Image
                   borderRadius={20}
                  style={{ height: 240 }}
                  source={require('../../images/b5.png')}
                />
              </TouchableOpacity>
            </Swiper>
          </View>
        </ScrollView>
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
    backgroundColor: '#3c3c3d',
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

