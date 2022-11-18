import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";


export default function Nav(){
  return(<>
  <nav class="navbar ">

    <ul class="nav ">
     <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#/Register">Register</a>
     </li>
     <li class="nav-item ">
      <a class="nav-link" href="#/login">Login</a>
     </li> 
    
    </ul>
    </nav>
  </>
  )
}
