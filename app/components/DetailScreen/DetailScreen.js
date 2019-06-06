import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header ,Icon} from 'react-native-elements';

export default class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.containerMain} >
                <Header
                    backgroundColor="#4d4e4f"
                    containerStyle={{ marginTop: Platform.OS === 'ios' ? 0 : - 25,borderBottomWidth: 0  }}
                    leftComponent={() => {
                        return <Icon
                            name='arrow-left'
                            type='evilicon'
                            color='#ffffff'
                            size={40}
                            onPress={() => { Actions.pop() }}
                        />
                    }}
                    centerComponent={{ text: 'Details', style: { color: '#fff' } }}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#3c3c3d',
    }
})