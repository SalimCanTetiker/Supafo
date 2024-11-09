import { Image, View, Text, Pressable } from 'react-native'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modalSlice'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButton/CustomButton'
import CheckBox from '../../components/CheckBox/CheckBox'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import CookieConsent from '../../components/CookieConsent/CookieConsent';

import styles from './IntroPage.style'

const IntroPage = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <CookieConsent/>
      <View style={styles.Image_container}>
        <Image
          source={require('../../assets/supafo_logo.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.Button_container}>
        <CustomButton title={"Giriş Yap"} onPress={() => navigation.navigate('Login')} />
        <CustomButton title={"Kayıt Ol"} theme={"secondary"} onPress={() => navigation.navigate('SignUp')} />
      </View>
      <View style={styles.CheckBox_container}>
        <View style={styles.first_checkbox}>
          <CheckBox />
          <Text style={styles.text}>Supafo’nun e-posta adresimi ve adımı gizlilik politikasına uygun şekilde saklamasına izin
            veriyorum.</Text>
        </View>
        <View style={styles.second_checkbox}>
          <CheckBox />
          <View style={{flexDirection: "row"}}>
            <Pressable onPress={() => dispatch(toggleModal())}>
              <Text style={styles.press_text}>Şartlar & Koşullar</Text>
            </Pressable>
            <Text style={styles.text}>ve</Text>
            <Pressable>
              <Text style={styles.press_text}>Gizlilik Politikasını</Text>
            </Pressable>
            <Text style={styles.text}>kabul ediyorum.</Text>
          </View>
        </View>
      </View>
      <ModalComponent />
    </View>
  )
}

export default IntroPage