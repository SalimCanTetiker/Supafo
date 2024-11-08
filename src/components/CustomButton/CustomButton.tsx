import { Pressable, Text } from 'react-native'

import styles from './CustomButton.style'

const CustomButton = ({title, onPress, theme = "primary"}) => {
  return (
    <Pressable onPress={onPress} style={styles[theme].container}>
        <Text style={styles[theme].text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton