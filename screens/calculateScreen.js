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
        <Text style={AppStyle.CalculateScreenStyle.historyItem}>Sản phẩm trước: {item} VND</Text>
    );

    return (
        <View style={AppStyle.CalculateScreenStyle.container}>
            
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
            <Text style={AppStyle.CalculateScreenStyle.titleStyle}>Giá gốc sản phẩm</Text>
            <View style={AppStyle.CalculateScreenStyle.inputContainer}>
                <TextInput
                    placeholder="20.000.000"
                    style={AppStyle.CalculateScreenStyle.textInput}
                    value={amount}
                    onChangeText={handleAmountChange}
                    keyboardType="numeric"
                />
                <Text style={AppStyle.CalculateScreenStyle.historyItem}>Giá vừa nhập: {displayedAmount} VND</Text>
                {amount.length > 0 && (
                    <TouchableOpacity
                        style={AppStyle.CalculateScreenStyle.clearButton}
                        onPress={clearInput}
                    >
                        <View style={AppStyle.CalculateScreenStyle.clearButtonText}>
                            <Text style={AppStyle.CalculateScreenStyle.clearButtonTextStyle}>
                                Xoá
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>

            <Text style={AppStyle.CalculateScreenStyle.titleStyle}>Phần trăm</Text>
            <TextInput
                placeholder="20%"
                style={AppStyle.CalculateScreenStyle.textInput}
                value={percentage}
                onChangeText={(text) => setPercentage(text)}
                keyboardType="numeric"
            />

            <Text style={AppStyle.CalculateScreenStyle.titleAmountStyle}>
                Sau giảm giá:  {results.length > 0 ? results[0] : formatNumber(amount)} VND
            </Text>

            <FlatList
                ref={flatListRef}
                data={results}
                renderItem={renderResultItem}
                keyExtractor={(item, index) => index.toString()}
                style={AppStyle.CalculateScreenStyle.historyContainer}
            />

            <View style={AppStyle.CalculateScreenStyle.buttomView}>
                <TouchableOpacity
                    style={AppStyle.CalculateScreenStyle.GiamButtomStyle}
                    onPress={handleIncrease}
                >
                    <Text style={AppStyle.CalculateScreenStyle.buttomTextStyle}>Tăng Giá</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={AppStyle.CalculateScreenStyle.TangButtomStyle}
                    onPress={handleDecrease}
                >
                    <Text style={AppStyle.CalculateScreenStyle.buttomTextStyle}>Giảm Giá</Text>
                </TouchableOpacity>
            </View>
            <GoBackButtomView/>
        </View>
    );
}
