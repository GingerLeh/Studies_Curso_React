import React, { ReactNode } from "react";
import style from './Botao.module.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao({onClick, type, children }: Props){
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}
export default Botao;



//Antes era assim
{/*class Botao1 extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}>{
    render(){
        //const isActive = true;
        //const styles = {
        //    backgroundColor: isActive ? "green" : "red"
        //}
        const {type = "button", onClick} = this.props;
        return(
            //<button style={styles}>
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
   
}*/}


//estilo no react. Dentro da tag se usa style={{}}