import React from "react";
import { View, StyleSheet, FlatList} from "react-native";
import { Text } from "react-native";

const styles = StyleSheet.create({
  container: {flex:1},
  item:{padding:5, fontSize:16, height:40}
})

export default function FlatListBasic() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, padding:15, fontWeight:"bold" }}>내가 좋아하는 과일</Text>
      <FlatList
        data={[
          {key:"Apple"}, {key:"Banana"}, {Key:"Cherry"}, {key:"Orange"}, {key:"Mango"},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.Key}</Text>} 

      />
    </View>
  );
};

