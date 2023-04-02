import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default ResultImc = (props) =>{
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
            <Image
                source={require('../../../../assets/onda.png')}
                style={styles.imagem}
            />
        </View>
    )
}