import React from "react";
import StatusCard from "../../components/statusCard/StatusCard";
import { Box, Typography } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import

export const dashBoardCards = [
  {
    title: "Review",
    Icon: PreviewIcon,
    talents: 30,
    color: '#0055bd'
  },
  {
    title: "HR Interview",
    Icon: MeetingRoomIcon,
    talents: 20,
    color: '#00918d'

  },
  {
    title: "User Interview",
    Icon: PeopleOutlineIcon,
    talents: 10,
    color: '#ad9c00'

  },
  {
    title: "Offer",
    Icon: LocalOfferIcon,
    talents: 15,
    color: '#ad00a4'

  },
  {
    title: "Accepted",
    Icon: ThumbUpIcon,
    talents: 11,
    color: '#4bb500'

  },
  {
    title: "Rejected",
    Icon: ThumbDownIcon,
    talents: 9,
    color: '#b50000'

  },
];

const DashboardPage = () => {
  const renderDashboardCard = dashBoardCards.map((dcard) => (
    <StatusCard key={dcard.title} {...dcard} />
  ));
  return (
    <Box>
      <Typography variant="h4">Dashboard</Typography>
      <Box display="flex" flexWrap="wrap" gap="10px">
        {renderDashboardCard}
      </Box>
    </Box>
  );
};

export default DashboardPage;
