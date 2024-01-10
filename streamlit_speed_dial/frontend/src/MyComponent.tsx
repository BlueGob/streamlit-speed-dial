import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, {ReactNode } from "react"
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"

interface State {
  open: boolean
}

class MyComponent extends StreamlitComponentBase<State> {
  public state = {open:false }
  
  public render = (): ReactNode => {
    const actions = this.props.args["actions"]
    const direction = this.props.args["direction"]
    return (
      <span>
       <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
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
      </SpeedDial>
    </Box>
      </span>
    )
  }
}

export default withStreamlitConnection(MyComponent)
