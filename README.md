#  streamlit-speed-dial

Streamlit component that allows you to make speed dial

## Installation instructions

```sh
pip install streamlit_speed_dial
```

![gif_example](https://github.com/BlueGob/streamlit-speed-dial/assets/59932913/66b4a7a9-1c7e-4fab-8462-636c29ee188c)

## Getting started with streamlit-speed-dial

```python
import streamlit as st
from streamlit_speed_dial import streamlit_speed_dial
st.title("streamlit speed dial component")
st.markdown("---")
col1, col2 = st.columns(2)
with col2:
    button_clicked = streamlit_speed_dial(
        [{"icon":"💾","name":"save"},
         {"icon":"✍🏼","name":"edit"},
         {"icon":"❌","name":"delete"},
         {"icon":"↪","name":"share"}
         ],
        "up")
with col1:
    st.subheader(f"{button_clicked} is pressed ")
```
## Properties
The speed dial can be customized using the following parameters:
| Property             | Type     | Description                                                                                                            | Default     |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
|`actions`|list[dict] | the list of buttons to display when hovering or clicking on the speeddial button.Each element in the list is a dictionary representing an action or button. | `[]`|
|`direction` | string | The direction in which the speed-dial button expands to reveal the list of actions |`up`|

## Returns
speed dial returns a string containing the clicked action.
| Property             | Type     | Description                                                                                                            | Default     |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- |
|`selected`|string | name of the action | `None`|
