import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import AppStyle from '../theme';
import FashionDatas from '../config/FashionData';
import { SkinColors } from '../assest';
import FabricLists from '../config/FabricLists';
import ColorAnalysisComponent from '../component/ColorAnalysisComponent';
import SizeAnalysisComponent from '../component/SizeAnalysisComponent';
function TabView() {
    return (
        <View style={AppStyle.FashionScreenStyle.tabView}>
            <Text style={AppStyle.FashionScreenStyle.header}>
                Fashion Search
            </Text>
        </View>
    )
}

export default function AIFashionScreen() {
    const numberOfButtons = 14; // Số lượng TouchableOpacity 
    const [fabric, setFabric] = useState(''); // chất liệu
    const [bodyHeight, setBodyHeight] = useState('');
    const [bodyWeight, setBodyWeight] = useState('');
    const [age, setAge] = useState('');
    const [bust, setBust] = useState('');
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');
    const [skinColor, setSkinColor] = useState(null);
    const [filteredFashion, setFilteredFashion] = useState([]);

    const colorData = () => {
        if (skinColor !== null) {
            let colorGroup;

            if (skinColor >= 1 && skinColor <= 10) {
                colorGroup = 'A';
            } else if (skinColor >= 11 && skinColor <= 20) {
                colorGroup = 'B';
            } else if (skinColor >= 21 && skinColor <= 30) {
                colorGroup = 'C';
            } else {
                console.log('Chưa chọn màu da');
                return null;
            }

            console.log('Màu đã chọn:', skinColor);
            console.log('Color thuộc:', colorGroup);

            // Tìm kiếm thông tin màu sắc trong ColorAnalysisComponent dựa trên colorGroup
            const colorInfo = ColorAnalysisComponent.find(item => item.paletteName === colorGroup);

            if (colorInfo) {
                console.log(`Bảng màu: ${colorInfo.paletteName}`);
                console.log('Màu da:', colorInfo.useColors);
                console.log('Không sử dụng màu sắc:', colorInfo.doNotUseColors);
                return colorInfo; // Trả về thông tin màu sắc
            } else {
                console.log('Không tìm thấy thông tin bảng màu cho nhóm màu.');
                return null;
            }
        } else {
            console.log("Chưa chọn màu da.");
            return null;
        }
    };

    const handleButtonPress = (index) => {
        setSkinColor(index);
        console.log('Selected Skin Color:', index); // Thêm lệnh log ở đây để hiển thị giá trị skinColor
    };
    // input
    const data = [`tuổi:${age}`, `chiều cao: ${bodyHeight}`, `cân nặng: ${bodyWeight}`, `vòng 1: ${bust}`, ` ${waist}`, `${hip}`, `${skinColor}`, `${fabric}`]

    const handleButtonSearch = () => {
        console.log(data);
        colorData();  // Call the function by adding parentheses
        filterFashionData();  // Gọi hàm lọc thời trang
        const currentSeason = getSeason();
        console.log(`Current season: ${currentSeason}`);
    };
    /// lấy mùa 
    const getSeason = () => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;

        if (month >= 3 && month <= 5) {
            return 'Mùa xuân';
        } else if (month >= 6 && month <= 8) {
            return 'Hè';
        } else if (month >= 9 && month <= 11) {
            return 'Thu';
        } else {
            return 'Đông';
        }
    }
    

    // Hàm kiểm tra xem trang phục có thuộc mùa không
    const isFashionInSeason = (item, currentSeason) => {
        const winterKeywords = [
            "áo khoác", "áo dự nhiệt", "áo len", "áo hoodie", "quần áo mùa đông",
            "găng tay", "mũ len", "áo sơ mi dài tay", "áo khoác chống nước", "giày ấm", "nỉ"
        ];
    
        const summerKeywords = [
            "áo sơ mi ngắn tay", "quần short", "váy hè", "đồ bơi", "mũ nắng", "áo lót"
        ];
    
        const springKeywords = [
            "áo khoác bomber", "áo sơ mi dài tay", "quần jogger", "áo len dài tay", "áo khoác mùa xuân"
        ];
    
        const fallKeywords = [
            "áo khoác nhẹ", "áo len mỏng", "quần jeans", "áo khoác gió", "giày thể thao"
        ];
    
        let seasonKeywords;
    
        switch (currentSeason) {
            case 'Đông':
                seasonKeywords = winterKeywords;
                break;
            case 'Hè':
                seasonKeywords = summerKeywords;
                break;
            case 'Xuân':
                seasonKeywords = springKeywords;
                break;
            case 'Thu':
                seasonKeywords = fallKeywords;
                break;
            default:
                seasonKeywords = [];
                break;
        }
    
        // Kiểm tra xem productName có chứa từ khóa của mùa đó hay không
        return seasonKeywords.some(keyword => item.productName.toLowerCase().includes(keyword.toLowerCase()));
    };
    
    
    const filterFashionData = () => {
        const currentSeason = getSeason();
    
        // Lấy thông tin chiều cao và cân nặng từ người dùng
        const customerSize = {
            height: parseFloat(bodyHeight),
            weight: parseFloat(bodyWeight),
        };
    
        // Lọc danh sách thời trang dựa trên chiều cao và cân nặng
        const allFashionData = FashionDatas.filter(item => {
            // Tìm thông tin kích thước phù hợp từ SizeAnalysisComponent
            const sizeInfo = SizeAnalysisComponent.find(size => {
                const { min: minHeight, max: maxHeight } = size.heightRange;
                const { min: minWeight, max: maxWeight } = size.weightRange;
    
                const isHeightInRange = customerSize.height >= minHeight && customerSize.height <= maxHeight + 2;
                const isWeightInRange = (
                    (customerSize.weight >= minWeight - 3 && customerSize.weight <= maxWeight + 3) ||
                    (customerSize.weight >= maxWeight + 3 && customerSize.weight <= minWeight - 3)
                );
    
                return isHeightInRange && isWeightInRange;
            });
    
            // Nếu tìm thấy thông tin kích thước, kiểm tra xem size của thời trang có phù hợp không
            return sizeInfo && sizeInfo.size === item.size;
        });
    
        // Lọc ra các sản phẩm thuộc mùa hiện tại
        const currentSeasonFashionData = allFashionData.filter(item => isFashionInSeason(item, currentSeason));
    
        // Lọc ra các sản phẩm không thuộc mùa hiện tại
        const otherFashionData = allFashionData.filter(item => !isFashionInSeason(item, currentSeason));
    
        // Sắp xếp mảng để đưa trang phục thuộc mùa hiện tại lên trên
        const sortedFashionData = currentSeasonFashionData.concat(otherFashionData);
    
        // Cập nhật state filteredFashion với kết quả lọc và sắp xếp
        setFilteredFashion(sortedFashionData);
    };
    

    const renderFashionData = () => {
        if (filteredFashion.length === 0) {
            return (
                <View style={{ height: 1000 }}>
                    <Text>Không có Fashion phù hợp</Text>
                </View>
            );
        }

        return (
            <View style={{}}>
                {filteredFashion.map(item => (
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "600",
                                color: "#660033"
                            }}
                        >
                            Trang phục phù hợp với bạn:
                        </Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "600",
                                color: "#F4A460"
                            }}
                            key={item.id}>Tên sản phẩm: {item.productName}{item.id}</Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "500",
                                color: "#2F4F4F"
                            }}
                        >Giá: {item.retailPrice} đ</Text>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "600"
                            }}
                        >Cỡ: {item.size}</Text>
                        <Image
                            source={item.image}
                            style={{
                                height: 200,
                                width: "50%"
                            }}
                        />
                    </View>

                ))}
            </View>
        )
    };



    return (
        <View
            style={AppStyle.FashionScreenStyle.container}
        >
            <TabView />
            <ScrollView>
                <View style={AppStyle.FashionScreenStyle.inner}>

                    <View style={AppStyle.FashionScreenStyle.headerShort}>
                        <View style={AppStyle.FashionScreenStyle.headerShortStyle}>
                            <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                                Chiều cao 'Cm'
                            </Text>
                        </View>
                        <View
                            style={AppStyle.FashionScreenStyle.headerShortStyle}
                        >
                            <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                                Cân nặng 'Kg'
                            </Text>
                        </View>
                    </View>
                    <View style={AppStyle.FashionScreenStyle.headerShort}>

                        <TextInput
                            placeholder="170"
                            style={AppStyle.FashionScreenStyle.textInputShort}
                            onChangeText={(number) => setBodyHeight(number)}
                        />
                        <TextInput
                            placeholder="63"
                            style={AppStyle.FashionScreenStyle.textInputShort}
                            onChangeText={(number) => setBodyWeight(number)}
                        />
                    </View>

                    <View style={AppStyle.FashionScreenStyle.headerShort}>
                        <View style={AppStyle.FashionScreenStyle.headerShortStyle}>
                            <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                                Tuổi
                            </Text>
                        </View>
                        <View
                            style={AppStyle.FashionScreenStyle.headerShortStyle}
                        >
                            <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                                Số đo 3 vòng
                            </Text>
                        </View>
                    </View>
                    <View style={AppStyle.FashionScreenStyle.headerShort}>

                        <TextInput
                            placeholder="27"
                            style={AppStyle.FashionScreenStyle.textInputShort}
                            onChangeText={(number) => setAge(number)}
                        />
                        <TextInput
                            placeholder="90"
                            style={AppStyle.FashionScreenStyle.textInputShort1}
                            onChangeText={(number) => setBust(number)}
                        />
                        <TextInput
                            placeholder="60"
                            style={AppStyle.FashionScreenStyle.textInputShort1}
                            onChangeText={(number) => setWaist(number)}
                        />
                        <TextInput
                            placeholder="90"
                            style={AppStyle.FashionScreenStyle.textInputShort1}
                            onChangeText={(number) => setHip(number)}
                        />
                    </View>

                    <View
                        style={AppStyle.FashionScreenStyle.headerShortStyle}
                    >
                        <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                            Chất liệu
                        </Text>
                    </View>

                    <View style={{ ...AppStyle.FashionScreenStyle.headerShortFabric, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {FabricLists.map(cat => {
                            let bgColor = "#FFFAFA"
                            if (cat.value === fabric) bgColor = "#87CEFA"
                            return (
                                <TouchableOpacity
                                    onPress={() => setFabric(cat.value)}
                                    style={{ ...AppStyle.FashionScreenStyle.fabricButton, backgroundColor: bgColor }}
                                    key={cat.value}
                                >
                                    <Text style={AppStyle.FashionScreenStyle.fabricButtonText}>{cat.title}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>


                    <View>
                        <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                            Màu da
                        </Text>
                        <View
                            style={{
                                height: 50,
                                borderColor: "#A9A9A9",
                                borderWidth: 1,
                                flex: 1,
                                flexDirection: "row"
                            }}
                        >{Array.from({ length: numberOfButtons }).map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleButtonPress(index + 1)}
                                style={{
                                    backgroundColor: SkinColors[index + 1],
                                    flex: 1,
                                    borderEndWidth: 1,
                                    borderColor: skinColor === index + 1 ? "blue" : "#989898" // Màu viền thay đổi khi nút được nhấn

                                }}
                            />
                        ))}
                        </View>

                        <View
                            style={{
                                height: 50,
                                borderColor: "#A9A9A9",
                                borderWidth: 1,
                                flex: 1,
                                flexDirection: "row"
                            }}
                        >{Array.from({ length: numberOfButtons }).map((_, index) => (
                            <TouchableOpacity
                                key={index + 15}
                                onPress={() => handleButtonPress(index + 15)}
                                style={{
                                    backgroundColor: SkinColors[index + 15],
                                    flex: 1,
                                    borderEndWidth: 1,
                                    borderColor: skinColor === index + 15 ? "blue" : "#989898" // Màu viền thay đổi khi nút được nhấn

                                }}
                            />
                        ))}
                        </View>


                    </View>

                    <TouchableOpacity
                        onPress={handleButtonSearch}
                        style={AppStyle.FashionScreenStyle.searchButtom}>
                        <Text style={AppStyle.FashionScreenStyle.searchButtomText}>
                            Tìm trang phục nhanh
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor: "#F5F5F5"
                }}>
                    {renderFashionData()}
                </View>

            </ScrollView>
        </View>
    );
};