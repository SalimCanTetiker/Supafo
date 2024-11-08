import { Image, View } from 'react-native'

import CustomButton from '../../components/CustomButton/CustomButton'

const IntroPage = () => {
  return (
    <View>
      <Image
      source={require('../../assets/supafo_logo.png')}
      style={{width: 190, height: 251, top: 200, left: 86}}
      />
      <View style={{marginTop: 300}}>
      <CustomButton title={"Giriş Yap"} onPress={null} />
      <CustomButton title={"Kayıt Ol"} theme={"secondary"} onPress={null} />
      </View>
    </View>
  )
}

export default IntroPage