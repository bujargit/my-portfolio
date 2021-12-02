// import React, { useState } from "react";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import { makeStyles } from "@mui/styles";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
// import SendRoundedIcon from "@mui/icons-material/SendRounded";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import TextField from "@mui/material/TextField";
// import Paper from "@mui/material/Paper";


// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
//   },
// });

// export default function Login() {
//   // const classes = useStyles();
//   // const [title, setTitle] = useState('');
//   // const [details, setDetails] = useState('');

  
//   return (
//     <Container>
//       <Grid container>
//         <Grid item xs={12} sm={6} md={3} spacing={3}>
//           Login Here
//         </Grid>        
//       </Grid>      
//     </Container>
//   );
// }

import React, { useRef, useState } from "react" 
// import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <div variant="danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div id="email">
              <label>Email</label>
              <input type="email" ref={emailRef} required />
            </div>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <button disabled={loading} className="w-100" type="submit">
              Log In
            </button>
          </form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}
