import { View, Text, Pressable, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

const MealItem = (mealItems) => {
  const { id, title, imageUrl, duration, complexity, affordability } =
    mealItems;
  const navigation = useNavigation();

  const showMealDetailsHandler = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable onPress={showMealDetailsHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 8,
  },
  details: {
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
