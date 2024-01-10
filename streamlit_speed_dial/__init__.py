import os
import streamlit.components.v1 as components
import streamlit as st

_RELEASE = True

if not _RELEASE:
    _component_func = components.declare_component(
        "streamlit_speed_dial",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("streamlit_speed_dial", path=build_dir)

def streamlit_speed_dial(actions:list[dict[str,str]],direction:str, key=None):
    """Create a speed dial button .

    Parameters
    ----------
    actions: list[dict]
        the list of buttons to display when hovering or clicking on the speeddial button.

        Each element in the list is a dictionary representing an action or button.
        
        The dictionary should have the following structure:
        
        {
            'icon': str,
            'name': str,
        }
    
    direction: str
        The direction in which the speed-dial button expands to reveal the list of actions.
        - 'up': The list of actions expands upward.
        - 'down': The list of actions expands downward.
        - 'left': The list of actions expands to the left.
        - 'right': The list of actions expands to the right.
    
    key: str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.
    
    Example:
        ```python
        actions_list = [
            {'icon': '💾', 'name': 'save'},
            {'icon': '✍🏼', 'name': 'edit'},
            {"icon":"❌","name":"delete"},
        ]

        clicked = SpeedDialButton(actions_list, direction='up')
        ```

    Returns
    -------
    str
        the name of the clicked button

    """
    component_value = _component_func(actions=actions,direction=direction, key=key)

    return component_value
if not _RELEASE:
    st.title("streamlit speed dial component")
    st.markdown("---")
    col1, col2 = st.columns(2)
    with col2:
        button_clicked = streamlit_speed_dial([{"icon":"💾","name":"save"},{"icon":"✍🏼","name":"edit"},{"icon":"❌","name":"delete"},{"icon":"↪","name":"share"}],"up")
    with col1:
        st.subheader(f"{button_clicked} is pressed ")