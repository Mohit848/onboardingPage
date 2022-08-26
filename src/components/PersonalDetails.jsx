import { FormLabel, TextField } from '@mui/material'
import { Container } from '@mui/system'
import { formLabelStyles, textFieldStyle } from '../styles'
const PersonalDetails = ({formData, setFormData}) => {

  return (
    <div >
      <Container align="left">
        <FormLabel sx={formLabelStyles}>Full name</FormLabel>
        <TextField value={formData.fullName} onChange={(e)=>{setFormData({...formData, fullName : e.target.value})}} sx={textFieldStyle} fullWidth variant='outlined' placeholder='Steve jobs'/>
        <FormLabel sx={formLabelStyles}>Display name</FormLabel>
        <TextField value={formData.displayName} onChange={(e)=>{setFormData({...formData, displayName : e.target.value})}} sx={textFieldStyle} fullWidth variant='outlined' placeholder='Steve'/>
      </Container>
    </div>
  )
}

export default PersonalDetails