import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const FashionScreenStyle = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "#E0FFFF",
    },
    inner: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 26,
        marginBottom: 5,
        fontWeight : "500"
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
        flex:1
    },
    textInputShort1 : {
        height: 35,
        borderColor: "#A9A9A9",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 20,
        margin:5,
        flex : 3
    },
    headerShortStyle : {
        flex : 1,
        paddingLeft : 5
    },
    tabView : {
        height : 90,
        justifyContent : "flex-end",
        paddingLeft:20
    },
    searchButtom : {
        height : 50,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#6633FF",
        marginTop : 15,
        borderRadius : 25
    },
    searchButtomText : {
        fontSize : 23,
        color : "#FFF",
        fontWeight : "600"
    },
    fabricButton: {
        padding: 5,
        margin:2,
        borderRadius:10,
        borderColor: "#989898",
        borderWidth:0.2
    },
    headerShortFabric : {
        flexDirection: "row",
    },
    fabricButtonText: {
        fontSize : 16,
        color : "#606060"
    },
    
})

export default FashionScreenStyle
