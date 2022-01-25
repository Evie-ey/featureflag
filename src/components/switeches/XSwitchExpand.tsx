import * as React from "react";
// import { createStyles, makeStyles, Theme, Grid, Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Box, Grid, Theme, Typography, } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';
import SwitchUnstyled from '@mui/base/SwitchUnstyled';
import SwitchButton from "../SwitchButton";

interface ISwitch {
  content: String
}
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
    itemWrapper: {

    },
    paperItem: {
      display: 'flex',
      justifyContent: 'space-between',
      border: '0px solid',
      height: 50,
      background: '#2a2929',
      borderRadius: 5
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
    itemDetails: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 7,
    },
    itemToggle: {
      display: 'flex',
      alignItems: 'center',
    }
  })
);
const XSwitchExpand = ({ content }: ISwitch) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.itemDetails}>
        <CheckBoxOutlineBlankIcon className={classes.itemIcon} />
        <Typography component={'span'} style={{ display: 'inline-block', color: 'white' }}>{content}</Typography>
      </Box>
      <Box className={classes.itemToggle}>
        <SwitchButton />
      </Box>
    </div>
  )
}

export default XSwitchExpand


