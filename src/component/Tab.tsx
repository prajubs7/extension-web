import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { setFilter } from '../store/slice/card.slice';
import { useAppDispatch } from '../hooks/redux';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    //'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const dispatch = useAppDispatch();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    if (newValue === 0) dispatch(setFilter("All"));
    if (newValue === 1) dispatch(setFilter("active"));
    if (newValue === 2) dispatch(setFilter("inactive"));
  };

  return (
    <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: 'transparent',
          '& .MuiTabs-flexContainer': {
            gap: 2, // space between tabs
          },
        color: 'white' 
        }}
      >
        <Tab
          label="All"
          {...a11yProps(0)}
          sx={{
            borderRadius: 3,
            textTransform: 'none',
            px: 3,
            py: 1,
            backgroundColor: value === 0 ? 'red' : 'grey.300',
            color: value === 0 ? 'white' : 'black',
          }}
        />
        <Tab
          label="Active"
          {...a11yProps(1)}
          sx={{
            borderRadius: 3,
            textTransform: 'none',
            px: 3,
            py: 1,
            backgroundColor: value === 1 ? 'red' : 'grey.300',
            color: value === 1 ? 'white' : 'black',
          }}
        />
        <Tab
          label="Inactive"
          {...a11yProps(2)}
          sx={{
            borderRadius: 3,
            textTransform: 'none',
            px: 3,
            py: 1,
            backgroundColor: value === 2 ? 'red' : 'grey.300',
            color: value === 2 ? 'white' : 'black',
          }}
        />
      </Tabs>
    </Box>
  );
}
