import { useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useThemeColor } from "./Themed";

type Props = {
  containerStyle?: ViewStyle;
  items: { label: string; value: string }[];
  initialValue: string;
};

export default function SelectorButton(props: Props) {
  const { items, initialValue, containerStyle } = props;

  const backgroundColor = useThemeColor({}, "buttonBackground");
  const textColor = useThemeColor({}, "text");

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
      style={{ backgroundColor }}
      containerStyle={containerStyle ?? {}}
      textStyle={{ color: textColor, fontFamily: "Karma" }}
      dropDownContainerStyle={{ backgroundColor }}
      labelStyle={styles.label}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
});
