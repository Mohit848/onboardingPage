export const textAdornedFieldStyle = {
    '& .MuiOutlinedInput-root': {
        paddingLeft: 0},
    '& .MuiInputBase-input':{
        paddingLeft:1,
        paddingBottom: 1.5,
        paddingTop: 1.5,
    },
    '& .MuiInputAdornment-root': {
      backgroundColor: "#f8f9fc",
      padding: '24px 20px',
      borderRight : 1,
      borderColor : "#ccc"
    },
    marginBottom :"20px"
}
export const textFieldStyle = {
    '& .MuiInputBase-input':{
        paddingLeft: 2,
        paddingBottom: 1.5,
        paddingTop: 1.5,
        innerHeight:2
    },
    marginBottom :"20px"
}

export const formLabelStyles = {
    display : "block",
    color : "#445065",
    fontWeight : "600",
    fontSize : "15px",
    paddingBottom:1
}

export const createButtonStyle = {
    backgroundColor: "#664de5",
    disableHoverListener : false,
    textTransform : "none",
    height : "42px",
    "&.MuiButton-root:hover" : {
        bgcolor: "#664de5",
    }
}