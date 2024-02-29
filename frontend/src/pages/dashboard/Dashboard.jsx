import React, { useEffect } from "react";
import { Card, PageTitle } from "../../components";
import {
  caloriesBurnedBannerImg,
  caloriesConsumedBannerImg,
  goalBannerImg,
  remainGoalBannerImg,
} from "../../assets";
import Container from "../../components/container/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalCaloriesBurned,
  getTotalCaloriesConsumed,
  getTotalCaloriesTarget,
} from "../../utils";
import { fetchExercises } from "../../store/features/exerciseSlice";
import { fetchFoods } from "../../store/features/foodSlice";
import { fetchTargets } from "../../store/features/targetSlice";

const Dashboard = () => {
  const { exercises } = useSelector((state) => state.exercise);
  const { foods } = useSelector((state) => state.food);
  const { targets } = useSelector((state) => state.target);

  const dispatch = useDispatch();
  const dashboardCardData = [
    {
      title: "Total Calories Burned",
      img: caloriesBurnedBannerImg,
      value: getTotalCaloriesBurned(exercises),
    },
    {
      title: "Total Calories Consumed",
      img: caloriesConsumedBannerImg,
      value: getTotalCaloriesConsumed(foods),
    },
    {
      title: "Total Calories Target",
      img: goalBannerImg,
      value: getTotalCaloriesTarget(targets),
    },
    {
      title: "Remaining Calories to Goal",
      img: remainGoalBannerImg,
      value:
        getTotalCaloriesTarget(targets) - getTotalCaloriesBurned(exercises),
    },
  ];

  useEffect(() => {
    if (exercises.length === 0) {
      dispatch(fetchExercises());
    }

    if (targets.length === 0) {
      dispatch(fetchTargets());
    }

    if (foods.length === 0) {
      dispatch(fetchFoods());
    }
  }, []);
  return (
    <Container>
      <div className="flex flex-col items-center">
        <PageTitle title={"Dashboard"} />
        <div className="flex flex-wrap justify-center items-center my-[4vh] mx-[16vh] gap-16 font-[poppins]">
          {dashboardCardData.map((ele, idx) => (
            <Card {...ele} key={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
