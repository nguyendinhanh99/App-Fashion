import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, FlatList, } from 'react-native';
import AppStyle from '../theme';

const numColumns = 3; // hoặc giá trị numColumns bạn muốn sử dụng

const items = [
    {
        id: 1,
        brand: "Adidas",
        usSize: "6",
        vnSize: "39 1/3",
        sex: "male"
    },
    {
        id: 2,
        brand: "Adidas",
        usSize: "6-",
        vnSize: "40",
        sex: "male"
    },
    {
        id: 3,
        brand: "Adidas",
        usSize: "7",
        vnSize: "40 2/3",
        sex: "male"
    },
    {
        id: 4,
        brand: "Adidas",
        usSize: "7-",
        vnSize: "36 1/3",
        sex: "male"
    },
    {
        id: 5,
        brand: "Adidas",
        usSize: "8",
        vnSize: "42",
        sex: "male"
    },
    {
        id: 6,
        brand: "Adidas",
        usSize: "8-",
        vnSize: "42 2/3",
        sex: "male"
    },
    {
        id: 7,
        brand: "Adidas",
        usSize: "9",
        vnSize: "43 1/3",
        sex: "male"
    },
    {
        id: 8,
        brand: "Adidas",
        usSize: "3",
        vnSize: "36",
        sex: "male"
    },
    //
    {
        id: 9,
        brand: "Adidas",
        usSize: "4",
        vnSize: "36 2/3",
        sex: "female"
    },
    {
        id: 10,
        brand: "Adidas",
        usSize: "4-",
        vnSize: "37 1/3",
        sex: "female"
    },
    {
        id: 11,
        brand: "Adidas",
        usSize: "5",
        vnSize: "38",
        sex: "female"
    },
    {
        id: 12,
        brand: "Adidas",
        usSize: "5-",
        vnSize: "38 2/3",
        sex: "female"
    },
    {
        id: 13,
        brand: "LiNing",
        usSize: "6.5",
        vnSize: "39",
        sex: "male"
    },
    {
        id: 14,
        brand: "LiNing",
        usSize: "7",
        vnSize: "39 2/3",
        sex: "male"
    },
    {
        id: 15,
        brand: "LiNing",
        usSize: "7.5",
        vnSize: "40 1/3",
        sex: "male"
    },
    {
        id: 16,
        brand: "LiNing",
        usSize: "8",
        vnSize: "41",
        sex: "male"
    },
    {
        id: 17,
        brand: "LiNing",
        usSize: "8.5",
        vnSize: "41 2/3",
        sex: "male"
    },
    {
        id: 18,
        brand: "LiNing",
        usSize: "9",
        vnSize: "42 1/3",
        sex: "male"
    },
    {
        id: 19,
        brand: "LiNing",
        usSize: "9.5",
        vnSize: "43",
        sex: "male"
    },
    {
        id: 20,
        brand: "LiNing",
        usSize: "6",
        vnSize: "36 1/3",
        sex: "female"
    },
    {
        id: 21,
        brand: "LiNing",
        usSize: "6.5",
        vnSize: "37",
        sex: "female"
    },
    {
        id: 22,
        brand: "LiNing",
        usSize: "7",
        vnSize: "37 2/3",
        sex: "female"
    },
    {
        id: 23,
        brand: "LiNing",
        usSize: "7.5",
        vnSize: "38 1/3",
        sex: "female"
    },
    {
        id: 24,
        brand: "LiNing",
        usSize: "8",
        vnSize: "39",
        sex: "female"
    },
]

