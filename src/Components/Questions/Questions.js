import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { TextField, IconButton } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';
import Questions2 from '../Questions2/Questions2';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};

const Questions = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
    }));

    const lightTheme = createTheme({ palette: { mode: 'light' } });

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom component="div" style={{
                marginTop: '5%'
            }}>
                Questions
            </Typography>
            <Grid container spacing={2} style={{
                padding: '5px'
            }}>
                {[lightTheme].map((theme, index) => (
                    <Grid item xs={12} key={index}>
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    gridTemplateColumns: { md: '1fr' },
                                    gap: 2,
                                }}
                            >
                                {[3].map((elevation) => (
                                    <Box sx={{ '& > :not(style)': { m: 1, p: 2, height: 260 } }} style={{
                                        height: '400px'
                                    }}>
                                        <Item key={elevation} elevation={elevation}>
                                            <TextField
                                                id="standard-bare"
                                                variant="outlined"
                                                placeholder='Question'
                                                style={{
                                                    marginRight: '10px',
                                                    width: '60%'
                                                }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <IconButton>
                                                            <Image />
                                                        </IconButton>
                                                    ),
                                                }}
                                            />
                                            <FormControl sx={{ m: 1, p: 2, minWidth: 300 }} style={{
                                                width: '30%',
                                                height: '5%'
                                            }}>
                                                <InputLabel id="demo-simple-select-helper-label">
                                                    <FormControlLabel sx={{ ml: 2 }} value="Multiple Choice" control={<Radio />} label="Multiple Choice" />
                                                </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={age}
                                                    onChange={handleChange}
                                                >
                                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                                        <FormControlLabel sx={{ m: 2 }} value="female" control={<Radio />} label="Female" /> <br />
                                                        <FormControlLabel sx={{ m: 2 }} value="male" control={<Radio />} label="Male" /> <br />
                                                    </RadioGroup>
                                                </Select>
                                            </FormControl>
                                            <RadioGroup name="use-radio-group" defaultValue="first">
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="first" label="Option 1" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="second" label="Option 2" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="third" label="Option 3 add 'other'" control={<Radio />} />
                                            </RadioGroup>
                                            <hr style={{ marginTop: '20px' }} />
                                            <div style={{
                                                textAlign: 'right'
                                            }}>
                                            <IconButton>
                                                <ContentCopyIcon />
                                            </IconButton>
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                            </div>
                                        </Item>
                                    </Box>
                                ))}
                            </Box>
                        </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Questions;