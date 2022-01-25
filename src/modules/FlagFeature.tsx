import * as React from "react";
// import { createStyles, makeStyles, Theme, Grid, Box, Typography } from "@mui/material";

import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Theme, Typography, } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';

import XSwitch from "../components/switeches/XSwitch";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ExpandCard from "../components/ExpandCard";
import BasicSwitch from "../components/switchTrial/BasicSwitch";
import XSwitchSelect from "../components/switeches/XSwitchSelect";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100%',
      padding: 20
    },
    pageHeading: {
      display: "flex",
      color: 'white'
    },
    boxWrapper: {
      display: 'flex'
    },
    itemWrapperSettings: {
      paddingTop: 16,
    },
    paperItem: {
      display: 'flex',
      justifyContent: 'space-between',
      border: '0px solid',
      height: 50,
      background: '#2a2929',
      borderRadius: 5
    },
    // itemIcon: {
    //   // marginTop: 5
    //   color: '#BFC7CF',
    //   fill: '#BFC7CF',
    //   background: '#BFC7CF',
    //   marginRight: 6,
    //   borderRadius: 2,
    //   height: '0.8em',
    //   width: '0.8em',
    // },
    itemDetails: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 7,
    },
    itemToggle: {
      display: 'flex',
      alignItems: 'center',
    },
    itemIcon: {
      // marginTop: 5
      color: '#BFC7CF',
      fill: '#BFC7CF',
      background: '#BFC7CF',
      marginRight: 6,
      borderRadius: 2,
      height: '0.8em',
      width: '0.8em',
    },
  })
);
const ganeral = ['case', 'case2', 'case3', 'case', 'case2', 'case3']
const general = ['case', 'case2', 'case3', 'case',]
const isLast = general[general.length - 1]
const FlagFeature = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item sm={12} className={classes.pageHeading}>
        <Typography>General</Typography>
      </Grid>
      <Grid item container spacing={2}>
        {ganeral.map((item, index) => (
          <Grid item xs={4} key={index}>
            <Paper className={classes.paperItem} style={{ background: 'rgb(24 24 24)' }}>
              <XSwitch content={'case management'} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid item container spacing={2}>
        <Grid item spacing={2} sm={4}>
          <Grid item className={classes.pageHeading}>
            <Typography>Settings</Typography>
          </Grid>
          <Grid item className={classes.itemWrapperSettings} >
            <Paper className={classes.paperItem} style={{ background: 'rgb(24 24 24)' }}>
              <XSwitch content={'case management'} />
            </Paper>
          </Grid>
          <Grid item className={classes.itemWrapperSettings}>
            <ExpandCard title={<XSwitch content={'case management'} />} children={<SettingsExpand />} />
          </Grid>

        </Grid>
        <Grid item spacing={2} sm={4}>
          <Grid item className={classes.pageHeading}>
            <Typography>Settings</Typography>
          </Grid>
          <Grid item className={classes.itemWrapperSettings} >
            <Paper className={classes.paperItem} style={{ background: 'rgb(24 24 24)' }}>
              <XSwitch content={'case management'} />
            </Paper>
          </Grid>
          <Grid item className={classes.itemWrapperSettings}>
            <ExpandCard title={<XSwitch content={'case management'} />} children={<SettingsExpand />} />
          </Grid>

        </Grid>
        <Grid item spacing={2} sm={4}>
          <Grid item className={classes.pageHeading}>
            <Typography>Settings</Typography>
          </Grid>
          <Grid item className={classes.itemWrapperSettings} >
            <Paper className={classes.paperItem} style={{ background: 'rgb(24 24 24)' }}>
              {/* <XSwitch content={'case management'} /> */}
              <XSwitchSelect content={'case management'} selectContent={['1', '3']}/>
            </Paper>
          </Grid>
          <Grid item className={classes.itemWrapperSettings}>
            <ExpandCard title={<XSwitch content={'case management'} />} children={<SettingsExpand />} />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default FlagFeature

const SettingsExpand = () => {
  const classes = useStyles();
  return (
    <Grid item container spacing={2} style={{ paddingLeft: 20 }}>
      {general.map((item, index) => (
        general.length - 1 === index ? <XSwitchSelect selectContent={['1', '3']} content={'case management'} /> : <XSwitch content={'case ma'} />
      ))}
    </Grid>

  )
}

