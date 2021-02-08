import React, { useEffect, useState, useRef } from 'react'
import { Button, TextField, Container, Card, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useLocation } from 'react-router-dom'
import profile from '../usersData'
import { Skills } from './subComponents/skills'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
}))
const EditGeneralInformation = (props) => {
    const history = useHistory()
    const location = useLocation()

    const nameRef = useRef('')
    const designationRef = useRef('')
    const companyRef = useRef('')
    const addressRef = useRef('')
    const formRef = useRef('')
    const classes = useStyles()
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [company, setCompany] = useState('')
    const [address, setAdress] = useState('')
    const [openSkillsModal, setOpenSkillsModal] = useState(false)

    const handleSkillsOpen = () => {
        setOpenSkillsModal(true)
    }

    const handleSkillsClose = () => {
        setOpenSkillsModal(false)
    }

    const generalInformation = localStorage.getItem('generalInfo')
    const gI = JSON.parse(generalInformation)

    useEffect(() => {
        setName(location.state.row.name)
        setDesignation(location.state.row.designation)
        setCompany(location.state.row.company)
        setAdress(location.state.row.address)
    }, [props.firstName, props.lastName, props.phone, props.address])
    const updateGeneralInfo = () => {
        profile[location.state.row.id].name = nameRef.current.value
        profile[location.state.row.id].designation = designationRef.current.value
        profile[location.state.row.id].company = companyRef.current.value
        profile[location.state.row.id].address = addressRef.current.value

        history.push('/profile')
    }

    const newArr = []
    const skillsArray = localStorage.getItem('skills')
    if (skillsArray) {
        const arr = skillsArray.split(',')

        arr.forEach((ele) => {
            const obj = {}
            obj.value = ele
            obj.name = ele
            newArr.push(obj)
        })
    }
    return (
        <div>
            {' '}
            <br />
            <br />
            <br />
            <br />
            <Container maxWidth="sm" align="center">
                <Card>
                    <form className={classes.root} noValidate autoComplete="off" ref={formRef}>
                        <TextField
                            inputRef={nameRef}
                            id="standard-basic"
                            label="Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />{' '}
                        <br />
                        <TextField
                            inputRef={designationRef}
                            id="standard-basic"
                            label="Designation"
                            onChange={(e) => setDesignation(e.target.value)}
                            value={designation}
                        />{' '}
                        <br />
                        <TextField
                            inputRef={companyRef}
                            id="standard-basic"
                            label="Company"
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                        />{' '}
                        <br />
                        <TextField
                            inputRef={addressRef}
                            id="standard-basic"
                            label="Address"
                            color="inherit"
                            onChange={(e) => setAdress(e.target.value)}
                            value={address}
                        />{' '}
                        <br />
                        <br />
                        {newArr.length <= 4 ? (
                            <Chip label="Junior" style={{ backgroundColor: 'red', color: 'white' }} />
                        ) : newArr.length <= 7 ? (
                            <Chip label="Mediocer" style={{ backgroundColor: 'yelow', color: 'white' }} />
                        ) : (
                            <Chip label="Expert" style={{ backgroundColor: 'green', color: 'white' }} />
                        )}
                        <Button onClick={updateGeneralInfo} variant="contained" color="primary">
                            Update
                        </Button>
                        <br />
                    </form>
                </Card>

                <Button variant="contained" color="primary" onClick={handleSkillsOpen}>
                    Skills
                </Button>

                {openSkillsModal && (
                    <Skills
                        open={openSkillsModal}
                        onClose={handleSkillsClose}
                        firstName={gI.fName}
                        lastName={gI.lName}
                        phone={gI.phone}
                        address={gI.address}
                    />
                )}
            </Container>
        </div>
    )
}
export { EditGeneralInformation }
