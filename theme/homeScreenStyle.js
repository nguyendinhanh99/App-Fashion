import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const HomeScreenStyle = StyleSheet.create({
    container : {
    },
    tabView : {
        height : 85,
    },
    tabViewFlex : {
        flex : 1,
        flexDirection : "row",
        backgroundColor:"#FFF"

    },
    searchButtomView : {
        flex : 1,
        justifyContent: "flex-end",
        paddingLeft:20
    },
    cartButtomView: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        paddingEnd: 20,
    },
    tabButtomIcon: {
        height: 45,
        width: 45,
    },
    cartItemCount: {
        position: 'absolute',
        bottom: -7,  // Điều chỉnh giá trị bottom để lệch xuống góc dưới
        right: -7,  // Điều chỉnh giá trị right để lệch ra ngoài một nửa
        backgroundColor: '#FFF',
        borderRadius: 100,
        padding: 7,
        paddingLeft:10,
        paddingEnd:10,
        color: '#fff',
        borderColor: "#993399",
        borderWidth:0.2
    },
    productListContainer: {
        paddingHorizontal: 5,
        paddingTop: 10,
      },
      productItemContainer: {
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
      },
      productItemImage: {
        width: '75%',
        height: '30%',
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 10,
      },
      productItemInfo: {
        padding: 10,
        backgroundColor: '#fff',
      },
      productItemName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      productItemDetails: {
        fontSize: 14,
        color: '#888',
      },
      selectedProductContainer: {
        position: 'absolute',
        top:100,
        left: 0,
        right: 0,
        bottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      selectedProductDetails: {
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 8,
      },
      closeBtn: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#3498db',
        borderRadius: 8,
      },
      closeBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
      },
      cartButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        alignSelf: 'center',
      },
      cartButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        position: 'relative',
      },
      cartItemCount: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#e74c3c',
        borderRadius: 50,
        padding: 5,
        color: '#fff',
      },
      TextItemStyle: {
        color: '#383838',
        fontSize: 17,
      }
    
});


export default HomeScreenStyle;
