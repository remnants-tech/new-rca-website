/**
  This is drawer for sign up page.

  @author: Jae Won Kwon <jaewonrt@gmail.com>
  date: 2/23/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const CreateAccountDrawer = (props) => {
  return (
    <Drawer
      className={props.classes.drawer}
      variant="permanent"
      classes={{
        paper: props.classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={props.classes.toolbar} />
      <List>
        <ListItem button={false}>
          <ListItemText primary={`Step ${props.isFirstStep ? 1 : 2} of 2`} classes={{primary:props.classes.drawerTextHeading}} />
        </ListItem>
        <ListItem button>
          {
            props.isFirstStep &&
            (
              <ListItemIcon className={props.classes.drawerText}>
                <ArrowForwardIcon/>
              </ListItemIcon>
            )
          }
          <ListItemText primary="Email & Password" classes={{primary:props.classes.drawerText}}/>
        </ListItem>
        <ListItem button>
          {
            !props.isFirstStep &&
            (
              <ListItemIcon className={props.classes.drawerText}>
                <ArrowForwardIcon color="#ffffff"/>
              </ListItemIcon>
            )
          }
          <ListItemText primary="General Information" classes={{primary:props.classes.drawerText}} />
        </ListItem>
      </List>
      <Divider className={props.classes.divider} />
    </Drawer>
  )
}
