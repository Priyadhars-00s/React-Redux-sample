import React from "react";
import Form from "react-bootstrap/Form";
import Button from '@material-ui/core/Button'
import "./login.css";
import { connect } from "react-redux";
import { login, logout } from "../redux/actions";
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Login extends React.Component {
  state = {
    redirect: false,
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/user" />;
    }
    console.log("login->Props", this.props)
    return (
           
      <div className="Login">
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.setState({ redirect: true });
          }}
        >
     <Typography component="h1" variant="h5">
       Sign in
     </Typography>
           <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         id="email"
         label="Email Address"
         name="email"
         autoComplete="email"
         autoFocus
              value={this.props.user ? this.props.user.email : ""}
              onChange={(e) =>
                this.props.login({
                  ...this.props.user,
                  [e.target.name]: e.target.value,
                })
              }
            />
         
         <TextField
         variant="outlined"
         margin="normal"
         required
         fullWidth
         name="password"
         label="Password"
         type="password"
         id="password"
         autoComplete="current-password"
              value={this.props.user ? this.props.user.password : ""}
              onChange={(e) =>
                this.props.login({
                  ...this.props.user,
                  [e.target.name]: e.target.value,
                  
                })
              }
              />
                     
          <Button
          type="submit"
         fullWidth
         variant="contained"
         color="primary">
            Login
          </Button>
    </Form>
         </div> 
    
    );
  }
}


const mapStateToProps = (state) => 

({
  user: state.user.user,
  
});

const mapDispatchToProps = {
  login,
  logout,
};
console.log("Inside mapDispatchToProps=====>",login)
export default connect(mapStateToProps, mapDispatchToProps)(Login);




 

     
      
