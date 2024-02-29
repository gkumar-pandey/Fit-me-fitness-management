import React from "react";
import { Card, PageTitle } from "../../components";
import {
  caloriesBurnedBannerImg,
  caloriesConsumedBannerImg,
  goalBannerImg,
  remainGoalBannerImg,
} from "../../assets";
import Container from "../../components/container/Container";

const Dashboard = () => {
  const dashboardCardData = [
    {
      title: "Total Calories Burned",
      img: caloriesBurnedBannerImg,
      value: 500,
    },
    {
      title: "Total Calories Consumed",
      img: caloriesConsumedBannerImg,
      value: 300,
    },
    { title: "Total Calories Target", img: goalBannerImg, value: 570 },
    {
      title: "Remaining Calories to Goal",
      img: remainGoalBannerImg,
      value: 200,
    },
  ];
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
