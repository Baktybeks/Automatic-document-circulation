import React from 'react'
import classes from "./banner.module.css"
import {links} from "../../links/links"
import {Link} from "react-router-dom"
import vgik from "../../img/bilain.png"
import vec4 from "../../img/header.png"

function Banner() {
    return (
        <section className={classes.container_inet}>
            <div className={classes.ander_block_inet}>
                <div className={classes.block_title}>
                    <h1>Билайн</h1>
                    <p>на высокой скорости</p>
                    <Link to={links.signup}>Выбрать тариф</Link>
                </div>
                <div className={classes.block_img}>
                    <img className={classes.vgik} src={vgik} alt="icon"/>
                        <img className={classes.vec4} src={vec4} alt="icon"/>
                </div>
            </div>
        </section>
    )
}

export default Banner