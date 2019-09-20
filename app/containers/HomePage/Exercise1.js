import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { algorithm1, sumNumTop2 } from './caculator';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const data1 = ['a', 'ab', 'abc', 'cd', 'def'];
const data2 = [1, 4, 2, 3, 5];

const result1 = algorithm1(data1);
const result2 = sumNumTop2(data2);

export default function EX1() {
  const classes = useStyles();

  const [input1] = React.useState(`[${data1.join(', ')}]`);
  const [output1] = React.useState(JSON.stringify(result1));

  const [input2] = React.useState(`[${data2.join(', ')}]`);
  const [output2] = React.useState(JSON.stringify(result2));

  return (
    <div>
      <h2>Javascript algorithm</h2>
      <p>I.1</p>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-flexible"
          label="input"
          multiline
          rowsMax="3"
          value={input1}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined-multiline-flexible"
          label="output"
          multiline
          rowsMax="3"
          value={output1}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
      </form>
      <p>I.2</p>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-flexible"
          label="input"
          multiline
          rowsMax="3"
          value={input2}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
        <TextField
          id="outlined-multiline-flexible"
          label="output"
          multiline
          rowsMax="3"
          value={output2}
          className={classes.textField}
          margin="normal"
          variant="outlined"
          disabled
        />
      </form>
    </div>
  );
}
