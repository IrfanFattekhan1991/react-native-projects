import { View, Text } from "react-native";

const MealDetails = ({ route }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meals Details-{mealId}</Text>
    </View>
  );
};

export default MealDetails;
