import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import AppStyle from '../theme';
import GoBackButtomView from '../component/GoBackButtomView';

export default function CalculateScreen() {
    const [amount, setAmount] = useState('');
    const [displayedAmount, setDisplayedAmount] = useState('');
    const [percentage, setPercentage] = useState('');
    const [results, setResults] = useState([]);
    const flatListRef = useRef(null);

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const handleAmountChange = (text) => {
        setAmount(text);
        setDisplayedAmount(formatNumber(text));
    };

    const handleIncrease = () => {
        if (amount && percentage) {
            const numericAmount = parseFloat(amount.replace(/,/g, ''));
            const numericPercentage = parseFloat(percentage.replace('%', ''));

            if (!isNaN(numericAmount) && !isNaN(numericPercentage)) {
                const increaseAmount = (numericAmount * numericPercentage) / 100;
                const newAmount = numericAmount + increaseAmount;
                const formattedResult = formatNumber(newAmount);
                setResultAndHistory(formattedResult);
            }
        }

        Keyboard.dismiss();
    };

    const handleDecrease = () => {
        if (amount && percentage) {
            const numericAmount = parseFloat(amount.replace(/,/g, ''));
            const numericPercentage = parseFloat(percentage.replace('%', ''));

            if (!isNaN(numericAmount) && !isNaN(numericPercentage)) {
                const decreaseAmount = (numericAmount * numericPercentage) / 100;
                const newAmount = numericAmount - decreaseAmount;
                const formattedResult = formatNumber(newAmount);
                setResultAndHistory(formattedResult);
            }
        }

        Keyboard.dismiss();
    };

    const setResultAndHistory = (formattedResult) => {
        setResults((prevResults) => [formattedResult, ...prevResults.slice(0, 2)]);
        setAmount('');
        setPercentage('');
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    };

    const clearInput = () => {
        setAmount('');
        setPercentage('');
    };

    const renderResultItem = ({ item }) => (
        <Text style={AppStyle.HomeScreenStyle.historyItem}>Sản phẩm trước: {item} VND</Text>
    );

    return (
        <View style={AppStyle.HomeScreenStyle.container}>
            
            <View
                style={{
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        paddingTop : 50,
                        fontSize : 30,
                        fontWeight : "600",
                        color : "#6495ED"
                    }}
                >
                    Giảm giá sản phẩm
                </Text>
            </View>
            <Text style={AppStyle.HomeScreenStyle.titleStyle}>Giá gốc sản phẩm</Text>
            <View style={AppStyle.HomeScreenStyle.inputContainer}>
                <TextInput
                    placeholder="20.000.000"
                    style={AppStyle.HomeScreenStyle.textInput}
                    value={amount}
                    onChangeText={handleAmountChange}
                    keyboardType="numeric"
                />
                <Text style={AppStyle.HomeScreenStyle.historyItem}>Giá vừa nhập: {displayedAmount} VND</Text>
                {amount.length > 0 && (
                    <TouchableOpacity
                        style={AppStyle.HomeScreenStyle.clearButton}
                        onPress={clearInput}
                    >
                        <View style={AppStyle.HomeScreenStyle.clearButtonText}>
                            <Text style={AppStyle.HomeScreenStyle.clearButtonTextStyle}>
                                Xoá
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>

            <Text style={AppStyle.HomeScreenStyle.titleStyle}>Phần trăm</Text>
            <TextInput
                placeholder="20%"
                style={AppStyle.HomeScreenStyle.textInput}
                value={percentage}
                onChangeText={(text) => setPercentage(text)}
                keyboardType="numeric"
            />

            <Text style={AppStyle.HomeScreenStyle.titleAmountStyle}>
                Sau giảm giá:  {results.length > 0 ? results[0] : formatNumber(amount)} VND
            </Text>

            <FlatList
                ref={flatListRef}
                data={results}
                renderItem={renderResultItem}
                keyExtractor={(item, index) => index.toString()}
                style={AppStyle.HomeScreenStyle.historyContainer}
            />

            <View style={AppStyle.HomeScreenStyle.buttomView}>
                <TouchableOpacity
                    style={AppStyle.HomeScreenStyle.GiamButtomStyle}
                    onPress={handleIncrease}
                >
                    <Text style={AppStyle.HomeScreenStyle.buttomTextStyle}>Tăng Giá</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={AppStyle.HomeScreenStyle.TangButtomStyle}
                    onPress={handleDecrease}
                >
                    <Text style={AppStyle.HomeScreenStyle.buttomTextStyle}>Giảm Giá</Text>
                </TouchableOpacity>
            </View>
            <GoBackButtomView/>
        </View>
    );
}
