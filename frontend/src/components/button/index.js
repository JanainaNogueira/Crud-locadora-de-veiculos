import Style from './index.module.css'
const Button=({text,onClick})=>{
    return(
        <button className={Style.button} onClick={onClick}>{text}</button>
    )
}

export default Button