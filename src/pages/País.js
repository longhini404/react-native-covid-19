import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';

export default class País extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            casos: [
            {
                Nome: 'Brasil',
                Infectados: '60.311',
                Recuperados: '29.160',
                Mortos: '4.117'
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
                        uri: 'https://img2.gratispng.com/20181121/ec/kisspng-clip-art-character-advertising-technology-system-brazil-map-clip-art-clipart-best-5bf4f9fbd96ce5.7633300715427814358906.jpg',
                    }} />

                    <Text style={{ fontSize: 18 }}>Números</Text>
                </View>

                <View>
                    <FlatList data={this.state.casos} renderItem={({ item }) =>
                        <TouchableOpacity style={styles.item}>
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
