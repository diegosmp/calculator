import React from 'react'
import { StyleSheet,
         Dimensions,
         Text,
         TouchableHighlight 
        } from 'react-native'

        const styles = StyleSheet.create({
            button: {
                fontSize: 25,
                height: Math.floor((Dimensions.get('window').width / 4) - 10),
                width: Math.floor(Dimensions.get('window').width / 4 - 10),
                borderRadius: Math.floor(Dimensions.get('window').width / 4),
                margin: 5,
                padding: 25,
                backgroundColor: '#333333',
                color: '#fff',
                textAlign: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            },
            operationButton: {
                color: '#fff',
                backgroundColor: '#f09a36',
            },
            buttonDouble: {
                width: Math.floor((Dimensions.get('window').width / 4) * 2) - 10
            },
            buttonSecondary: {
                backgroundColor: '#a6a6a6'
            },
            textSecondary: {
                color: '#060606'
            }
        })

        export default props => {
            const stylesButton = [styles.button]
            if (props.double) stylesButton.push(styles.buttonDouble)
            if (props.triple) stylesButton.push(styles.buttonTriple)
            if (props.operation) stylesButton.push(styles.operationButton)
            if (props.operation2) stylesButton.push(styles.buttonSecondary)
            if (props.textSecond) stylesButton.push(styles.textSecondary)

            return (
                <TouchableHighlight onPress={() => props.onClick(props.label)}>
                    <Text style={stylesButton}> {props.label}</Text>
                </TouchableHighlight>
            )
        }