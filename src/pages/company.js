import React from "react";
import { connect } from "react-redux";
import { fetchCompanyDetails, logout } from "../redux/actions";
import { Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Company extends React.Component {
  state={
    logout:false,
  }
  componentDidMount() {
    this.props.fetchCompanyDetails()
  }

  render() {
    if(this.state.logout){
      this.props.logout()
      return <Redirect to="/company" />
    }
    console.log("companydetail->Props", this.props)
    return (
        <div style={{padding:"2vh"}}>
        <Button onClick={()=>{this.setState({logout: true})}}>logout</Button>
        
        <Table
          striped
          bordered
          hover
          style={{
            minWidth: "100%",
            // display: "block",
            tableLayout: "fixed",
            width: "100px",
            overflow: "auto",
          }}
        >
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>username</th>
              <th>email</th>
            </tr>
          </thead>
          {this.props &&
            this.props.company &&
            this.props.company.map((data) => {
                console.log("Map",data)
              return (
                <tbody key={data.id}>
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  users: state.user.users,
  company:state.user.company,
});

const mapDispatchToProps = {
  fetchCompanyDetails,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
