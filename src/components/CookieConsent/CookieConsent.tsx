import React, { useState } from 'react';
import { View, Text, Modal, Switch } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import CustomToggleButton from '../CustomToggleButton/CustomToggleButton';

const CookieConsent = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [enabled, setEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitchSecond = () => setEnabled(previousState => !previousState);
  
    const [modalVisible, setModalVisible] = useState(true);

    const acceptCookies = () => {
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ top: 50, backgroundColor: 'white', borderRadius: 10 }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Zorunlu Çerezler</Text>
                            <Switch
                            onValueChange={toggleSwitchSecond}
                            value={enabled}
                            />
                        </View>
                        <Text>Teknik olarak gerekli ve istatistik verileri</Text>
                        <Text>Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>İsteğe Bağlı Çerezler</Text>
                            <Switch
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            />
                        </View>
                        <Text>Pazarlama</Text>
                        <Text>Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz.</Text>
                    </View>
                    <CustomButton title={'Hepsine izin ver'} onPress={acceptCookies} />
                    <CustomButton title={'Seçime izin ver'} onPress={acceptCookies} />
                </View>
            </View>
        </Modal>
    );
};

export default CookieConsent;
