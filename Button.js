function Button(props){
    return(
        <>
     <button onClick={props.onClick}  />;
      {props.text}
      </>

    );
}

export default Button;