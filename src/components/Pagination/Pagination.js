import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { getPage } from "../../redux/filmsPage/filmsPage-selector";
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // marginTop: theme.spacing(2),
    },
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

const PagePagination = ({ pageSwitch }) => {
  const classes = useStyles();
  const takePage = useSelector(getPage);
  const dispatch = useDispatch();

  
  console.log(takePage)
  return (
    <div className={classes.root}>
      <Pagination className={classes.ul}
        count={1000}
        shape="rounded"
        onChange={(event, value) => pageSwitch(event, value)}
      />
    </div>
  );
};

export default PagePagination;