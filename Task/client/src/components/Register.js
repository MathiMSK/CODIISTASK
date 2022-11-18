import {useFormik} from 'formik'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Register(){
   
    const notify = () => toast.success("Account Created Successfully");
    async function postreg(){
        axios.post('http://localhost:4000/api/codis/admin/register',{
            firstname:formik.values.firstname,
            lastname:formik.values.lastname,
            username:formik.values.username,
            email:formik.values.email,
            password:formik.values.password
            
        }).then(res=>{console.log(res.data)})
    }    
    const formik = useFormik({
        initialValues: {
        firstname:"",
        lastname:"",
        username:"",
        email: "",
        password:""
        },
        onSubmit: (values) => {
         console.log(values);
        postreg()
        },
        validate: (values) => {
        let errors = {};
        if (!values.email) {
        errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        } 
        if(!values.password)
         errors.password="Required";
        return errors;
        }
        });

       
          
        
        return (
            <>
           <div>
           <div class="sign">
     <h1 class='flicker'>Create<span  class='flicker' >Account</span></h1>
    </div>
  {/* <div class="content">
    <h1 >Create Account</h1>
    </div> */}
 
    <div class='acc'>
<form class="form" onSubmit={formik.handleSubmit}>
  <div class="form4">
     <label for="validationCustom01" class="form-label">First name</label>
     <input id='firstname' name='firstname' type='text' class="form-control" onChange={formik.handleChange} value={formik.values.firstname} ></input>
   </div>
  <div class="form4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input id='lastname' name='lastname' type='text' onChange={formik.handleChange} value={formik.values.lastname} class="form-control"></input>
   </div>
  <div class="form4">
    <label for="validationCustomUsername" class="form-label">Username</label>
     <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input id='username' name='username' type='text' onChange={formik.handleChange} value={formik.values.username} class="form-control"></input>
    </div>
  </div>
  <div class="form4">
    <label for="validationCustom03"  class="form-label">Email</label>
    <input id="email" name="email" type="email" onChange={formik.handleChange}
        value={formik.values.email} class="form-control"/>
{formik.errors.email ? <div style={{ color: "red" }} >{formik.errors.email}</div> : 
null}
  </div>
  <div class="form4">
    <label for="validationCustom03" class="form-label">Password</label>
    <input id="password" name="password" type="password"
        onChange={formik.handleChange} value={formik.values.password} class="form-control" />
  </div>
  <br/>
  <div class="form4">
    <div class="form-check">
      <input class="form-check-input" type="checkbox"   id="invalidCheck" required/>
     <label class="form-label" for="invalidCheck">
         Agree to terms and conditions
    </label>
    </div>
</div>
   {/* <div class="form8">
     <button class="button" onClick={notify} type="submit" ><span data-attr="create">Create</span><span data-attr="Account">Account</span></button>
     <ToastContainer />
  </div> */}
  
  <div class="form8">
  <button class="btn-hover color-7" onClick={notify} type="submit">Register</button>
  <ToastContainer />
</div>


 </form>
 </div>

 </div>
        </>
        );
        
}

// class="form-control"