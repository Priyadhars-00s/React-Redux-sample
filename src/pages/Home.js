import React from "react";
import { connect } from "react-redux";
import { fetchuserDetails, logout } from "../redux/actions";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


 
class Home extends React.Component {
  state={
    logout:false,
  }
  componentDidMount() {
    this.props.fetchuserDetails()
  }

  render() {
    if(this.state.logout){
      this.props.logout()
      return <Redirect to="/" />
    }
    console.log("userpage->Props", this.props)

    return (
    
        <TableContainer component={Paper}>
          <Button onClick={()=>{this.setState({logout: true})}}>logout</Button>
      <Table >
      <TableHead>
            <TableRow>
               <TableCell style={{ width: 160 }} align="centre" font="bold">
                 ID
                </TableCell>
                <TableCell style={{ width: 160 }} align="centre" font="bold">
                 EMPLOYEE NAME
                </TableCell>
                <TableCell style={{ width: 160 }} align="centre" font="bold">
                 EMPLOYEE AGE
                </TableCell>
                <TableCell style={{ width: 160 }} align="centre" font="bold">
                 EMPLOYEE SALARY
                </TableCell>
              </TableRow>
          </TableHead>
        <TableBody>
        {this.props &&
            this.props.users &&
            this.props.users.map((data) => (
              <TableRow key={data.id}>
              <TableCell style={{ width: 160 }} align="centre">
                {data.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="centre">
                {data.employee_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="centre">
                {data.employee_age}
              </TableCell>
              <TableCell style={{ width: 160 }} align="centre">
                {data.employee_salary}
              </TableCell>
            </TableRow>
          ))} 
           </TableBody>
     
             </Table>
    </TableContainer>
  );
}
            
}
     

const mapStateToProps = (state) => ({
  user: state.user.user,
  users: state.user.users,
});

const mapDispatchToProps = {
  fetchuserDetails,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
