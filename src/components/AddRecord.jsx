import { FormGroup,FormControl,InputLabel,Input ,Typography,styled,Button} from '@mui/material'
import React,{useState} from 'react'
import { addUser } from '../service/userApi'

const Main=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
&>div{
    margin-top:20px;
}

`
const defaultValues={
    name:"",
    email:"",
    phone:""
}

function AddRecord() {

    const [user, setUser] = useState(defaultValues);

    const handleValueChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
console.log(user)
    }
const addUserDetails = async()=>{
   await addUser(user)
}

  return (
    <div>
        <Main>
            <Typography variant="h4">Create New Record</Typography>
            <FormControl>
             <InputLabel>Name</InputLabel>
             <Input onChange={handleValueChange}name='name'/>
            </FormControl>
            <FormControl>
             <InputLabel>Email</InputLabel>
             <Input  onChange={handleValueChange}name='email'/>
            </FormControl>
            <FormControl>
             <InputLabel>Phone</InputLabel>
             <Input  onChange={handleValueChange}name='phone'/>
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={addUserDetails}>Add Record</Button>
            </FormControl>
        </Main>
    </div>
  )
}

export default AddRecord