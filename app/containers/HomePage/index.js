/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import { getCards, postForm } from './actions';
import { makeSelectCards } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Exercise2 from './Exercise2';
import Exercise1 from './Exercise1';
import Loader from '../../components/LoadContent';

import SnackBars from '../../components/SnackBars';

import PostForm from './PostForm';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  contanerCards: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  containerLoader: {
    width: '50%',
    margin: '3em',
  },
}));

const key = 'home';

export function HomePage({ loading, cards, onGetCards, onPostForm }) {
  const classes = useStyles();

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [openForm, setOpenForm] = React.useState(false);
  const [open, handleClose] = React.useState(true);

  const onClose = () => handleClose(!open);
  const onCloseForm = () => setOpenForm(false);
  const onOpenForm = () => setOpenForm(true);

  useEffect(() => {
    // get list json
    onGetCards();
  }, []);

  return loading && !loading.message ? (
    <div className={classes.containerLoader}>
      <Loader />
    </div>
  ) : (
    <article>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Exercise 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Exercise1 />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Exercise 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.contanerCards}>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onOpenForm}
            >
              Add new
            </Button>
          </div>

          <div>
            {cards.map(card => (
              <Exercise2 key={card.id} title={card.title} body={card.body} />
            ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <PostForm open={openForm} handleClose={onCloseForm} agree={onPostForm} />
      <SnackBars open={open} message={loading.message} handleClose={onClose} />
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  cards: PropTypes.array,
  onGetCards: PropTypes.func,
  onPostForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cards: makeSelectCards(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetCards: () => dispatch(getCards()),
    onPostForm: data => dispatch(postForm(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
