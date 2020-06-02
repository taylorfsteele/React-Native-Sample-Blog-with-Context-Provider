import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  //We're setting the header options inside the component so we can access its state
  //React.useLayoutEffect is the React hook used in the Navigation documentation, so we'll use that here.
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: blogPost.id })}>
          <AntDesign style={{ marginRight: 10 }} name="edit" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
    //We don't really need this argument here since when 'navigation' changes the screen stack changes
    //But it's still good practice to have so we don't have any side effect leaks.
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
