import { StyleSheet, Dimensions } from 'react-native';
import { Default } from '../components/Defaults';
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    Container: {
        flex: 1, backgroundColor: "#FFFFFF"
    },
    TitleText: {
        marginTop: 10,
        fontSize: 22,
        fontFamily: Default.FontNSB
    },
    TextInput: {
        fontFamily: Default.FontRegular, fontSize: 14
    },
    CustomCard: {
        height: height * .07,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    IconStyle: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: Default.CBlue,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BtnText: {
        color: Default.CWhite,
        fontSize: 18,
        fontFamily: Default.FontSemiBold
    }
})
export default styles