import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Notifications = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Configura las notificaciones"
          title="Notificaciones"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Notificaciones
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Correo Electrónico"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Notificaciones Push"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Mensajes de texto"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Llamadas telefónicas"
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Mensajes
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Correo Electronico"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Notificaciones Push"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Llamadas telefónicas"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
