import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const CalculateScreenStyle = StyleSheet.create({
    container : {
        backgroundColor: "#E0FFFF",
        flex:1
    },
    textInput : {
        height : 45,
        borderColor : "#ADD8E6",
        borderWidth: 1,
        margin: 10,
        paddingLeft : 10,
        borderRadius : 15,
        fontSize : 20,
        backgroundColor: "#E8E8E8"
    },
    titleStyle: {
        fontSize : 20,
        paddingLeft : 10,
        paddingTop : 20,
        fontWeight : "600",
        color : "#4682B4"
    },
    buttomView : {
        height : 55,
        flexDirection : "row",
        marginTop: 20
    },
    GiamButtomStyle : {
        flex : 1, 
        backgroundColor : "#6600FF",
        margin : 5,
        borderRadius : 10,
        justifyContent : "center",
        alignItems : "center"
    },
    TangButtomStyle : {
        flex : 1, 
        backgroundColor : "#FF0033",
        margin : 5,
        borderRadius : 10,
        alignItems : "center",
        justifyContent : "center",
    },
    buttomTextStyle : {
        fontSize : 20,
        fontWeight : "600",
        color : "#FFF"
    },
    titleAmountStyle : {
        fontSize : 23,
        paddingLeft : 10,
        paddingTop : 20,
        fontWeight : "600",
        color : "red"
    },
    clearButton: {
        alignItems : "flex-end",
        justifyContent : "center",
        marginEnd : 10
        
    },
    clearButtonText : {
        padding :4,
        backgroundColor : "#FFD1D2",
        fontSize : 20,
        color : "#787878",
        borderRadius : 10,
        width: 100,
        justifyContent : "center",
        alignItems : "center"
    },
    clearButtonTextStyle : {
        fontSize : 18,
        color : "#787878",
    },
    historyItem : {
        padding: 5,
        paddingLeft :10,
        fontSize : 20,
        color: "#585858"
    }
    

});


export default CalculateScreenStyle;
