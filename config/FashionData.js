const FashionDatas = [
    {
        id: 1,
        brand: "Adidas",
        productName: "Áo khoác  Adidas",
        cloting: "Áo giữ nhiệt",
        pants : "",
        sex: "male",//Female
        size: "L",
        color: "Màu Trắng",
        retailPrice : "1.000.000",
        material : "silk 57%, cotton 43%",
        image: require('../config/Images/anh1.jpg'), // Đường dẫn tới hình ảnh cho size XS

    },
    {
        id: 2,
        brand: "MLB",
        productName: "Áo phông MLB",
        cloting: "Áo phông MLB",
        pants : "",
        sex: "male",//Female
        size: "M",
        color: "Màu Xanh",
        retailPrice : "1.990.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh2.jpg'), // Đường dẫn tới hình ảnh cho size XS
    },
    {
        id: 3,
        brand: "MLB",
        productName: "Áo phông MLB",
        cloting: "",
        pants : "Quần gió",
        sex: "male",//Female
        size: "XL",
        color: "Hồng nhạt",
        retailPrice : "1.100.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh3.jpg'), // Đường dẫn tới hình ảnh cho size XS
    },
    {
        id: 4,
        brand: "Adidas",
        productName: "Áo nỉ Adidas",
        cloting: "",
        pants : "Quần nỉ",
        sex: "male",//Female
        size: "XXL",
        color: "Đen",
        retailPrice : "1.700.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh4.jpg'), // Đường dẫn tới hình ảnh cho size XS
    },
    {
        id: 5,
        brand: "MLB",
        productName: "Áo MLB",
        cloting: "",
        pants : "Áo phông",
        sex: "male",//Female
        size: "S",
        color: "Đen",
        retailPrice : "1.700.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh5.jpg'), // Đường dẫn tới hình ảnh cho size XS
    },
    {
        id: 6,
        brand: "NY",
        productName: "Áo khoác NY",
        cloting: "áo NY",
        pants: "",
        sex: "male",
        size: "L",
        color: "Trắng",
        retailPrice: "1.200.000",
        material: "Polyester 80%, Cotton 20%",
        image: require('../config/Images/anh10.jpg'),
    },
    {
        id: 7,
        brand: "NY",
        productName: "Áo khoác NY",
        cloting: "Áo NY ",
        pants: "",
        sex: "female",
        size: "S",
        color: "Đen",
        retailPrice: "1.500.000",
        material: "Cotton 90%, Spandex 10%",
        image: require('../config/Images/anh11.jpg'),
    },
    {
        id: 8,
        brand: "Adidas",
        productName: "Quần thể thao Adidas",
        cloting: "",
        pants: "Quần thể thao",
        sex: "male",
        size: "XL",
        color: "Xám",
        retailPrice: "1.800.000",
        material: "Polyester 95%, Spandex 5%",
        image: require('../config/Images/anh5.jpg'),
    },
    {
        id: 9,
        brand: "MLB",
        productName: "Áo polo MLB",
        cloting: "Áo polo MLB",
        pants: "",
        sex: "male",
        size: "M",
        color: "Vàng",
        retailPrice: "1.250.000",
        material: "Cotton 85%, Polyester 15%",
        image: require('../config/Images/anh8.jpeg'),
    },
    {
        id: 10,
        brand: "MLB",
        productName: "Áo polo MLB",
        cloting: "Áo polo MLB",
        pants: "",
        sex: "male",
        size: "L",
        color: "Vàng",
        retailPrice: "1.250.000",
        material: "Cotton 85%, Polyester 15%",
        image: require('../config/Images/anh8.jpeg'),
    },
    {
        id: 11,
        brand: "MLB",
        productName: "Áo polo MLB",
        cloting: "Áo polo MLB",
        pants: "",
        sex: "male",
        size: "S",
        color: "Vàng",
        retailPrice: "1.250.000",
        material: "Cotton 85%, Polyester 15%",
        image: require('../config/Images/anh8.jpeg'),
    },
    {
        id: 12,
        brand: "MLB",
        productName: "Áo polo MLB",
        cloting: "Áo polo MLB",
        pants: "",
        sex: "male",
        size: "XXL",
        color: "Vàng",
        retailPrice: "1.250.000",
        material: "Cotton 85%, Polyester 15%",
        image: require('../config/Images/anh8.jpeg'),
    },
    {
        id: 13,
        brand: "NY",
        productName: "Áo khoác NY",
        cloting: "Áo NY ",
        pants: "",
        sex: "female",
        size: "M",
        color: "Đen",
        retailPrice: "1.500.000",
        material: "Cotton 90%, Spandex 10%",
        image: require('../config/Images/anh11.jpg'),
    },
    {
        id: 14,
        brand: "NY",
        productName: "Áo khoác NY",
        cloting: "Áo NY ",
        pants: "",
        sex: "female",
        size: "XXL",
        color: "Đen",
        retailPrice: "1.500.000",
        material: "Cotton 90%, Spandex 10%",
        image: require('../config/Images/anh11.jpg'),
    },
    {
        id: 14,
        brand: "Adidas",
        productName: "Áo giữ nhiệt Adidas",
        cloting: "Áo giữ nhiệt",
        pants : "",
        sex: "male",//Female
        size: "S",
        color: "Đỏ",
        retailPrice : "1.000.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh1.jpg'), // Đường dẫn tới hình ảnh cho size XS

    },
    {
        id: 15,
        brand: "MLB",
        productName: "Áo phông MLB",
        cloting: "Áo phông MLB",
        pants : "",
        sex: "male",//Female
        size: "S",
        color: "Be",
        retailPrice : "1.990.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh2.jpg'), // Đường dẫn tới hình ảnh cho size XS
    },
    {
        id: 16,
        brand: "MLB",
        productName: "Áo khoác lông vũ MLB",
        cloting: "Áo khoác lông vũ MLB",
        pants : "",
        sex: "male",//Female
        size: "L",
        color: "Be",
        retailPrice : "2.990.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh12.jpeg'), 
    },
    {
        id: 17,
        brand: "MLB",
        productName: "Áo khoác lông vũ MLB",
        cloting: "Áo khoác lông vũ MLB",
        pants : "",
        sex: "male",//Female
        size: "S",
        color: "Be",
        retailPrice : "2.990.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh12.jpeg'), 
    },
    {
        id: 18,
        brand: "Nike",
        productName: "Áo hoodie Nike",
        cloting: "Áo hoodie",
        pants: "",
        sex: "female",
        size: "S",
        color: "Vàng",
        retailPrice: "1.900.000",
        material: "Cotton 90%, Spandex 10%",
        image: require('../config/Images/anh9.png'),
    },
    {
        id: 19,
        brand: "Nike",
        productName: "Áo hoodie Nike",
        cloting: "Áo hoodie",
        pants: "",
        sex: "female",
        size: "M",
        color: "Vàng",
        retailPrice: "1.900.000",
        material: "Cotton 90%, Spandex 10%",
        image: require('../config/Images/anh9.png'),
    },
    {
        id: 20,
        brand: "Nike",
        productName: "Áo hoodie Nike",
        cloting: "Áo hoodie",
        pants: "",
        sex: "female",
        size: "L",
        color: "Màu Vàng Mustard",
        retailPrice: "1.900.000",
        material: "Cotton 90%, Spandex 10%",
        image: require('../config/Images/anh9.png'),
    },
    {
        id: 21,
        brand: "Adidas",
        productName: "Áo nỉ Adidas",
        cloting: "",
        pants : "",
        sex: "male",//Female
        size: "S",
        color: "Đen",
        retailPrice : "1.700.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh4.jpg'), // Đường dẫn tới hình ảnh cho size XS
    },
    {
        id: 22,
        brand: "Adidas",
        productName: "Váy hè",
        cloting: "Váy hè",
        pants : "",
        sex: "male",//Female
        size: "L",
        color: "Màu Burgundy",
        retailPrice : "1.000.000",
        material : "Plyester 10%, Elostane 90%",
        image: require("/Users/anhnguyendinh/Desktop/NiNo/config/anh13.jpeg"), // Đường dẫn tới hình ảnh cho size XS

    },
    {
        id: 23,
        brand: "Adidas",
        productName: "quần jeans",
        cloting: "Váy hè",
        pants : "",
        sex: "male",//Female
        size: "L",
        color: "Trắng",
        retailPrice : "1.000.000",
        material : "Plyester 10%, Elostane 90%",
        image: require("/Users/anhnguyendinh/Desktop/NiNo/config/anh13.jpeg"), // Đường dẫn tới hình ảnh cho size XS

    },
    {
        id: 24,
        brand: "Adidas",
        productName: "Áo khoác  Adidas",
        cloting: "Áo giữ nhiệt",
        pants : "",
        sex: "male",//Female
        size: "L",
        color: "Màu nâu nhạt",
        retailPrice : "1.000.000",
        material : "Plyester 10%, Elostane 90%",
        image: require('../config/Images/anh1.jpg'), // Đường dẫn tới hình ảnh cho size XS

    },
]

export default FashionDatas;