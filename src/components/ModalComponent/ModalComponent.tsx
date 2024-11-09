import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modalSlice'

const ModalComponent = () => {

    const modalVisible = useSelector((state) => state.modal.modalVisible);
    const dispatch = useDispatch();
  
    return (
        <View style={{ flex: 1 }}>
            <Modal isVisible={modalVisible}
            >
                <View style={{ flex: 1, backgroundColor: 'white', margin: 10 }}>
                    <Pressable onPress={() => dispatch(toggleModal())}>
                        <Icon name="chevron-left" size={50} color='gray' />
                    </Pressable>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', margin: 15 }}>Şartlar & Koşullar</Text>
                    <Text>Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.</Text>
                </View>
            </Modal>
        </View>
    );
}

export default ModalComponent;