import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const HomeScreenStyle = StyleSheet.create({
    container : {
    },
    tabView : {
        height : 90,
    },
    tabViewFlex : {
        flex : 1,
        flexDirection : "row",

    },
    searchButtomView : {
        flex : 1,
        justifyContent: "flex-end",
        paddingLeft:20
    },
    cartButtomView: {
        flex : 1,
        alignItems : "flex-end",
        justifyContent: "flex-end",
        paddingEnd:20
    },
    tabButtomIcon : {
        height:50,
        width:50,
        
    }
});


export default HomeScreenStyle;
