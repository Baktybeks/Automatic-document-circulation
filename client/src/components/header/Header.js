import React, {useEffect} from "react"
import classes from './header.module.css'
import icon_men from '../../img/Icon-man.png'
import waite_shorp from '../../img/waite-sharp.png'
import svon_write from '../../img/svon-write.png'
import logo from '../../img/Group.png'
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {links} from "../../links/links"
import {setIsAuth} from "../../store/slices/userSlice"
import {getUploadedApi} from "../../axios/allApi"


function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)
    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const isAdmin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    const base = () => {
        navigate(links.base)
    }

    useEffect(() => {
        dispatch(getUploadedApi())
    }, [dispatch])

    return (
        <div className={classes.wrapper}>
            <div className={classes.registor_type}>
                <div onClick={base}>
                    <picture >
                        <img src={logo} alt="logo"/>
                    </picture>
                </div>
                <div className={classes.block_meny}>
                    <div className={classes.block_registr_type}>
                        <ul className={classes.block_nav}>
                            {isAuth
                                ?
                                <>
                                    <li className={classes.buttom_block}
                                    onClick={userCabinet}>
                                        <div className={classes.bac_svg_men}>
                                            <span className={classes.block_icon}>
                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.74534 2.39199C9.17522 1.77646 8.37893 1.4375 7.50003 1.4375C6.61643 1.4375 5.81751 1.77441 5.25003 2.38613C4.6764 3.00459 4.3969 3.84512 4.46253 4.75273C4.59261 6.54336 5.9552 8 7.50003 8C9.04485 8 10.4051 6.54365 10.5372 4.75332C10.6037 3.85391 10.3225 3.01514 9.74534 2.39199Z"
                                                        fill="#DB00FF"/>
                                                    <path
                                                        d="M12.6564 14.5615H2.34392C2.20894 14.5633 2.07526 14.5349 1.95262 14.4785C1.82997 14.4221 1.72145 14.3391 1.63493 14.2354C1.4445 14.0078 1.36775 13.697 1.42458 13.3826C1.67185 12.0109 2.44353 10.8587 3.65642 10.0498C4.73396 9.33174 6.0989 8.93652 7.50016 8.93652C8.90143 8.93652 10.2664 9.33203 11.3439 10.0498C12.5568 10.8584 13.3285 12.0106 13.5757 13.3823C13.6326 13.6967 13.5558 14.0075 13.3654 14.2352C13.2789 14.3388 13.1704 14.4219 13.0478 14.4784C12.9251 14.5348 12.7914 14.5632 12.6564 14.5615Z"
                                                        fill="#DB00FF"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className={classes.text_svg}>Кабинет</span>
                                    </li>
                                    {user.role === "ADMIN"
                                        ?
                                        <button
                                            className={classes.btn_header}
                                            onClick={isAdmin}>Admin</button>
                                        :
                                        ''
                                    }
                                    <li className={classes.singn_text}>
                                        <button
                                            className={classes.btn_header}
                                            onClick={logOut}>Выход
                                        </button>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link to={links.signup}
                                              className={classes.singn_text}
                                        >Регистрация</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={classes.singn_text}
                                            to={links.login}><img src={icon_men} alt="men"/><span className={classes.singn_text}>Вход</span></Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header