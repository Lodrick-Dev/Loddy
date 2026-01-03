import React from 'react'
import { Linking, Modal, Pressable, Text, View } from 'react-native'
type ModalInfosProps = {
  visible: boolean;
  onClose: () => void;
  websiteUrl: string;
};
const ModalInfos = ({ visible, onClose, websiteUrl }: ModalInfosProps) => {
  return (
    <Modal
  visible={visible}
  transparent
  animationType="fade"
  onRequestClose={onClose}
>
  <View
    style={{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        width: '80%',
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Information
      </Text>

      <Text style={{ marginBottom: 16 }}>
        Cette application a été développée par Loryum.
      </Text>

      <Pressable
        onPress={() => Linking.openURL('https://loryum.com')}
      >
        <Text style={{ color: '#2563EB', fontWeight: '600' }}>
          🌐 Visiter le site web
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onClose()}
        style={{ marginTop: 20, alignSelf: 'flex-end' }}
      >
        <Text style={{ color: '#EF4444', fontWeight: '600' }}>
          Fermer
        </Text>
      </Pressable>
    </View>
  </View>
</Modal>

  )
}

export default ModalInfos