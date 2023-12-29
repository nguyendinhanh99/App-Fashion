import { StyleSheet, Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const MyShopScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default MyShopScreenStyle;
