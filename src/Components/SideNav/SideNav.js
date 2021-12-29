import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { shadows } from '@mui/system';

const SideNav = () => {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    return (
        <div>
            <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
                sx={{ boxShadow: 3 }}
                style={{
                    marginTop: '100%',
                    background: 'white'
                }}
            >
                <ToggleButton value="add" aria-label="add" style={{margin: '10px'}}>
                    <AddCircleOutlineIcon />
                </ToggleButton>
                <ToggleButton value="forward" aria-label="forward" style={{margin: '10px'}}>
                    <SendToMobileIcon />
                </ToggleButton>
                <ToggleButton value="text" aria-label="text" style={{margin: '10px'}}>
                    <TextFieldsIcon />
                </ToggleButton>
                <ToggleButton value="image" aria-label="image" style={{margin: '10px'}}>
                    <ImageIcon />
                </ToggleButton>
                <ToggleButton value="youtube" aria-label="youtube" style={{margin: '10px'}}>
                    <YouTubeIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default SideNav;