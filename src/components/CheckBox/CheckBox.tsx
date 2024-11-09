import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './CheckBox.style';

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.checkboxButton, { backgroundColor: isChecked ? '#66ae7c' : '#ffffff' }]}
                onPress={() => setIsChecked(!isChecked)}
            >
                {isChecked && <Icon name="check" size={24} color="#ffffff" />}
            </Pressable>
        </View>
    );
}

export default CheckBox;
