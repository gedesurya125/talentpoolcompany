import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanyAction } from "../../redux/actions/companyAction";
import { styled } from "@mui/material/styles";
import type { RootState } from "../../redux/rootReducer";
import { Skeleton } from "@mui/material";
import { posStyle } from "../../components/entittyCard/commonStyle";
import CompanyCard from "../../components/entittyCard/CompanyCard";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import { Box } from "@mui/lab/node_modules/@mui/system";

const CompanyContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
}));

const CompanyPage = () => {
  const dispatch = useDispatch();
  const company = useSelector((state: RootState) => state.company);

  const renderCompanyCard = (companies: any) => {
    if (companies.loading)
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((skel) => (
        <MasonryItem key={skel}>
          <Skeleton
            // key={skel}
            variant="rectangular"
            sx={{
              ...posStyle,
              height: "250px",
              width: "100%",
              padding: 0
              // marginTop: '0px'
            }}
          />
        </MasonryItem>
      ));
    if(!companies.data.dataCompany?.length) return(
      <div></div>
    )
    return companies.data.dataCompany?.map((comp: any, index: number) => (
      <CompanyCard
        key={index}
        name={comp.name}
        photo={comp.photo}
        address={comp.address}
        phone={comp.phone}
        jobVacancy={comp.jobVacancy}
        website={comp.website}
      />
    ));
  };
  React.useEffect(() => {
    dispatch(getAllCompanyAction());
  }, [dispatch]);
  return (
    // <Box width="100%" height="100vh">
    <Masonry sx={{overflow: 'visible'}} columns={3} spacing={1}>
      {renderCompanyCard(company)}
    </Masonry>
    // </Box>
  );
};

export default CompanyPage;
