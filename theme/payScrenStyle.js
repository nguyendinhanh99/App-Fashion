import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const PayScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E6E6E6",
    },
    CardView : {
        flex : 3.5,
        marginTop: 5
    },
    infoBuyView : {
        flex : 6.5
    },
    CardFlexView : {
        flex : 1,
        margin: 5,
        borderRadius: 20
    },
    userImage : {
        flex : 3,
        justifyContent : "center",
        paddingLeft: 20
    },
    userImageStyle : {
        height: 50,
        width: 50,
        backgroundColor: "red",
        borderRadius: 60
    },
    cardLogoView : {
        flex : 3,
        justifyContent: "center",
        alignItems:"center"
    },
    userInfoView: {
        flex: 4,
    },
    cardNameText: {
        fontSize: 35,
        fontWeight: "600",
        color: "#FFF"
    },
    userInfoViewStyle : {
        flex : 1,
        flexDirection: "row"
    },
    userInfoNameView: {
        flex: 7.5,
        justifyContent: "center"
    },
    userInfoEditButtomView : {
        flex: 2.5,
        justifyContent : "center",
        alignItems: "center",
    },
    userInfoEditButtomViewStyle : {
        justifyContent : "center",
        alignItems: "center",
        backgroundColor: "#ce9efd",
        borderRadius: 20
    },
    userInfoEditButtomTextStyle : {
        padding:10
    },
    userInfoNameText : {
        fontSize: 20,
        fontWeight: "400",
        color: "#FFF",
        paddingLeft: 20,
    },
    userInfoNameIDText:  {
        fontSize: 18,
        fontWeight: "500",
        color: "#5c3b99",
        paddingLeft: 20,
    },
    infoBuyViewStyle : {
        flex:1,
    },
    infoBuyBody : {
        flex:1,     
    },
    infoBuyBodyStyle : {
        flex:1,
    
    },
    infoBuyBodyStyle : {
        flex: 1,
    },
    infoBuyBodyTitleView : {
        height: 30,
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center"
    },
    infoBuyBodyAddView : {
        backgroundColor: "#FFF",
        paddingLeft:20,

    },
    infoBuyBodyTitleText : {
        fontSize: 15,
        fontWeight: "300",
        padding:5,
    },
    infoBuyBodyAddText : {
        fontSize: 15,
        fontWeight: "300",
        marginBottom:5
    },
    mapIconStyle : {
        height:20,
        width:20,
        marginLeft:10
    },
    selectedProductView: {
        height : 50,
        backgroundColor: "#FFF",
        margin:5,
        borderRadius: 10,
        justifyContent : "center",

    },
    selectedProductName : {
        fontSize: 16,
        paddingLeft:10,
        fontWeight: "500"
    },
    selectedProductRetailPrice : {
        fontSize: 16,
        paddingLeft:10,
        color: "#fd8258"
    }
});


export default PayScreenStyle;
