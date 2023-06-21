import React from 'react'
import classes from "./appConnection.module.css"
import {links} from "../../links/links"
import close from "../../img/close.png"
import {Link} from "react-router-dom"

function AppConnection() {
    return (
        <div className={classes.container_modal}>
            <div className={classes.block_head}>
                <h2 className={classes.head_modal}>Заявка на подключение</h2>
                <Link to={links.base}><img src={close} alt="close"/></Link>
            </div>
            <input type="text" placeholder="+996 (___) ___-__-__ *"/>
            <input type="text" placeholder="Как Вас зовут? *"/>
            <input type="text" placeholder="Адрес дома *"/>
            <input type="text" placeholder="Удобное время для звонка"/>
            <div className={classes.check}>
                <lable className={classes.sqare} htmlFor="sq">
                    <input type="checkbox" id="sq"/>
                </lable>
                <span className={classes.sqare_text}>Нажимая на кнопку, я даю согласие на обработку персональных данных</span>
            </div>
            <div className={classes.modal_btn}>
                <a className={classes.btn} href="../pageMain/index.html"><span>Жду звонка</span></a>
            </div>
        </div>
    )
}

export default AppConnection