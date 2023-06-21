import React from 'react'
import classes from "./check.module.css"
import marker from "../../img/marker.png"

function Check() {
    return (
        <section className={classes.container_input}>
            <div className={classes.block2_input}>
                <div className={classes.head_input2}>
                    <h2>Проверить возможность подключения по вашему адресу</h2>
                </div>
                <div className={classes.input2}>
                    <img src={marker} alt="icon"/>
                        <input className={classes.street} type="text" placeholder="Улица"/>
                            <input className={classes.home} type="text" placeholder="Дом"/>
                                <a href="#"><span>Подтвердить</span></a>
                </div>
            </div>
            <div className={classes.block3_input}>
                <div className={classes.head_input3}>
                    <h2>Проверить скорость интернета</h2>
                </div>
                <div className={classes.input3}>
                    <a href="#"><span>Подтвердить</span></a>
                </div>
            </div>
        </section>
    )
}

export default Check