import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const SizeShoesStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0FFFF",

    },
    TitleView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 15
    },
    TitleStyle: {
        fontSize: 25,
        fontWeight: "600",
        paddingBottom: 5,
        color: "#6495ED",
    },
    searchSizeView: {
        flex: 9,
    },
    searchSizeFlexView: {
        flex: 1,
    },
    searchInput: {
        flex: 2.5,
        paddingLeft: 20
    },
    searchInputTitle: {
        fontSize: 18,
        padding: 8,
        color: "#787878",
    },
    searchTextInput: {
        height: 40,
        borderColor: "#A9A9A9",
        borderWidth: 1,
        width: Width - 40,
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 23,
        backgroundColor: "#E8E8E8"
    },
    searchButtom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    searchButtomStyle: {
        flex: 0.8,
        backgroundColor: "#1E90FF",
        width: Width - 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    searchButtomTextStyle: {
        fontSize: 25,
        fontWeight: "600",
        color: "#FFF"
    },
    searchShowData: {
        flex: 6.2,
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#E0FFFF",

    },
    searchShowDataFlex: {
        flex: 1,
        width: Width - 10,
        backgroundColor: "#E0FFFF",
        borderRadius: 10,
    },
    searchShowDataText: {
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: "500",
        padding: 5
    },
    sexButtomView: {
        flex: 0.8,
        flexDirection: "row",
        padding: 20
    },
    sexButtomStyle1: {
        flex: 1,
        borderWidth: 0.4,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 10
    },
    sexButtomStyle2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 10,
        borderWidth: 0.4
    },
    sexButtomText: {
        fontSize: 19,
        fontWeight: "500",
        color: "#696969"
    },
    showItem: {
        backgroundColor: "#FFF",
        margin: 5,
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default SizeShoesStyle;
