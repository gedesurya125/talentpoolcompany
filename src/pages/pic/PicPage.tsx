import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import PicCard from "../../components/entittyCard/PicCard";
import { posStyle } from "../../components/entittyCard/commonStyle";
import type { RootState } from "../../redux/rootReducer";
import {styled} from '@mui/material/styles';
import { Skeleton } from "@mui/material";
import { getAllPicAction } from '../../redux/actions/picAction';


const TaletsContainer = styled('div')(
  ({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
  })
)

const PicPage = () => {
  const dispatch = useDispatch();
  const pic = useSelector((state:RootState) => state.pic);


  React.useEffect(() => {
    dispatch(getAllPicAction());
  }, [dispatch])
  

  const renderPicCard = () =>{

    if(pic.loading) return (
      [1,2,3,4,5,6,7,8,9,10,11,12].map(skeleton => <Skeleton key={skeleton} variant="rectangular" sx={{
        ...posStyle,
        height: '120px',
        marginTop: 0,
      }}/>)
    )
    return pic.data.dataPIC?.map((picDetails:any) => {
      return (
        <PicCard
          key={picDetails._id} id={picDetails._id} {...picDetails}     
        />
      );
    });

  } 
  // console.log('data Talent', pic.data.dataPIC);
  return (
  <TaletsContainer sx={{gap: '10px'}}>
    {renderPicCard()}
  </TaletsContainer>
  );
}

export default PicPage
