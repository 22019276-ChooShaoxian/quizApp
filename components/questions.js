import { StatusBar } from 'expo-status-bar';
import {Image , Text, View, Button, TextInput, ToastAndroid, Alert,StyleSheet, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';

const answerList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
 function Quiz  ({img , question, answers, index})  {
    const [ans, setAns] = useState('');
return (
        <View style={styles.QuestionContainer}>
        <Text style={styles.QuestionText}>
            {question}
        </Text>
        <Image source = {img}  style={{width: '100%', height: 300,flex: 1}} />
        <RNPickerSelect
            items=
            {answers}
         onValueChange={(value) => {answerList[index]= value }}/>
        </View>
            );
            };

const checkAnswer = () => {
    let score = 0;
    for (let i = 0; i < 17; i++) {
        if(answerList[i]==1){
            score++;
        }
    }
    if (score<17) {
        Alert.alert("You failed! Score:" + score + "/3")
    }
    else{
        Alert.alert("Amazing, you're a tank nerd! Score:" + score + "/3")
    }
}


class questionList extends  React.Component {

    render(){

        return (
            <View style={styles.ScrollStyle}>
            <ScrollView>
                <Text style={styles.Header}>THE ULTIMATE M60 QUIZ</Text>
                <Quiz img = {require("./img/1200px-M60_Patton_Tank_Fort_Lewis_Military_Museum.jpg")}
                      question = {"Which tank is this?"}
                      answers= {[
                                { label: 'M60', value: '1' },
                                { label: 'M1 Abrams', value: '0' },
                                { label: 'T72', value: '0' },
                                { label: 'M48', value: '0' }
                                                                ]}
                        index={0}
                                            />
                <Quiz img = {require("./img/M60-2000-Main-Battle-Tank-Image-6.jpg")}
                      question = {"Which tank is this?"}
                      answers= {[
                          { label: 'M48', value: '0' },
                          { label: 'M1 Abrams', value: '0' },
                          { label: 'M4 Sherman', value: '0' },
                          { label: 'M60', value: '1' }
                      ]}
                      index={1}
                />
                <Quiz img = {require("./img/20240709_021040.jpg")}
                      question = {"Which country is this tank from?"}
                      answers= {[
                          { label: 'M60 from Turkey', value: '0' },
                          { label: 'M60 from Japan', value: '0' },
                          { label: 'M60 from America', value: '0' },
                          { label: 'M60 upgrade from Iran', value: '1' }
                      ]}
                      index={2}
                />
                <Quiz img = {require("./img/1cef78d7780898a3bf44ad732299dee3.jpg")}
                      question = {"Which tank is this?"}
                      answers= {[
                          { label: 'Challenger 2', value: '0' },
                          { label: 'Leopard 2A4', value: '0' },
                          { label: 'M60', value: '1' },
                          { label: 'Centurion Mk5', value: '0' }
                      ]}
                      index={3}
                />
                <Quiz img = {require("./img/26cc44b9eb1618bd1dc834af5f7be74f.jpg")}
                      question = {"What tank is this?"}
                      answers= {[
                          { label: 'M48 Patton', value: '0' },
                          { label: 'M60', value: '1' },
                          { label: 'Type 10', value: '0' },
                          { label: 'T55', value: '0' }
                      ]}
                      index={4}
                />
                <Quiz img = {require("./img/1310354852_olifant_mk1b_l5.jpg")}
                      question = {"What tank is this?"}
                      answers= {[
                          { label: 'Leopard 2A7', value: '0' },
                          { label: 'Ariete', value: '0' },
                          { label: 'M1A1 Abrams', value: '0' },
                          { label: 'M60', value: '1' }
                      ]}
                      index={5}
                />
                <Quiz img = {require("./img/1383019630_m60_tank_modernization-8.webp")}
                      question = {"What tank is this?"}
                      answers= {[
                          { label: 'M60', value: '1' },
                          { label: 'OBT-2', value: '0' },
                          { label: 'M32 GL', value: '0' },
                          { label: 'T26 Pershing', value: '0' }
                      ]}
                      index={6}
                />
                <Quiz img = {require("./img/battle_tank_m60.jpg")}
                      question = {"Which country is this tank from?"}
                      answers= {[
                          { label: 'M60 from Turkey', value: '1' },
                          { label: 'M60 from Japan', value: '0' },
                          { label: 'M60 from America', value: '0' },
                          { label: 'M60 upgrade from Iraq', value: '0' }
                      ]}
                      index={7}
                />
                <Quiz img = {require("./img/british-marksman-system-mounted-on-an-m60-hull-v0-047t7tenam7d1.webp")}
                      question = {"Is this a tank?"}
                      answers= {[
                          { label: 'Yes', value: '0' },
                          { label: 'No', value: '1' }

                      ]}
                      index={8}
                />
                <Quiz img = {require("./img/CJ2K8G7imVTmTbUkqH1tiLcbe89yHzVhGNy6ypq1y98.webp")}
                      question = {"What is this tank?"}
                      answers= {[
                          { label: 'M60', value: '1' },
                          { label: 'M41', value: '0' },
                          { label: 'MT-LB', value: '0' },
                          { label: 'M249', value: '0' }
                      ]}
                      index={9}
                />
                <Quiz img = {require("./img/fg_1957833-idr-2902.jpg")}
                      question = {"What is this tank?"}
                      answers= {[
                          { label: 'M48', value: '0' },
                          { label: 'T34', value: '0' },
                          { label: 'Stryker', value: '0' },
                          { label: 'M60', value: '1' }
                      ]}
                      index={10}
                />
                <Quiz img = {require("./img/hzpxi1379n461.jpg")}
                      question = {"Which country is this tank from?"}
                      answers= {[
                          { label: 'M60 from Turkey', value: '0' },
                          { label: 'M60 from Ukraine', value: '0' },
                          { label: 'M60 from America', value: '0' },
                          { label: 'M60 from Australia', value: '1' }
                      ]}
                      index={11}
                />
                <Quiz img = {require("./img/images.jpg")}
                      question = {"What tank is this??"}
                      answers= {[
                          { label: 'Leopard 1', value: '0' },
                          { label: 'M60', value: '1' },
                          { label: 'T80', value: '0' },
                          { label: 'Type 90', value: '0' }
                      ]}
                      index={12}
                />
                <Quiz img = {require("./img/Iran_showcases_modernized_US-made_M60A1_tank_Soleiman-402_at_Ground_Forces_event_925_001.jpg")}
                      question = {"Which tank is this?"}
                      answers= {[
                          { label: 'M60', value: '1' },
                          { label: 'T90M', value: '0' },
                          { label: 'M1A2 Abrams', value: '0' },
                          { label: 'M22', value: '0' }
                      ]}
                      index={13}
                />
                <Quiz img = {require("./img/iz93km0273l41.webp")}
                      question = {"Which country is this tank from?"}
                      answers= {[
                          { label: 'M60 from Turkey', value: '0' },
                          { label: 'M60 from Japan', value: '0' },
                          { label: 'M60 from America', value: '1' },
                          { label: 'M60 upgrade from Iraq', value: '0' }
                      ]}
                      index={14}
                />
                <Quiz img = {require("./img/Teledyne_Continental_High_Performance_M60_Tank_prototype.jpg")}
                      question = {"Is this a main battle tank?"}
                      answers= {[
                          { label: 'No', value: '0' },
                          { label: 'Yes', value: '1' }
                      ]}
                      index={15}
                />
                <Quiz img = {require("./img/M60T_Modernization_Project-cutaway.jpg")}
                      question = {"What tank is this?"}
                      answers= {[
                          { label: 'F35', value: '0' },
                          { label: 'F22', value: '0' },
                          { label: 'M60', value: '1' },
                          { label: 'F16', value: '0' }
                      ]}
                      index={16}
                      />
                <Button title={"submit"} onPress={checkAnswer}/>
            </ScrollView>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    Header:{
        marginTop:30,
        fontWeight:"bold",
        backgroundColor:'#454B1B',
        textAlign:'center',
        fontSize:30
    },
    ScrollStyle:{
        backgroundColor:"#A89881",
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center'
    },
    QuestionContainer:{
        borderWidth:3,
        borderColor:'black',
        alignItems:'center',
    },
    ImageContainer:{
        width: '100%',
        height: 300,
        flex: 1,
        borderColor:'black',
        borderWidth:4,
    },
    QuestionText:{
        fontSize:20,
        backgroundColor:'#964B00',
        width:"100%",
        textAlign:'center',
    },


})


export default questionList;