export default function SizeShoesScreen() {
    const [usSize, setUsSize] = useState('');
    const [vnSize, setVnSize] = useState('');
    const [sex, setSex] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const sexList = [
        {
            title: 'Nam',
            value: 'male'
        },
        {
            title: 'Nữ',
            value: 'female'
        },
    ]

    const handleSearch = () => {
        // Tìm kiếm dữ liệu dựa trên giá trị usSize và sex
        const filteredResults = items.filter(item => {
            const isUsSizeMatch = item.usSize === usSize;
            const isSexMatch = item.sex === sex;
            const isVnSizeMatch = item.vnSize.substring(0, 2) === vnSize.substring(0, 2);
            const isSizeMatch = isUsSizeMatch || isVnSizeMatch;
            const isSearchMatch = isSexMatch && isSizeMatch;
            return isSearchMatch;
        });
        setSearchResults(filteredResults);
    };

    return (
        <View style={AppStyle.SizeShoesStyle.container}>
            <View style={AppStyle.SizeShoesStyle.TitleView}>
                <Text style={AppStyle.SizeShoesStyle.TitleStyle}>
                    Tìm Cỡ Giày
                </Text>
            </View>

            <View style={AppStyle.SizeShoesStyle.searchSizeView}>
                <View style={AppStyle.SizeShoesStyle.searchSizeFlexView}>
                    <View style={AppStyle.SizeShoesStyle.searchInput}>
                        <Text style={AppStyle.SizeShoesStyle.searchInputTitle}>
                            Cỡ giày US
                        </Text>
                        <TextInput
                            placeholder="Cỡ giày Us"
                            style={AppStyle.SizeShoesStyle.searchTextInput}
                            onChangeText={(text) => setUsSize(text)}
                        />
                        <Text style={AppStyle.SizeShoesStyle.searchInputTitle}>
                            Cỡ giày VN
                        </Text>
                        <TextInput
                            placeholder="Cỡ giày VN"
                            style={AppStyle.SizeShoesStyle.searchTextInput}
                            onChangeText={(text) => setVnSize(text)}
                        />
                    </View>
                    <View 
                    style={AppStyle.SizeShoesStyle.sexButtomView}
                    >
                        {
                            sexList.map(cat => {
                                let bgColor = "#FFF"
                                if (cat.value == sex) bgColor = "#87CEFA"
                                return (
                                    <TouchableOpacity
                                        onPress={() => setSex(cat.value)}
                                        style={{ ...AppStyle.SizeShoesStyle.sexButtomStyle1, backgroundColor: bgColor }}
                                        key={cat.value}
                                    >

                                        <Text style={AppStyle.SizeShoesStyle.sexButtomText}>
                                            {cat.title}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <View style={AppStyle.SizeShoesStyle.searchButtom}>
                        <TouchableOpacity
                            style={AppStyle.SizeShoesStyle.searchButtomStyle}
                            onPress={handleSearch}
                        >
                            <Text
                                style={AppStyle.SizeShoesStyle.searchButtomTextStyle}
                            >
                                Tìm nhanh
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.SizeShoesStyle.searchShowData}>
                        <View style={AppStyle.SizeShoesStyle.searchShowDataFlex}>
                            <FlatList
                                data={searchResults}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View style={{
                                        backgroundColor:"#F0FFF0",
                                        margin: 5,
                                        borderRadius: 10,
                                        flexDirection: 'row'
                                    }}>
                                        <View
                                        style = {{
                                            flex :1
                                        }}
                                        >
                                        <Text style={[AppStyle.SizeShoesStyle.searchShowDataText, { color: "blue" }]}>
                                            Cỡ giày US: {item.usSize}
                                        </Text>
                                        <Text style={[AppStyle.SizeShoesStyle.searchShowDataText, { color: "red" }]}>
                                            Cỡ giày VN: {item.vnSize}
                                        </Text>
                                        </View>

                                        <View
                                        style = {{
                                            flex :1
                                        }}
                                        >
                                        <Text style={[AppStyle.SizeShoesStyle.searchShowDataText, { color: item.sex === 'male' ? '#006400' : '#FF00CC',  fontSize: 17 }]}>
                                            {item.sex === 'male' ? 'Nam' : 'Nữ'}
                                        </Text>
                                        <Text style={[AppStyle.SizeShoesStyle.searchShowDataText, { color: item.brand === 'Adidas' ? 'black' : '#708090', fontSize: 17 }]}>
                                            {item.brand}
                                        </Text>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </View>


        </View>
    );
}
