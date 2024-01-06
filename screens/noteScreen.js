import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import Swipeout from 'react-native-swipeout';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import thư viện mới
import AppStyle from '../theme';

export default function NoteScreen() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        // Load dữ liệu từ AsyncStorage khi màn hình được mở
        const loadNotes = async () => {
            try {
                const storedNotes = await AsyncStorage.getItem('@MyApp:notes');
                if (storedNotes !== null) {
                    setNotes(JSON.parse(storedNotes));
                }
            } catch (error) {
                console.error('Error loading notes:', error);
            }
        };

        loadNotes();
    }, []);

    useEffect(() => {
        // Lưu dữ liệu vào AsyncStorage mỗi khi notes thay đổi
        const saveNotes = async () => {
            try {
                await AsyncStorage.setItem('@MyApp:notes', JSON.stringify(notes));
            } catch (error) {
                console.error('Error saving notes:', error);
            }
        };

        saveNotes();
    }, [notes]);

    const addNote = () => {
        if (newNote.trim()) {
            setNotes([...notes, { id: uuid.v4(), text: newNote }]);
            setNewNote('');
            Keyboard.dismiss();
        }
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    const swipeoutBtns = (id) => [
        {
            text: 'Xóa',
            backgroundColor: 'red',
            onPress: () => deleteNote(id),
        },
    ];

    return (
        <View style={AppStyle.NoteScreenStyle.container}>

            <View style={AppStyle.NoteScreenStyle.TitleView} />

            <View style={AppStyle.NoteScreenStyle.inputView}>
                <TextInput
                    style={AppStyle.NoteScreenStyle.inputStyle}
                    multiline={true}
                    placeholder="Thêm ghi chú mới"
                    value={newNote}
                    onChangeText={(text) => setNewNote(text)}
                />
            </View>

            <TouchableOpacity
                style={AppStyle.NoteScreenStyle.buttomAddNote}
                onPress={addNote}
            >
                <Text style={{ color: 'white', fontSize: 23, fontWeight: '600' }}>Ghi lại</Text>
            </TouchableOpacity>

            <View style={AppStyle.NoteScreenStyle.showDataView}>
                <FlatList
                    data={notes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <Swipeout
                            right={swipeoutBtns(item.id)}
                            backgroundColor='transparent'
                            autoClose={true}
                            style={{ marginVertical: 2 }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: index % 2 === 0 ? '#fed6aa' : '#FFF0F5',
                                padding: 8,
                                borderRadius: 5,
                                margin: 3
                            }}>
                                <Text style={{ flex: 1, fontSize: 19, color: '#404040',padding:2, fontWeight: "500" }}>{item.text}</Text>
                            </View>
                        </Swipeout>
                    )}
                />
            </View>
        </View>
    );
}
