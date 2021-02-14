import React from "react";

const Footer = () => {




const styles ={
  ct:{
    width:"18%",
    textAlign: "justify",
    padding: "23px"
  },
  he1:{
    textAlign: "center",
  },

   styleLink:{
     color:"FFFFFF"
   }

}

  return (
    <div className="footer">
       {/* <div style={styles.ct}>
          <h5 style={styles.he1}>Content</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
        </div>*/}

        <p>
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved by  
        </p>
        <div >
        <a id="linkFooter" href="https://github.com/ArquimedesFermin/GifExpertApp/" > GitHub Repository</a>
        </div>
    </div>
  );
};

export default Footer;
