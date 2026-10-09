import React from 'react';
import { registerRootComponent } from 'expo';
import { View, ScrollView, TextInput } from 'react-native';
import { Button, Menu, PaperProvider } from 'react-native-paper';

function Row({ index }) {
  const [visible, setVisible] = React.useState(false);
  return <View style={{ height: 64 }}>
    <Menu visible={visible} onDismiss={() => setVisible(false)}
      anchor={<Button testID={`menu-anchor-${index}`} onPress={() => setVisible(true)}>Menu {index}</Button>}>
      <Menu.Item testID={`menu-item-${index}`} title="First action" onPress={() => setVisible(false)} />
    </Menu>
  </View>;
}
function App() {
  const [count, setCount] = React.useState(0);
  return <PaperProvider><View style={{ padding: 24, width: 500 }}>
    <TextInput placeholder="Focus stays here" testID="outside-input" style={{ padding: 12, borderWidth: 1 }} />
    <Button testID="append-menus" onPress={() => setCount(count + 30)}>Append hidden menus</Button>
    <ScrollView testID="menu-list" style={{ height: 300, maxHeight: 300 }}>
      {Array.from({ length: count }, (_, index) => <Row key={index} index={index} />)}
    </ScrollView>
  </View></PaperProvider>;
}
registerRootComponent(App);
