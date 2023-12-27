import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
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

    const handleButtonPress = (index) => {
        setSkinColor(index);
    };

    const colorData = () => {
        let colorGroup;
        if (skinColor !== null) {
            if (skinColor >= 1 && skinColor <= 10) {
                colorGroup = 'A';
            } else if (skinColor >= 11 && skinColor <= 20) {
                colorGroup = 'B';
            } else {
                colorGroup = 'C';
            }
        } else {
            console.log("Chưa chọn màu da.");
        }
    }

    const data = [`tuổi:${age}`, `chiều cao: ${bodyHeight}`, `cân nặng: ${bodyWeight}`, `vòng 1: ${bust}`, ` ${waist}`, `${hip}`, `${skinColor}`]

    const handleButtonSearch = () => {
        console.log(data);
        colorData();  // Call the function by adding parentheses
        filterFashionData();  // Gọi hàm lọc thời trang
    };


    const filterFashionData = () => {
        // Lấy thông tin chiều cao và cân nặng từ người dùng
        const customerSize = {
            height: parseFloat(bodyHeight),
            weight: parseFloat(bodyWeight)
        };

        // Lọc danh sách thời trang dựa trên chiều cao và cân nặng
        const filteredFashionData = FashionDatas.filter(item => {
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

        // Cập nhật state filteredFashion với kết quả lọc
        setFilteredFashion(filteredFashionData);
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
            <View style={{ height: 1000 }}>
                {filteredFashion.map(item => (
                    <View>
                        <Text key={item.id}>{item.productName}</Text>
                        <Text >{item.size}</Text>
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
                    height: 1000
                }}>
                    <Text>
                        render
                    </Text>
                    {renderFashionData()}
                </View>

            </ScrollView>
        </View>
    );
};