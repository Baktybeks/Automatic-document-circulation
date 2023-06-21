import React from 'react'
import classes from "./tariff.module.css"
import TariffItem from "../tariffItem/TariffItem"
import {useSelector} from "react-redux"


function Tariff() {

    const {tariffs} = useSelector(state => state.tariffReducer)

    const {preloader} = useSelector(state => state.preloaderReducer)

    return (
        <section className={classes.container_tarif}>
            <div className={classes.head_tarif}>
                <h2>тарифы для дома</h2>
            </div>
            <div className={classes.block_tarif}>
                <div className={classes.nav_tarif}>
                    <ul className={classes.nav_tarif_link}>
                        <li>Интернет</li>
                        <li>Интернет + Кабельное ТВ</li>
                        <li>Интернет + Smart TV</li>
                        <li>Интернет + Телефония</li>
                    </ul>
                </div>
                <div className={classes.cart_tarif}>
                    {preloader ?
                        <h1 >Loading......</h1>
                        :
                        <ul className={classes.cart_tarif_content}>
                            {
                                tariffs.map(tariff => <TariffItem key={tariff.id} tariff={tariff}/>)
                            }
                        </ul>
                    }
                </div>
            </div>
        </section>
    )
}

export default Tariff