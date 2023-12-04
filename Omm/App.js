import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./navigation/StackNavigation";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigtion";

import { UserContextProvider } from "./contexts/UserContext";
import { ProductContextProvider } from "./contexts/ProductContext";
import { IPContextProvider } from "./contexts/IPContext";
import { NotifyContextProvider } from "./contexts/NotifyContext";

library.add(fas, far);

export default function App() {
  return (
    <IPContextProvider>
      <UserContextProvider>
        <ProductContextProvider>
          <NotifyContextProvider>
          <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer>
          </NotifyContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </IPContextProvider>
  );
}
