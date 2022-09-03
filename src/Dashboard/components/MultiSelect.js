import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip({ item = [],setCategoreis=()=>{} }) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [OBJ_KEY, setOBJ_KEY] = React.useState({})

    React.useEffect(() => {
        let DATA = {}
        item?.map((item) => (
            DATA[item.category_id] = item.name
        ))
        setOBJ_KEY(DATA)
    }, [item])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setCategoreis(typeof value === 'string' ? value.split(',') : value,)
    };
    return (
        <div>
            <FormControl style={{ width: '100%', minHeight: 50, marginBottom: 20 }}>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    style={{ minHeight: 50 }}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={OBJ_KEY[value]} label={OBJ_KEY[value]} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}

                >
                    {item.map((item) => (
                        <MenuItem
                            key={item.name}
                            value={item.category_id}
                            style={getStyles(item.name, personName, theme)}
                        >
                            {OBJ_KEY[item.category_id]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}