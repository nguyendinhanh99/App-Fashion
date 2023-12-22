import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    FlatList,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Button,
    ScrollView
} from 'react-native';
import AppStyle from '../theme';
import FashionDatas from '../config/FashionData';

export default function AIFashionScreen() {
    return (
        <ScrollView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={AppStyle.FashionScreenStyle.container}>
            <View style={AppStyle.FashionScreenStyle.inner}>
                <Text style={AppStyle.FashionScreenStyle.header}>
                    Fashion AI
                </Text>

                <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                    Chiều cao
                </Text>
                <TextInput
                    placeholder="Cỡ giày VN"
                    style={AppStyle.FashionScreenStyle.textInput}
                    onChangeText={(text) => setVnSize(text)}
                />
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
                        onChangeText={(number) => setVnSize(number)}
                    />
                    <TextInput
                        placeholder="63"
                        style={AppStyle.FashionScreenStyle.textInputShort}
                        onChangeText={(number) => setVnSize(number)}
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
                        onChangeText={(number) => setVnSize(number)}
                    />
                    <TextInput
                        placeholder="90 - 60 - 90"
                        style={AppStyle.FashionScreenStyle.textInputShort}
                        onChangeText={(number) => setVnSize(number)}
                    />
                </View>

                <View style = {{
                    
                }}>

                </View>

                <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                    Cỡ giày VN
                </Text>
                <TextInput
                    placeholder="Cỡ giày VN"
                    style={AppStyle.FashionScreenStyle.textInput}
                    onChangeText={(text) => setVnSize(text)}
                />
                <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                    Cỡ giày VN
                </Text>
                <TextInput
                    placeholder="Cỡ giày VN"
                    style={AppStyle.FashionScreenStyle.textInput}
                    onChangeText={(text) => setVnSize(text)}
                />
                <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                    Cỡ giày VN
                </Text>
                <TextInput
                    placeholder="Cỡ giày VN"
                    style={AppStyle.FashionScreenStyle.textInput}
                    onChangeText={(text) => setVnSize(text)}
                />
                <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                    Cỡ giày VN
                </Text>
                <TextInput
                    placeholder="Cỡ giày VN"
                    style={AppStyle.FashionScreenStyle.textInput}
                    onChangeText={(text) => setVnSize(text)}
                />
                <Text style={AppStyle.FashionScreenStyle.inputTitle}>
                    Cỡ giày VN
                </Text>
                <TextInput
                    placeholder="Cỡ giày VN"
                    style={AppStyle.FashionScreenStyle.textInput}
                    onChangeText={(text) => setVnSize(text)}
                />
                <View style={styles.btnContainer}>
                    <Button title="Tìm trang phục" onPress={() => null} />
                </View>
            </View>

            <View>
                <Text>
                    render
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
