import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const FeaturScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0FFFF",
    },
    backGroundView: {
        flex: 4,
        backgroundColor: "#E0FFFF",
    },
    bodyView: {
        flex: 6,
    },
    IconBackground: {
        height: 130,
        width: 130,
        marginBottom: 20
    },
    TitleView: {
        flex: 2,
        justifyContent: "center"
    },
    IconBackgroundView: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 15,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    TitleStyle: {
        fontSize: 30,
        fontWeight: "700",
        paddingLeft: 10,
        color: "#4682B4"
    },
    CalculateView: {
        height: 150,
        margin: 10,
        borderRadius: 10,
        flex:1,
        flexDirection : "row"
    },
    shadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    CalculateIcon: {
        flex : 4,
        justifyContent : "center",
        alignItems : "center"
    },
    CalculateTitle: {
        flex: 6,
        justifyContent : "center",
        padding:10
    },
    iconStyle : {
        height : 70,
        width:70
    },
    TitleButtomStyle: {
        fontSize : 22,
        color : "#FFF",
        fontWeight : "700",
        marginBottom :10
    },
    DescriptionStyle: {
        fontSize : 20,
        color : "#FFF",
        fontWeight : "400"
    },
    smallButtomView : {
        flex : 1,
        height : 180,
        flexDirection : "row"
    },
    smallButtomView1 : {
        flex : 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    smallButtomView2 : {
        flex : 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    smallIconStyle : {
        height : 60,
        width: 60
    },

});


export default FeaturScreenStyle;
