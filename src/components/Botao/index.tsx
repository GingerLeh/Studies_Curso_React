import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined
}>{
    render(){
        //const isActive = true;
        //const styles = {
        //    backgroundColor: isActive ? "green" : "red"
        //}
        const {type = "button"} = this.props;
        return(
            //<button style={styles}>
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
   
}

export default Botao;

//estilo no react. Dentro da tag se usa style={{}}