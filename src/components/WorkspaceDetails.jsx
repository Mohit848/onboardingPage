import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import React from 'react'

const WorkspaceDetails = ({formData, setFormData}) => {
  
  return (
    <Container>
      <Grid paddingBottom={"10px"} marginBottom={"35px"} container spacing={3} justifyContent={"center"}>
        <Grid item>
          <Card variant="outlined" sx={{maxWidth : "170px",margin:1, "&.MuiCard-root :focus" : {border:"1px solid #664de5", borderRadius:1}}}>
          <CardActionArea onClick={()=>{setFormData({...formData, useCaseChoice : "personal"})}}>
          <CardContent align="left">
            <PersonIcon sx={{color : "#664de5", paddingBottom : 1}}/>
            <Typography paddingBottom={1} fontSize={14} fontWeight="700">For myself</Typography>
            <Typography paddingRight={2} color="#969eb0" fontSize={12} fontWeight="500">Write better. Think more clearly. Stay organised</Typography>
          </CardContent>
          </CardActionArea>
          
        </Card>
        </Grid>
        <Grid item>
          <Card variant="outlined" sx={{
            maxWidth : "170px",
            margin:1, 
            "&.MuiCard-root :focus" : {border:"1px solid #664de5",borderRadius:1}}}>
          <CardActionArea onClick={()=>{setFormData({...formData, useCaseChoice : "group"})}}>
            <CardContent align="left">
              <GroupsIcon sx={{color : "#664de5", paddingBottom : 1}}/>
              <Typography paddingBottom={1} fontSize={14} fontWeight="700">With my team</Typography>
              <Typography paddingRight={2} color="#969eb0" fontSize={12} fontWeight="500">Wikis, docs, tasks & projects, all in one place</Typography>
            </CardContent>
          </CardActionArea>
          
        </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WorkspaceDetails