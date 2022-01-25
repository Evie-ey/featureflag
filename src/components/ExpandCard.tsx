import React from "react";
import { Theme } from "@mui/material";
import { makeStyles, createStyles, withStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IProps {
  title: any;
  children: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    pageHeading: {
      display: "flex",
    },
    heading: {
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    accorditionHeading: {
      background: 'rgb(24, 24, 24) !important' as any,
      padding: '0 2px !important' as any,
    },
    summaryHeading: {
      padding: '0!important' as any,
      margin: 0,
      background: 'rgb(24, 24, 24) !important' as any,

    },
    filterPaper: {
      borderRadius: 0,
    },
    expanded: {
      // margin: 0
    },
    content: {
      margin: '0px !important' as any,
      // padding: '0px !important' as any,
      // '&$expanded': {
      //   marginBottom: 0,
      //   margin: 0,
      // },
    },
  })
);

const ExpandCard = ({ title, children }: IProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        classes={{ root: classes.accorditionHeading }}
      >
        <AccordionSummary classes={{ content: classes.content, expanded: classes.expanded, root: classes.summaryHeading }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"

        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ExpandCard;


