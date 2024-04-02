import React, { useState } from "react";
import { View, Button, Image} from "react-native";
import { Text } from "react-native";

export default function State({name}) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Image 
        source={require('../assets/img/cats.jpg')}
        style={{width: 300, height:200,  borderRadius: 20, padding: 10}}
        />
      <Text>
        I am {name}, and I am {isHungry ? "hungry" : "full"}
      </Text>
      <Button
      onPress={() => {setIsHungry(false);}} 
      disabled={!isHungry} 
      title={isHungry ? "please me some milk": "Thank you"}  
      />
    </View>
  );
};

