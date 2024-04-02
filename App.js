
import { StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/state';
import PizzaTranslator from './components/PizzaTranslator';
import FlatListBasic from './components/FlatListBasic';
import SectionListBasic from './components/SectionListBasic';
import FetchExample from './components/FetchExample';
import Test from './components/Test';
import Exam from './components/Exam';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

{/* 시험 라인 시작 */}
const picture = {
  uri: 'https://picsum.photos/200/200',
  width: 200, 
  height:200,
  
};
{/* 시험 라인 시작 */}

export default function App() {
  return (
    <ScrollView style={{paddingTop:24}}>
      
      {/* 시험 라인 시작 */}      
    <Image style={{borderRadius: 200}} source={picture}/>  
    <Exam/>
      {/* 시험 라인 끝 */}

      <Image source={logo}/>
      <Test/>
      <Image source={logo}/>
      <FetchExample/>
      <Image source={logo}/>
      <SectionListBasic/>
      <Image source={logo}/>
      <FlatListBasic/>
      <Image source={logo}/>
      <PizzaTranslator/>
      <State name="Run Tum Tugger"/>
      <Image source={logo}/>
      <Cat name="Maru" num="1"/>
      <Cat name="Run Tum Tugger" num="2"/>
      <Image source={logo}/>
      <HelloWorld/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
