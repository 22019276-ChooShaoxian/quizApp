import {Text, View} from 'react-native';
import QuizView from './components/questions.js';
import React from 'react';



class exportable extends React.Component {
    render() {
        return (
            <View>
                <QuizView></QuizView>
            </View>);
    }
}


export default exportable;

