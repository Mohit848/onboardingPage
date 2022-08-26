import React from 'react'
import { Container, FormLabel, InputAdornment, TextField, Typography } from '@mui/material'
import { formLabelStyles, textAdornedFieldStyle, textFieldStyle } from '../styles'
const UsageDetails = ({formData, setFormData}) => {
  return (
    <div>
      <Container align="left">
      <FormLabel sx={formLabelStyles}>Workspace name</FormLabel>
        <TextField value={formData.workspaceName} onChange={(e)=>{setFormData({...formData, workspaceName : e.target.value})}} 
        sx={textFieldStyle} fullWidth variant='outlined' placeholder='Eden'/>
        <FormLabel sx={formLabelStyles}>Workspace url <Typography sx={{display:"inline"}} fontWeight="600" color="#c1cada" fontSize="small">(Optional)</Typography></FormLabel>
        <TextField
          value={formData.workspaceUrl} onChange={(e)=>{setFormData({...formData, workspaceUrl : e.target.value})}}
          sx={textAdornedFieldStyle}
          fullWidth
          variant='outlined'
          hiddenLabel
          placeholder="Example"
          InputProps={{
            startAdornment : <div>
              <InputAdornment
              position="start"
            >
             <Typography color="#949fb7" fontWeight={600}>www.eden.com/</Typography>
            </InputAdornment>
            </div>
          }}
        />
      </Container>
        
    </div>
  )
}

export default UsageDetails