import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const UserShopScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebdafb"
    },
    cadView: {
        flex: 3.5,
    },
    ScrollViewStyle: {
        flex: 6.5,
        backgroundColor: "#ebdafb"
    },
    cadViewStyle: {
        flex: 1,
        margin: 8,
        borderRadius: 20,
        shadowColor: "#b049ab",
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cadUserIconView: {
        flex: 3,
        paddingLeft: 25,
        justifyContent: "flex-end",
    },
    cardUserIconStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderColor: "#FFF",
        borderWidth: 1
    },
    cadNameView: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    cadNameText: {
        fontSize: 35,
        fontWeight: "600",
        color: "#FFF"
    },
    cadUserNameView: {
        flex: 3,
        paddingLeft: 20,
        flexDirection: "row"
    },
    cadUserNameText: {
        fontSize: 20,
        fontWeight: "400",
        color: "#FFF"
    },
    cadUserIdText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#5c3b99"
    },
    cardEditView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingEnd: 10,
    },
    cardEditButtom: {
        backgroundColor: "#ce9efd",
        height: 30,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:20
    },
    cardEditButtomText: {
        fontSize : 15,
        color : "#404040"
    },
    titleView : {
        height :45,
        backgroundColor: "#a182f4",
        width: Width-50,
        borderTopEndRadius:20,
        borderBottomEndRadius:20,
        paddingLeft:15,
        justifyContent : "center",
        shadowColor: "#b049ab",
        shadowOffset: {
            width: 5,
            height:5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleStyle: {
        fontSize : 25,
        color : "#FFF",
        fontWeight : "600"
    },
    shopButtomView :{
        height : 170,
        marginTop:10,
        flexDirection : "row"
    },
    shopButtomStyle : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#FFF",
        margin:10,
        borderRadius:20,
        shadowColor: "#b049ab",
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    shopButtomImageStyle : {
        height : 50,
        width:50,
        
    },
    shopButtomTextStyle : {
        fontSize:15,
        fontWeight : "500",
        color : "#8e8e8b",
        marginTop: 10
    }
});


export default UserShopScreenStyle;
