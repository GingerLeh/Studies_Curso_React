import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component{
    render(){
        //const isActive = true;
        //const styles = {
        //    backgroundColor: isActive ? "green" : "red"
        //}
        return(
            //<button style={styles}>
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
   
}

export default Botao;

//estilo no react. Dentro da tag se usa style={{}}