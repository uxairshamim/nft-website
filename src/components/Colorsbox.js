import "../styles/Banner.css";


function Colorsbox(props) {
    console.log(props);
    return (
      <div className="banner-main-box" style={{ backgroundColor: "#"+props.box }}>
        <div className="colors-combination-box">
            <div className="box-1">
                <p>{props.box}</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Colorsbox;
  