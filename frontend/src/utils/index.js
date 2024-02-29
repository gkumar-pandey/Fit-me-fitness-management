export const getTotalCaloriesBurned = (data) => {
  return data.reduce((acc, curr) => acc + curr.calories_burned, 0);
};

export const getTotalCaloriesConsumed = (data) => {
  return data.reduce((acc, curr) => acc + curr.calories, 0);
};

export const getTotalCaloriesTarget = (data) => {
  return data.reduce((acc, curr) => acc + curr.calories, 0);
};
