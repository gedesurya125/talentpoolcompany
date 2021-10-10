import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTracekrAction } from "../../redux/actions/trackerAction";
// import TalentsCard from "../../components/entittyCard/TalentsCard";
import { posStyle } from "../../components/entittyCard/commonStyle";
import type { RootState } from "../../redux/rootReducer";
// import { styled } from "@mui/material/styles";
import { Skeleton } from "@mui/material";
import TrackerCard from "../../components/entittyCard/TrackerCard";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";

// const TrackerContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "10px",
// }));

const TrackerPage = () => {
  const dispatch = useDispatch();
  const tracker = useSelector((state: RootState) => state.tracker);

  const renderTrackerCard = () => {
    if (tracker.loading || (!Boolean(tracker.data.dataTracker)))
      return [1, 2, 3, 4, 5, 6, 7, 8].map((skeleton) => (
        <MasonryItem key={skeleton}>
          <Skeleton
            key={skeleton}
            variant="rectangular"
            sx={{
              ...posStyle,
              // height: "120px",
              // marginTop: 0,
              height: "250px",
              width: "100%",
              padding: 0,
              marginTop: 0,
            }}
          />
        </MasonryItem>
      ));
    return tracker.data.dataTracker?.map((theTracker: any) => {
      return <TrackerCard key={theTracker._id} tracker={theTracker} />;
    });
  };

  React.useEffect(() => {
    dispatch(getAllTracekrAction());
  }, [dispatch]);

  return (
    // <TrackerContainer>
    <Masonry
      sx={{ overflow: "visible" }}
      columns={{xs:1, md:2, lg:3}}
      spacing={1}
    >
      {renderTrackerCard()}
    </Masonry>

    // </TrackerContainer>
  );
};

export default TrackerPage;
