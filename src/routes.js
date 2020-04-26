import React, {Component} from 'react';
import {SafeAreaView, Text} from "react-native";
import Icone from 'react-native-vector-icons/FontAwesome';

import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import País from './pages/País';
import Regiões from './pages/Regiões';


export default class Routes extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <AppTabNavigator />
            </SafeAreaView>
        );
    }
}


const FeedStack = createStackNavigator({
    Regiões:{
        screen: Regiões
    }
});

const AppTabNavigator = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Regiões: {
                screen: Regiões,
                navigationOptions: {
                    tabBarIcon: ({focused}) => {
                        return <Icone name="circle" size={25} color="#AAAAAA" />
                    }
                }
            },

            País: {
                screen: País,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        return <Icone name="circle" size={25} color="#AAAAAA" />
                    }
                }
            }

        }, {
            tabBarPosition: 'bottom',
            initialRouteName: 'Regiões',

            tabBarOptions:{
                showIcon: true,
                showLabel: false,
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                indicatorStyle:{
                    borderBottomColor: '#FAFAFA',
                    borderBottomWidth: 4,
                },
                labelStyle:{
                    textAlign: 'center'
                },
                style:{
                    backgroundColor: '#FAFAFA'
                }
            }
        }
    )
);