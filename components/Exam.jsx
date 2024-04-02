import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10},
  item: {padding: 5, fontSize: 16, height: 40}
});

export default function Exam() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([
    {key: '사과'},
    {key: '복숭아'},
    {key: '수박'}
  ]);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const addItemToList = () => {
    if (inputText.trim() !== "") {
      setData([...data, {key: inputText}]);
      setInputText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10}}
        value={inputText}
        onChangeText={handleInputChange}
        placeholder="새로운 아이템 입력"
        onSubmitEditing={addItemToList}
      />

      <FlatList 
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}
