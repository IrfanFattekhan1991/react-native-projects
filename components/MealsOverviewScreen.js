import { Text, View, StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native-web";
import MealItem from "./MealItem";
import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedItems = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    //console.log(itemData.item.title);
    const item = itemData.item;

    const mealItems = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItems} />;
  };

  return (
    <View style={StyleSheet.container}>
      <FlatList
        data={displayedItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
