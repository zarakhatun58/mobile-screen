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
import { Grid, TextField } from '@mui/material';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import visa6 from '../../Assets/Images/visa6.jpg';
import visa7 from '../../Assets/Images/visa7.jpg';
import visa3 from '../../Assets/Images/visa3.jpg';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    tabsRoot: {
      minWidth: '80px',
      "css-1t4lqmc-MuiButtonBase-root-MuiTab-root":{
        maxWidth:"100px",
    }
    },
    
    
  }));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
// css-1t4lqmc-MuiButtonBase-root-MuiTab-root



const Donate = () => {
   const classes=useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <h4> Make a donation to</h4>
            <Grid sx={{ width: '100%', maxWidth: 400, backgroundColor: "white", padding: "10px", margin: "auto" }}>
                <Box>
                    <Box style={{ padding: "15px" }}>
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
                            marginBottom: "20px"
                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Typography>

                    </Box>
                    <Box style={{ paddingTop: "20px", }} sx={{ borderStyle: "dashed", borderTop: "1px dashed gray" }}>


                        <Typography sx={{
                            fontSize: 25,
                            color: 'rgb(72, 165, 136)',
                            marginLeft: '20px',
                            marginTop: "-13px",
                        }}>
                            Select card
                        </Typography>

                    </Box>
                    <Box >
                        <TabPanel value={value} index={0}>
                            <img src={visa7} alt="card" style={{ width: "100px", height: "50%" }} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <img src={visa6} alt="card" style={{ width: "100px" }} />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <img src={visa3} alt="card" style={{ width: "100px" }} />
                        </TabPanel>
                        <Tabs className={classes.tabsRoot} tabWidth={75} tabItemContainerStyle={{ width: '100px' }} value={value} onChange={handleChange} aria-label="simple tabs example" centred  >
                            <Tab icon={<FiberManualRecordSharpIcon sx={{ fontSize: "small", }} />} aria-label="phone" />
                            <Tab icon={<FiberManualRecordSharpIcon sx={{ fontSize: "small", maxWidth: "20px" }} />} aria-label="favorite" />
                            <Tab icon={<FiberManualRecordSharpIcon sx={{ fontSize: "small", maxWidth: "20px" }} />} aria-label="person" />
                        </Tabs>
                    </Box>
                    <Box  sx={{ borderStyle: "dashed", borderBottom: "1px dashed gray" }}>
                        <input className="userInput" placeholder="Select Amount" />

                        {/* <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem>
                                <MenuItem value={21}>Twenty one</MenuItem>
                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                            </Select>
                        </FormControl> */}

                    </Box>
                    <Box>
                    <input className="submit" placeholder="Send Donation " />
                    </Box>

                </Box>
            </Grid>
        </div>
    );
};

export default Donate;