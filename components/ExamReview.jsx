import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, FlatList } from "react-native";

const styles = StyleSheet.create({
  container: {padding: 10},
  image: {width:200, height:200, borderRadius:100},
  input: {padding:5, height:36, fontSize:14, marginTop:5, marginBottom:10, borderWidth:1},
  item: {padding:2, fontSize:14, height:30}
})

export default function Exam() {
  const [fruits, setFruits] = useState([]);
  const [text, setText] = useState('');
  const handleSubmit = () => {
    if (text.trim().length !== 0)
      setFruits([...fruits, text.trim()]);
    setText('');
    setTimeout(() => inputRef.current.focus(), 10);
  }
  const inputRef = useRef(null);

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{uri:'https://picsum.photos/200/200'}}
      />
      <TextInput
        style={styles.input}
        placeholder="과일 이름을 입력하세요."
        onChangeText={newText => setText(newText)}
        onSubmitEditing={handleSubmit}
        value={text}
        ref={inputRef}
      />
      <FlatList 
        data={fruits}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
}