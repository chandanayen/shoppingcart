import { TbShoppingBagSearch,TbSearch,TbShoppingCart }
 from "react-icons/tb";
import { Link } from "react-router-dom";
const Header=()=>{
      return(
        <div className="header">
               <Link to='/'>
               <div className="logo">
                  <h2>Spoilr</h2>
                  <TbShoppingBagSearch className="icon" />
                </div>
                </Link>
            <div className="right-side">
                <div className="search-input">
                    <input type="text" placeholder="search" />
                   <TbSearch/>  
                </div>
                <Link to="/cart">
                <div className="cart">
                 <TbShoppingCart className="cart-icon"/>
                 <span>0</span>
                </div>
                </Link>
                </div>
        </div>
    );
}
export default Header;
