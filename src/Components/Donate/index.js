import React from 'react';
import './Donate.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const Donate = () => {
    return (
        <div>
            <h4> Make a donation to</h4>
            <div>
                <Box sx={{ width: '100%', maxWidth: 400, backgroundColor: "white", }}>
                    <Box style={{ marginBottom: "15px" }}>
                        <div className="cameraBox">
                            <CameraAltOutlinedIcon className="camera" />
                        </div>

                    </Box>
                    <Box>
                        <Typography sx={{
                            fontSize: 15,
                            color: 'rgb(72, 165, 136)',
                            marginLeft: '20px',
                            marginTop: "-13px",
                        }}>
                            Help Lorem Ipsum 01
                        </Typography>
                        <Typography sx={{
                            fontSize: 12,
                            margin: "auto",
                            width: "270px",
                            textAlign: "center",
                            color: '#c1baba',
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Typography>

                    </Box>
                    {/* <Box  style={{ borderBottom: "2px dashed gray", marginBottom:"20px", borderImageWidth: "1",}} /> */}
                    <Box style={{  marginBottom:"20px", }}>
                        <div class='dropzone'>
                           
                        <Typography sx={{
                            fontSize: 15,
                            color: 'rgb(72, 165, 136)',
                            marginLeft: '20px',
                            marginTop: "-13px",
                        }}>
                           Select card
                        </Typography>
                        </div>
                    </Box>

                </Box>
            </div>
        </div>
    );
};

export default Donate;