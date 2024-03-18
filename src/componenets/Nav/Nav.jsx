
import { useEffect, useState } from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom/cjs/react-router-dom.min";

export default function Nav() {
  const [show, setShow] = useState(false);

 
  useEffect(() => {
    window.addEventListener("scroll", function(){
      if(window.scrollY>50){
        setShow(true);
      }else{
        setShow(false);
      }
      return()=>{
        this.window.removeEventListener('scroll');
      }
    });
  }, []);

  let color=show?'rgb(17,17,17)':"";

  

  return (
    <>
      <div
        className="fixed-top"
        style={{
          backgroundColor: color,
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          padding:"20px",
         
        }}
      >
       
        <img alt="" src="../netflix-logo.png" style={{ paddingLeft: "20px" }} />
        <div style={{width:'30%'}}>
        <ul style={{display:'flex',listStyle:"none",justifyContent:'flex-end',justifyContent:'space-between'}}>
          <Link to="/" style={{ textDecoration:'none',color:'white'}}>Home</Link>
          <Link to="/actors"style={{ textDecoration:'none',color:'white'}}>Actors</Link>
          <Link to="category"style={{ textDecoration:'none',color:'white'}}>Category</Link>
        </ul>
        </div>
        <img
          alt=""
          src="../netflix-avatar.png"
          style={{ paddingRight: "20px" }}
        />
      </div>
     
    </>
  );
}
