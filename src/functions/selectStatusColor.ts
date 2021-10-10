import { dashBoardCards } from "../pages/dashboard/DashboardPage";
export type trackerStatus = "Review" | "HR Interview" | "User Interview" | "Offer" | "Accept" | "Rejected";
export const selectStatusColor = (status : trackerStatus) => {
  return dashBoardCards.filter((card:any, index:number) => card.title === status)[0].color;
}
