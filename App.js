import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from "./src/context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            //Options is a function with navigation as a parameter. This gives us access to navigate() in the Navigation Container
            //This is the easy way to add navigation to a header, but there is a SOC regarding the screen and the stack.
            options={({ navigation }) => ({
              title: "Index Screen Nice Guy",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <AntDesign style={{ marginRight: 10 }} name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            //Here, we're placing the header button in the ShowScreen.jsx component so we can access its state
            options={{ title: "Show Screen Cool Guy" }}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ title: "Create Screen Fun Guy" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{ title: "Edit Screen Smart Guy" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
