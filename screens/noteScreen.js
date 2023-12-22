import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import Swipeout from 'react-native-swipeout';
import AppStyle from '../theme';

export default function NoteScreen() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const addNote = () => {
        if (newNote.trim() !== '') {
            setNotes([...notes, { id: Date.now().toString(), text: newNote }]);
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

            <View style = {AppStyle.NoteScreenStyle.TitleView}/>

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
                <Text style={{ color: 'white', fontSize : 23, fontWeight : "600" }}>Ghi lại</Text>
            </TouchableOpacity>

            <View  style={AppStyle.NoteScreenStyle.showDataView} >
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
                                backgroundColor: index % 2 === 0 ? '#708090' : '#4CAF50',
                                padding: 8,
                                borderRadius: 5,
                                margin:3
                            }}>
                                <Text style={{ flex: 1, fontSize: 18, color: 'white' }}>{item.text}</Text>
                            </View>
                        </Swipeout>
                    )}
                />
            </View>
        </View>
    );
}
