import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PostForm({ open, handleClose, agree }) {
  const classes = useStyles();

  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const changeTitle = e => setTitle(e.target.value);

  const changeBody = e => setBody(e.target.value);

  const onAgree = () => {
    if (!title || !body) {
      return;
    }
    // handle action
    agree({
      userId: 10,
      title,
      body,
    });
    // close form
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle id="alert-dialog-slide-title">Post form</DialogTitle>
      <DialogContent>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-required"
            label="Title"
            value={title}
            className={classes.textField}
            onChange={changeTitle}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Body"
            multiline
            rowsMax="4"
            rows={4}
            value={body}
            onChange={changeBody}
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onAgree} color="primary">
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}

PostForm.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  agree: PropTypes.func,
};

export default PostForm;
