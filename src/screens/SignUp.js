import React from "react";
import { View, Text, StatusBar, StyleSheet, Dimensions, Image, TextInput } from "react-native";
import styles from '../styles/Styles';
import Card from '../components/CustomCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Default } from '../components/Defaults';
const { width, height } = Dimensions.get('window');
const logo = require('../assets/icons/logo.png');
export default class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar
                    hidden={true}
                />
                <View style={stylesC.Container}>
                    <Image source={logo} style={{ width: 90, height: 90 }} />
                    <Text style={styles.TitleText}>Sign Up</Text>
                    <Card style={[styles.CustomCard, { marginTop: 20, justifyContent: 'center' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='user' size={20} solid color={Default.CBlue} style={{ flex: .1 }} />
                            <TextInput
                                placeholder={'Email Address'}
                                style={[styles.TextInput, { flex: .9 }]}
                            />
                        </View>
                    </Card>
                    <Card style={[styles.CustomCard, { marginTop: 20, justifyContent: 'center' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='phone-alt' size={20} solid color={Default.CBlue} style={{ flex: .1 }} />
                            <TextInput
                                placeholder={'Email Address'}
                                style={[styles.TextInput, { flex: .9 }]}
                            />
                        </View>
                    </Card>
                    <Card style={[styles.CustomCard, { marginTop: 20, justifyContent: 'center' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='user' size={20} solid color={Default.CBlue} style={{ flex: .1 }} />
                            <TextInput
                                placeholder={'Email Address'}
                                style={[styles.TextInput, { flex: .9 }]}
                            />
                        </View>
                    </Card>
                </View>
            </>
        );
    }
}

const stylesC = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: 'center'
    },
    BtnCard: {
        height: height * .07,
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});