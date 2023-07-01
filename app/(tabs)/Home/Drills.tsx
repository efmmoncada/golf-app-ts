import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "../../../components/Themed";
import DrillListItem from "../../../components/DrillListItem";
import SelectorButton from "../../../components/SelectorButton";

type DrillDisplayInfo = {
  name: string;
  desc: string;
};

const testData: DrillDisplayInfo[] = [
  { name: "Test", desc: "blah blah blah blah blah blah blah" },
  { name: "Test", desc: "blah blah blah blah blah blah blah" },
  { name: "Test", desc: "blah blah blah blah blah blah blah" },
  { name: "Test", desc: "blah blah blah blah blah blah blah" },
  { name: "Test", desc: "blah blah blah blah blah blah blah" },
];

const SelectionOptions = [
  { label: "Assigned", value: "Assigned" },
  { label: "All", value: "All" },
];

export default function Drills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drills</Text>
      <SelectorButton initialValue="Assigned" items={SelectionOptions} containerStyle={styles.filterDropdown} />
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
        data={testData}
        renderItem={({ item }) => (
          <DrillListItem name={item.name} description={item.desc} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%", // flex: 1 also works, exploring benefits/downsides vs height property
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 8,
    height: 1,
  },
  filterDropdown: {
    width: "30%",
    alignSelf: "flex-start",
    marginStart: 30,
    marginBottom: 15,
  },
});
