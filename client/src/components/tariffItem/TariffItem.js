import React from 'react'
import classes from "./tariffItem.module.css"
import group from "../../img/Group.png"
import carbon from "../../img/carbon.png"
import {useNavigate, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {addUserTariff} from "../../axios/tariffApi"

function TariffItem({tariff}) {
    const dispatch = useDispatch()

    const {user} = useSelector(state => state.userReducer)

    const id = tariff ? tariff.id : undefined
    const speed = tariff ? tariff.speed : undefined
    const price = tariff ? tariff.price : undefined
    const title = tariff ? tariff.title : undefined

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/tariff/${tariff.id}/`)
    }

    const addTarriff = () => {
        dispatch(addUserTariff("TRUE",tariff.id, user.id))
    }

    return (
        <li className={classes.tarif_li}>
            <h3>{title}</h3>
            <p><img src={group} alt="icon"/>{speed} Мбит/с</p>
            <div className={classes.more_tarif} onClick={clickHandler}>
                <img src={carbon} alt="icon"/><span className={classes.text_btn_child}>Подробнее</span>
            </div>
            <p>{price} som/мес</p>
            <button
                className={classes.btn_go}
                onClick={addTarriff}>Подключить</button>

        </li>
    )
}

export default TariffItem