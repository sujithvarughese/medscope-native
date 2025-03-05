import {Modal, StyleSheet, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";

type PickerModalProps = {
  visible: boolean;
  close: () => void;
  onSelect: (value: string) => void;
  title: string;
  list: string[]
}

const PickerModal = ({ visible, close, onSelect, title, list }: PickerModalProps) => {

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={close} transparent={true}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Picker
          style={styles.pickerContainer}
          onValueChange={(itemValue: string) => onSelect(itemValue)}
        >
          {list.map(item => <Picker.Item color="fff" key={item} label={item} value={item} />)}
        </Picker>
      </View>
    </Modal>
 );
};

const styles = StyleSheet.create({
  container: {
    height: '33%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 16,
  },
  pickerContainer: {
    width: '100%',
  },
});

export default PickerModal;