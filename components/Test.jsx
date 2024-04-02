import React, { useState } from "react";
import { View, Button} from "react-native";
import { Text } from "react-native";
// 버튼을 누르면 숫자가 1씩 증가. 5가 되면 버튼 비활성화 
// 
export default function Test() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false)
  
  const increase = () =>{
    let newCount = count + 1;
    setCount(newCount);
    if (newCount >= 5) {
      setDisabled(true);
    }
  };
  
  return (
    <View>
      
      <Text>
        count = {count}
      </Text>
      <Button
      onPress={increase} 
      /* 숫자 1개씩 증가시키고 disabled로 내려감 이건 반복문이 아님. count가 5되면 setDisabled로 상태 바꾸고 그것을 disabled={disabled}통해 전달 따라서 비활성화    */ 
      disabled={disabled}
      />
    </View>
  );
};

