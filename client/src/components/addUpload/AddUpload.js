import React, {useState} from 'react'
import classes from "./addUpload.module.css"
import {useDispatch, useSelector} from "react-redux"
import {addUploadedApi} from "../../axios/allApi"


function AddUpload() {

    const dispatch = useDispatch()
    const [uploadedFile, setUploadedFile] = useState('')

    const {user} = useSelector(state => state.userReducer)

    const reset = () => {
        setUploadedFile('')
    }

    const isFormValid = () => uploadedFile

    const submitAddCourses = async (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Загрузите файл")
        }

        const formData = new FormData()
        formData.append('uploadedFile', uploadedFile)
        formData.append('author', user.login)
        formData.append('role', user.role)
        dispatch(addUploadedApi(formData))
    }

    return (
        <section className={classes.adding_courses}>
            <div>
                <form className={classes.cont_dob_curs} onSubmit={submitAddCourses}>
                    <label htmlFor="img">{!uploadedFile ? "Добавить файл" : "Файл добавлено"}</label>
                    <input
                        type="file"
                        name="uploadedFile"
                        id="img"
                        accept=".pdf"
                        onChange={e => setUploadedFile(e.target.files[0])}
                    />
                    <div className={classes.btns}>
                        <button className={classes.btn_dob_curs}
                                type="submit"
                        >
                            Добавить
                        </button>
                        <button className={classes.btn_dob_curs}
                                onClick={reset}
                        >
                            Сбросить
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default AddUpload