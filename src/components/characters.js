import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles/index'

export function Characters({ item }) {
    return (
        <View style={styles.itemContainer}>

            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemBottomContainer}>
                <Text allowFontScaling={false} style={[styles.itemText, { position: "absolute", right: 16 }]}>#id: {item.id}</Text>
                <Text allowFontScaling={false} style={[styles.itemText, { marginTop: 35 }]}>Name: <Text allowFontScaling={false} style={[styles.itemText, { color: "#C4C4C4" }]}>{item.name}</Text> </Text>
                <Text allowFontScaling={false} style={styles.itemText}>Location: <Text allowFontScaling={false} style={[styles.itemText, { color: "#C4C4C4" }]} >{item.location.name}</Text> </Text>
            </View>
        </View>
    )
}
