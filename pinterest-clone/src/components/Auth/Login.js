import React,{useState} from 'react'
import axios from 'axios';
function SignUp() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const FormDataSubmission = (event) => {
    event.preventDefault()
    const PostData = async () => {
      const result = await axios.post('http://localhost:8080/v1/auth/user/login',{
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      const data = await result.json();
      console.log("The Database data is saved successfully response:",data);
    }
    PostData();
    setPassword('')
    setEmail('')
  }
  return (
    <div className="flex">
      <form onSubmit={FormDataSubmission}>
      <label>Email</label>
      <input type="email" value={email} onClick={handleEmail} placeholder="Enter your Email"/>
      <label>password</label>
      <input type="password" value={password} onClick={handlePassword} placeholder="Enter your Password"/>
      <input type="submit" value="Sign Up" />
      </form>
    </div>
  )
}

export default SignUp