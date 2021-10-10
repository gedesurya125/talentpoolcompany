import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import TalentsCard from "../../components/entittyCard/TalentsCard";
import { posStyle } from "../../components/entittyCard/commonStyle";
import { getTalentAction } from "../../redux/actions/talentAction";
import type { RootState } from "../../redux/rootReducer";
import {styled} from '@mui/material/styles';
import { Skeleton } from "@mui/material";


const TaletsContainer = styled('div')(
  ({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
  })
)



const TalentsPage = () => {
  const dispatch = useDispatch();
  const talent = useSelector((state: RootState) => state.talent);
  React.useEffect(() => {
    dispatch(getTalentAction());
  }, [dispatch]);

  const renderTalentCard = () =>{

    if(talent.loading) return (
      [1,2,3,4,5,6,7,8,9,10,11,12].map(skeleton => <Skeleton key={skeleton} variant="rectangular" sx={{
        ...posStyle,
        width: {
          xs: '100%',
          lg: '32.7%'
        },
        height: '120px',
        marginTop: 0
      }}/>)
    )
    return talent.data.dataTalent?.map((theTalent:any) => {
      return (
        <TalentsCard
          key={theTalent._id}
          id={theTalent._id}
          nickName={theTalent.username}
          photo={theTalent.photo}
          address={theTalent.address}
          phone={theTalent.phone}
        />
      );
    });

  } 
  // console.log('data Talent', talent.data.dataTalent);
  return (
  <TaletsContainer sx={{gap: '10px'}}>
    {renderTalentCard()}
  </TaletsContainer>
  );
};

export default TalentsPage;
