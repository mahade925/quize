import React from 'react';
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
import AddIcon from '@mui/icons-material/Add';

import PropTypes from 'prop-types';

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

const Questions2 = () => {
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
            <Grid container spacing={0} style={{
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
                                    <Box sx={{ '& > :not(style)': { m: 1, p: 2, height: 510 } }} style={{
                                        height: '500px',
                                        marginBottom: '20px'
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
                                                    <FormControlLabel sx={{ ml: 2 }} value="Fill in the balnks" control={<Radio />} label="Fill in the blanks" />
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
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="first" label="Blank 1" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="second" label="Option 1" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="third" label="Option 2" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="third1" label="Add Option or add 'add other'" control={<Radio />} />
                                            </RadioGroup>
                                            <RadioGroup name="use-radio-group" defaultValue="first">
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="first" label="Blank 2" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="second" label="Option 1" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="third" label="Option 2" control={<Radio />} />
                                                <MyFormControlLabel sx={{ ml: 4, mt: 2 }} value="third2" label="Add Option or add 'add other'" control={<Radio />} />
                                            </RadioGroup>
                                            <div style={{
                                                textAlign: 'left',
                                                fontWeight: 'bold'
                                            }}>
                                            <label><IconButton>
                                                <AddIcon />
                                            </IconButton>Add More Blanks</label>
                                            </div>
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
            </Grid><br /><br />
        </div>
    );
};

export default Questions2;