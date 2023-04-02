import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default Form = () =>{
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha a altura e peso!");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular IMC");

    const imcCalculator = () =>{
       return setImc((weight/(height * height)).toFixed(2))
       
    }

    function validationImc(){
        if (weight != null && height != null){
            imcCalculator() 
            setHeight(null)
            setWeight(null)
            setMessageImc("SEU IMC É IGUAL A: ")
            setTextButton("Calcular novamente")
            return
        }    
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
        
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.80"
                    keyboardType="numeric"
                />
                
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 80.365"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        validationImc()

                    }}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}