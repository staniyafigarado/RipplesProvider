import React from "react";
import { View, Text, StatusBar, Dimensions, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Default } from '../components/Defaults';
import styles from '../styles/Styles';
import Card from '../components/CustomCard';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('window');
const logo = require('../assets/icons/logo.png');
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            email: '',
            password: '',
        };
    }

    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    render() {
        return (
            <>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={'#648BAA'}
                    translucent={false}
                    animationEnabled={true}
                    hidden={true}
                />
                <View style={[styles.Container, { alignItems: "center", justifyContent: 'center' }]}>
                    <Image source={logo} style={{ width: 90, height: 90 }} />
                    <Text style={styles.TitleText}>Choose login with</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.IconStyle}>
                            <FontAwesome name='phone-alt' size={20} color='#FFFFFF' />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.IconStyle, { marginLeft: 10 }]}>
                            <Icon name='mail' size={20} color='#FFFFFF' />
                        </TouchableOpacity>
                    </View>
                    <Card style={[styles.CustomCard, { marginTop: 20 }]}>
                        <TextInput
                            placeholder={'Email Address'}
                            style={styles.TextInput}
                        />
                    </Card>
                    <Card style={[styles.CustomCard, { marginTop: 20, flexDirection: 'row' }]}>
                        <TextInput
                            placeholder={'Password'}
                            secureTextEntry={this.state.hidePassword}
                            style={[styles.TextInput, { width: '90%' }]}
                        ></TextInput>
                        <View style={{ width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={this.setPasswordVisibility}>
                                {
                                    this.state.hidePassword ? <Icon name='eye-off' size={25} color='#000000' style={{ opacity: 0.5 }} /> : <Icon name='eye' size={25} color='#000000' style={{ opacity: 0.5 }} />
                                }
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <TouchableOpacity style={{ marginTop: 10, alignSelf: 'flex-end', paddingHorizontal: 20 }}>
                        <Text style={{ fontFamily: Default.FontRegular }}>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <Card style={[stylesC.BtnCard, { backgroundColor: Default.CGreen }]}>
                        <Text style={styles.BtnText}>LOGIN</Text>
                    </Card>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Card style={stylesC.Line} />
                        <Text style={{ fontFamily: Default.FontRegular, marginHorizontal: 20 }}>OR</Text>
                        <Card style={stylesC.Line} />
                    </View>
                    <Card style={[stylesC.BtnCard, { backgroundColor: Default.CBlue }]}>
                        <Text style={styles.BtnText}>SIGN UP</Text>
                    </Card>
                </View>
            </>
        )
    }
}

const stylesC = StyleSheet.create({
    BtnCard: {
        height: height * .07,
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Line: {
        height: 2,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: Default.CBlue,
        flex: .4
    }
});