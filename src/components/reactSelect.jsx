import React, { useState, useRef } from 'react'
import Select from 'react-select'
import { Button, Container } from '@material-ui/core'

const options = [
  { value: 'php', label: 'php' },
  { value: 'css', label: 'css' },
  { value: 'html', label: 'html' },
  { value: 'javascript', label: 'javascript' },
  { value: 'reactjs', label: 'reactjs' },
  { value: 'nodejs', label: 'nodejs' },
  { value: 'sass', label: 'sass' },
  { value: 'postgres', label: 'postgres' },
  { value: 'laravel', label: 'laravel' },
  { value: 'scss', label: 'scss' },
]
const ReactSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const selectRef = useRef(null)
  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption })
    // selectRef.current = selectedOption.value
  }

  const changeDefaultValue = () => {
    // selectRef.current.props.changeDefaultValue === options[2]
    console.log('selectRef.current', selectRef.current.props.defaultValue)
    console.log('the default value', options[2])
    // console.log('changeDefaultValue called')
  }

  return (
    <div>
      <br /> <br /> <br />
      <br />
      <Container size="xs">
        <Select
          onChange={handleChange}
          options={options}
          ref={selectRef}
          defaultValue={options[0]}
        />{' '}
        <br />
        <Button color="primary" variant="contained" onClick={changeDefaultValue}>
          Change Value
        </Button>
        {/* <h3>{selectRef.current}</h3> */}
      </Container>
    </div>
  )
}
export { ReactSelect }
