import React from "react"
import { View, 
        StyleSheet, 
        Text, 
    } from 'react-native'

    const styles = StyleSheet.create({
        display: {
            flex: 1,
            justifyContent: 'center',
            // backgroundColor: 'rgba(0,0,0,0.6)', //Mudar cor do fundo do Display
            alignItems: 'flex-end'
        },
        displayValue: {
            fontSize: 40,
            color: '#fff',
            textAlign: "right",
            marginRight: 20,
            marginBottom: 10
        }
    })

    export default props => 
        <View style={styles.display}>
            <Text style={styles.displayValue}
            numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    