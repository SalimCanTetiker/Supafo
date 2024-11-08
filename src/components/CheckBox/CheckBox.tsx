import React, { useState } from 'react';
import { View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './CheckBox.style';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.checkboxButton, { backgroundColor: isChecked ? '#ffffff' : '#fffff' }]}
        onPress={() => setIsChecked(!isChecked)}
      >
        {isChecked && <Icon name="check" size={24} color="#66ae7c" />}
      </Pressable>
      <Text style={styles.label}>{isChecked ? "Seçildi" : "Seçilmedi"}</Text>
    </View>
  );
}

export default CheckBox;
