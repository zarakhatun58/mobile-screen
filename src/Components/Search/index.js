import React from 'react';
import camera from './../../Assets/Images/camera.png';
import '../Search/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const Search = () => {
    return (
        <div className="main">
            <h4> Search Filter</h4>
            
            <div>
                <List sx={{ width: '100%', maxWidth:400, backgroundColor: "white", margin: "auto", boxShadow:" 5px 10px 8px #888888", height:"120px", paddingBottom:"0px", marginBottom:"20px", borderRadius:"10px" }}>
                    <ListItem alignItems="flex-start">
                        <div className="cameraBox">
                            <CameraAltOutlinedIcon className="camera" />
                        </div>

                        <ListItemText style={{ borderBottom: "2px solid gray" }}
                            primary="Help Lorem Ipsum 01" secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            primaryTypographyProps={{
                                fontSize: 15,
                                color: 'rgb(72, 165, 136)',
                                marginLeft: '20px',
                                marginTop:"-13px",
                            }}
                            secondaryTypographyProps={{
                                fontSize: 12,
                                color: '#c1baba',
                                marginLeft: '20px',
                                marginBottom: '10px'
                            }}
                        />


                    </ListItem>
                    <ListItem sx={{ display: "flex", justifyContent: "center",  marginTop:"-30px" }}>
                        <Box>
                            <AttachMoneyOutlinedIcon sx={{ backgroundColor: 'rgb(72, 165, 136)', borderRadius: "50%", width: "15px",height:"10px",marginTop:"-8px", marginRight:"20px" }} />
                        </Box>
                        <Box>
                            <Slider size="small"
                                defaultValue={80}
                                aria-label="Small"
                                valueLabelDisplay="auto" sx={{ width: "170px",  color: "rgb(72, 165, 136)" }} />
                        </Box>


                    </ListItem>

                </List>
            </div>
            <div>
                <List sx={{ width: '100%', maxWidth:400, backgroundColor: "white", margin: "auto", boxShadow:" 5px 10px 8px #888888", height:"120px", paddingBottom:"0px", marginBottom:"20px", borderRadius:"10px" }}>
                    <ListItem alignItems="flex-start">
                        <div className="cameraBox">
                            <CameraAltOutlinedIcon className="camera" />
                        </div>

                        <ListItemText style={{ borderBottom: "2px solid gray" }}
                            primary="Help Lorem Ipsum 02" secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            primaryTypographyProps={{
                                fontSize: 15,
                                color: 'rgb(72, 165, 136)',
                                marginLeft: '20px',
                                marginTop:"-13px",
                            }}
                            secondaryTypographyProps={{
                                fontSize: 12,
                                color: '#c1baba',
                                marginLeft: '20px',
                                marginBottom: '10px'
                            }}
                        />


                    </ListItem>
                    <ListItem sx={{ display: "flex", justifyContent: "center",  marginTop:"-30px" }}>
                        <Box>
                            <AttachMoneyOutlinedIcon sx={{ backgroundColor: 'rgb(72, 165, 136)', borderRadius: "50%", width: "15px",height:"10px",marginTop:"-8px", marginRight:"20px" }} />
                        </Box>
                        <Box>
                            <Slider size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto" sx={{ width: "170px",  color: "rgb(72, 165, 136)" }} />
                        </Box>


                    </ListItem>

                </List>
            </div>
            <div>
                <List sx={{ width: '100%', maxWidth:400, backgroundColor: "white", margin: "auto", boxShadow:" 5px 10px 8px #888888", height:"120px", paddingBottom:"0px", marginBottom:"20px", borderRadius:"10px" }}>
                    <ListItem alignItems="flex-start">
                        <div className="cameraBox">
                            <CameraAltOutlinedIcon className="camera" />
                        </div>

                        <ListItemText style={{ borderBottom: "2px solid gray" }}
                            primary="Help Lorem Ipsum 03" secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            primaryTypographyProps={{
                                fontSize: 15,
                                color: 'rgb(72, 165, 136)',
                                marginLeft: '20px',
                                marginTop:"-13px",
                            }}
                            secondaryTypographyProps={{
                                fontSize: 12,
                                color: '#c1baba',
                                marginLeft: '20px',
                                marginBottom: '10px'
                            }}
                        />


                    </ListItem>
                    <ListItem sx={{ display: "flex", justifyContent: "center",  marginTop:"-30px" }}>
                        <Box>
                            <AttachMoneyOutlinedIcon sx={{ backgroundColor: 'rgb(72, 165, 136)', borderRadius: "50%", width: "15px",height:"10px",marginTop:"-8px", marginRight:"20px" }} />
                        </Box>
                        <Box>
                            <Slider size="small"
                                defaultValue={30}
                                aria-label="Small"
                                valueLabelDisplay="auto" sx={{ width: "170px",  color: "rgb(72, 165, 136)" }} />
                        </Box>


                    </ListItem>

                </List>
            </div>
            <div>
                <List sx={{ width: '100%', maxWidth:400, backgroundColor: "white", margin: "auto", boxShadow:" 5px 10px 8px #888888", height:"120px", paddingBottom:"0px", marginBottom:"20px", borderRadius:"10px" }}>
                    <ListItem alignItems="flex-start">
                        <div className="cameraBox">
                            <CameraAltOutlinedIcon className="camera" />
                        </div>

                        <ListItemText style={{ borderBottom: "2px solid gray" }}
                            primary="Help Lorem Ipsum 04" secondary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            primaryTypographyProps={{
                                fontSize: 15,
                                color: 'rgb(72, 165, 136)',
                                marginLeft: '20px',
                                marginTop:"-13px",
                            }}
                            secondaryTypographyProps={{
                                fontSize: 12,
                                color: '#c1baba',
                                marginLeft: '20px',
                                marginBottom: '10px'
                            }}
                        />


                    </ListItem>
                    <ListItem sx={{ display: "flex", justifyContent: "center",  marginTop:"-30px" }}>
                        <Box>
                            <AttachMoneyOutlinedIcon sx={{ backgroundColor: 'rgb(72, 165, 136)', borderRadius: "50%", width: "15px",height:"10px",marginTop:"-8px", marginRight:"20px" }} />
                        </Box>
                        <Box>
                            <Slider size="small"
                                defaultValue={20}
                                aria-label="Small"
                                valueLabelDisplay="auto" sx={{ width: "170px",  color: "rgb(72, 165, 136)" }} />
                        </Box>


                    </ListItem>

                </List>
            </div>

        </div>
    );
};

export default Search;