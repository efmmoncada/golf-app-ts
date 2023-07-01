import { useState } from "react";
import { StyleSheet, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
  containerStyle?: ViewStyle,
  items: {label: string, value: string}[];
  initialValue: string;
}

export default function SelectorButton(props: Props) {
  const { items, initialValue, containerStyle } = props;


  const [open, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(initialValue);
  const [pickerItems, setPickerItems] = useState(items);

  return (
    <DropDownPicker
      autoScroll
      open={open}
      setOpen={setOpen}
      value={selectedFilter}
      setValue={setSelectedFilter}
      items={pickerItems}
      setItems={setPickerItems}
      containerStyle={containerStyle ?? {}}
      textStyle={styles.text}
      labelStyle={styles.label}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Karma",
  },
  label: {
    fontWeight: "bold",
  },
})
