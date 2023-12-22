import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const FashionScreenStyle = StyleSheet.create({
    container: {
        flex : 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 26,
        marginBottom: 48,
    },
    inputTitle:{
        fontSize : 18,
        padding:5,
        color : "#787878"
    },
    textInput: {
        height: 35,
        borderColor: "#A9A9A9",
        borderWidth: 1,
        width: Width - 40,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 20,
    },
    textInputShort : {
        height: 35,
        borderColor: "#A9A9A9",
        borderWidth: 1,
        width: Width/2-30,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 20,
        margin:5
    },
    headerShort : {
        flexDirection: "row",
    },
    headerShortStyle : {
        flex : 1,
        paddingLeft : 5
    }
})

export default FashionScreenStyle
