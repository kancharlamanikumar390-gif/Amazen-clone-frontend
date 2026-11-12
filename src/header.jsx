import { Link } from "react-router-dom";
import './style.css';
function Header(){
    return(
        <>
        <div className="heads">
        <Link className="nam" to='/mobile'> mobile</Link>
        <Link className="nam"to='/Prime'> laptops</Link>
          </div>
          </>
    );
}
export default Header;