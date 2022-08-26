import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const FormProgressBar = ({step}) => {
  return (
    <Stepper>
      <Step key={0} active={step>=0}
      sx={{'& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (COMPLETED)
          },
          }}
      >
        <StepLabel></StepLabel>
      </Step>
      <Step key={1} active={step>=1}
      sx={{'& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (COMPLETED)
          },
          }}>
        <StepLabel></StepLabel>
      </Step>
      <Step key={2} active={step>=2}
      sx={{'& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (COMPLETED)
          },
          }}>
        <StepLabel></StepLabel>
      </Step>
      <Step key={3} active={step>=3}
      sx={{'& .MuiStepLabel-root .Mui-active': {
            color: '#664de5', // circle color (COMPLETED)
          },
          }}>
        <StepLabel></StepLabel>
      </Step>
    </Stepper>
  )
}

export default FormProgressBar