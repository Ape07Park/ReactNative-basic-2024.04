import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator} from "react-native";
import { Text } from "react-native";

export default function FetchExample() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() =>  {
    fetch("https://reactnative.dev/movies.json") // 네트워크로 접속
    .then(res => res.json())
    .then(obj => {
      // console.log(obj);   ** Postman으로 확인할 것
      setData(obj.movies);
    })
    .catch(error => {console.error(error);}) // 혹시 에러나면 잡기 위해 
    .finally(setLoading(false)) // 로딩 종료
  }, []);



  return (
    <View style={{flex:1, padding:10}}> {/* 세로 방향으로 정렬 */}
      {isLoading ? (
        <ActivityIndicator/> 
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}

        />
      )

      }
    </View>
  );
};

