import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';

export default class Regiões extends Component{
    constructor(props) {
        super(props);
        this.state = {
            casos: [
            {
                Nome: 'Sul',
                Infectados: '1.140',
                Recuperados: '871',
                Mortos: '69'
            },
            {
                Nome: 'Sudoeste',
                Infectados: '20.004',
                Recuperados: '17.887',
                Mortos: '1.167'
            },
            {
                Nome: 'Norte',
                Infectados: '3.635',
                Recuperados: '2.348',
                Mortos: '287'
            },
            {
                Nome: 'Nordeste',
                Infectados: '2.081',
                Recuperados: '1.011',
                Mortos: '70'
            },
            {
                Nome: 'Centro-Oeste',
                Infectados: '1.113',
                Recuperados: '887',
                Mortos: '26'
            }
            ]
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.centralizador}>
                    <Text style={{ fontSize: 24 }}>COVID-19</Text>

                    <Image style={styles.imagem} source={{
                        uri: 'http://www.clker.com/cliparts/7/r/x/U/o/l/mapa-brasil-vermelho.svg.med.png',
                    }} />

                    <Text style={{ fontSize: 18 }}>Números</Text>
                </View>

                <View>
                    <FlatList data={this.state.casos} renderItem={({ item }) =>
                        <TouchableOpacity style={styles.item}>
                            <Text>Região: {item.Nome}</Text>
                            <Text>Infectados: {item.Infectados}</Text>
                            <Text>Recuperados: {item.Recuperados}</Text>
                            <Text>Mortos: {item.Mortos}</Text>
                        </TouchableOpacity>
                    }
                    />

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    centralizador: {
        alignItems: "center",
    },
    imagem: {
        width: 350,
        height: 350
    },
    item: {
        backgroundColor: '#e60000',
        padding: 20,
        margin: 10
    }
});
