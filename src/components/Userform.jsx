import {Typography, Button, Container, Snackbar, Alert} from '@mui/material'
import { Box } from '@mui/system';
import logo from '../logo.png'
import React, { useState } from 'react'
import { h1Messages, pMessages } from './messages';
import PersonalDetails from './PersonalDetails';
import UsageDetails from './UsageDetails';
import { createButtonStyle } from '../styles';
import WorkspaceDetails from './WorkspaceDetails';
import { Done } from '@mui/icons-material';
import FormProgressBar from './FormProgressBar'


const Userform = () => {
  const [step, setStep] = useState(0);
  const [showError, setError] = useState(false);
  const [formData, setFormData] = useState({
    fullName : "",
    displayName : "",
    workspaceName :"",
    workspaceUrl : "",
    useCaseChoice : ""
  })
  const pageDisplay = (page)=>{
    switch (page) {
      case 0:
        return <PersonalDetails formData={formData} setFormData={setFormData} />;
      case 1:
        return <UsageDetails formData={formData} setFormData={setFormData} />
      case 2:
        return <WorkspaceDetails formData={formData} setFormData={setFormData} />
      default:
        break;
    }
  }
  const handleClick = ()=>{
    
    if(step === 0 && formData.fullName && formData.displayName)
    {
      return setStep((prevStep)=>(prevStep<h1Messages.length-1?prevStep+1:h1Messages.length-1));
    }
    else if(step === 1 && formData.workspaceName && formData.workspaceUrl)
    {
      return setStep((prevStep)=>(prevStep<h1Messages.length-1?prevStep+1:h1Messages.length-1));
    }
    else if(step === 2 && formData.useCaseChoice)
    {
      return setStep((prevStep)=>(prevStep<h1Messages.length-1?prevStep+1:h1Messages.length-1));
    }
    else if(step === 3)
    {
      console.log(formData);
    }
    else
    {
      return setError(true);
    }
   
  }
  return (
    <div>
      <Container style={{maxWidthLg : {marginTop: "5%", width:"50%"}}}>
        <Typography variant='h5' style={{margin: "50px"}} fontWeight={700}><Box component="img" src={logo} sx={{height:25, paddingRight:1}} />Eden</Typography>
        <Container sx={{marginBottom:"75px"}} maxWidth="sm"><FormProgressBar step={step}/></Container>
        {step===3?<Done sx={{color : "#fff",padding:2,marginTop:"10px", marginBottom:"35px",fontSize:25, backgroundColor:"#664de5", borderRadius:100}}/>:null}
        <Typography variant='h4' style={{marginBottom: "10px"}} fontWeight={600}>{h1Messages[step] + (step===3 ? formData.displayName:"")}!</Typography>
        <Typography variant='subtitle2' style={{marginBottom: "40px"}} sx={{display : 'block',color : "gray"}} fontWeight={500} >{pMessages[step]}</Typography>
        <Container maxWidth="sm" >
            {pageDisplay(step)}
          <Container>
            <Button fullWidth
            sx={createButtonStyle}
            onClick={handleClick} variant='contained'>{step<3?"Create Workspace":"Launch Eden"}</Button>
          </Container>
        </Container>
      </Container>
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={()=>{setError(false)}}
      >
        <Alert severity='error'>Cannot proceed with empty fields!</Alert>
      </Snackbar>
    </div>
  )
}

export default Userform