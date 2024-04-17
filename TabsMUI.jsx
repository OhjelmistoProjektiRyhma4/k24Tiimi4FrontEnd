import { useState } from 'react';
import { Box, AppBar, Tabs, Tab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Products from './components/Product';
import Frontpage from './components/Frontpage';

function TabsMUI({ }) {
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);

    }

    return (
        <Box>
            <AppBar position='fixed'>
                <Tabs value={value} onChange={handleChange}
                    variant='fullWidth' centered textColor='inherit'>

                    <Tab label='Frontpage' icon={<MenuIcon />} />
                    <Tab label='Products' icon={<MenuIcon />} />

                </Tabs>
            </AppBar>

            {value === 0 && <Frontpage />}
            {value === 1 && <Products />}
        </Box>
    );
}

export default TabsMUI;