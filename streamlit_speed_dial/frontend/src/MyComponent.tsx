import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, {ReactNode } from "react"
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, styled } from "@mui/material"

interface State {
  open: boolean
}

class MyComponent extends StreamlitComponentBase<State> {
  public state = {open:false }
   
  StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  }));
  
  public render = (): ReactNode => {
    const actions = this.props.args["actions"]
    const direction = this.props.args["direction"]
    const height = 80*(actions.length)
    return (
      <span>
       <Box sx={{ position: 'relative', mt: 3, height: height,bottom: 10 }}>
      <this.StyledSpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
        direction={direction}
        onClose={()=>this.setState({open:false})}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
      >
        {actions.map((action: { icon: string; name: string }) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>{this.setState({open:false});Streamlit.setComponentValue(action.name)}}
          />
        ))}
      </this.StyledSpeedDial>
    </Box>
      </span>
    )
  }
}

export default withStreamlitConnection(MyComponent)
