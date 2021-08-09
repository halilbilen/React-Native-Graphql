import React from 'react'
import styles from '../styles/index'
import { View, ActivityIndicator } from "react-native";
export const Loading = () => {

    return (
        <View style={styles.loading}>
            <ActivityIndicator size={"large"} color="white" />
        </View>
    )
}