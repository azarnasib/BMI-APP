import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const imageUrl = { uri: "https://ptandme.com/wp-content/uploads/2015/04/ThinkstockPhotos-464388043.jpg" };

  function _calculateBMI() {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2)); // Update the state with BMI value
  }

  return (
    <View style={{
      backgroundColor: 'white',
      flex: 1,
      paddingTop: '10%',
      justifyContent: 'center'
    }}>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
      }}>
        BMI CALCULATOR APP
      </Text>

      <Text style={{
        fontSize: 17,
        fontWeight: '300',
        color: 'black',
        textAlign: 'center',
        marginTop: 5
      }}>Calculate your BMI Easily!</Text>

      <View>
        <TextInput
          value={height}
          onChangeText={(value) => setHeight(value)}
          placeholder="Height (CM)"
          placeholderTextColor="white"
          style={styles.inputStyle}
          keyboardType="numeric" // Ensure numeric input
        />

        <TextInput
          value={weight}
          onChangeText={(value) => setWeight(value)}
          placeholder="Weight (KG)" // Updated placeholder
          placeholderTextColor="white"
          style={styles.inputStyle}
          keyboardType="numeric" // Ensure numeric input
        />
        <Image
          source={imageUrl}
          style={{
            width: 300,
            height: 200,
            resizeMode: "stretch",
            alignSelf: 'center',
            marginVertical: 20
          }}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={_calculateBMI}>
          <Text style={styles.buttonTextStyle}>Calculate</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
          Your BMI Value is:
        </Text>
        <Text style={{ fontSize: 25, fontWeight: '900', textAlign: 'center' }}>{bmi}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    width: "85%",
    height: 40,
    borderWidth: 0.7,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 100,
    paddingLeft: 10, // Changed padding for better alignment
    backgroundColor: 'blue'
  },
  buttonStyle: {
    width: '85%',
    height: 55,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  }
})

export default App;