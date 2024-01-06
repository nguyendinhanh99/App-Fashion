import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const NoteScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0FFFF",
    },
    TitleView: {
        flex: 0.5,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 15
    },
    inputView: {
        flex: 2,
        padding: 5,
        marginLeft:5
    },
    inputStyle: {
        flex: 1,
        height: 40,
        borderColor: '#A9A9A9',
        borderWidth: 1,
        marginRight: 8,
        paddingHorizontal: 8,
        textAlignVertical: 'top',
        borderRadius: 10,
        fontSize : 18,
        backgroundColor : "#FFF"
    },
    buttomAddNote: {
        backgroundColor: '#4CAF50',
        padding: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin : 10

    },
    showDataView: {
        flex: 6
    }
});


export default NoteScreenStyle;
