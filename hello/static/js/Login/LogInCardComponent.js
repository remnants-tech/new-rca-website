/**
  Log in card for the log in page

  @author:Jae Won Kwon <jaewonrt@gmail.com>
  date:2/21/19
*/

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';


export const LogInCardComponent = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
     >
      <Grid item xs={6}>
        <Card className={props.classes.card}>
          <CardContent>
            <Typography variant="h4" component="h2" className={props.classes.title}>
              Log in
            </Typography>
            <Typography variant="subtitle1" className={props.classes.subHeading}>
              Email
            </Typography>
            <TextField
              id="email"
              className={props.classes.textField}
              margin="normal"
              variant="outlined"
              value={props.email}
              onChange={(newValue) => props.handleFieldInputChange(newValue,"email",false)}
              fullWidth
            />
            <Typography variant="subtitle1" className={props.classes.subHeading}>
              Password
            </Typography>
            {/* TODO: potentially add a visibility icon here. I removed it because it caused css issues */}
            <TextField
              id="password"
              className={props.classes.textField}
              margin="normal"
              variant="outlined"
              type={"password"}
              value={props.password}
              onChange={(newValue) => props.handleFieldInputChange(newValue,"password",false)}
              fullWidth
            />
            <Grid container spacing={8}>
              <Grid item xs={12} sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Remember me"
                      onChange={(newValue) => props.handleFieldInputChange(newValue,"rememberMeCheckbox",true)}
                      checked={props.rememberMeCheckbox}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button
                  variant="contained"
                  fullWidth
                  className={props.classes.nextButton}
                  >
                  Next
                  <ArrowForwardIcon />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
      </Card>
    </Grid>
  </Grid>
  )
};
