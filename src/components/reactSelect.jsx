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

  const selectRef = useRef()
  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption })
  }

  const changeDefaultValue = () => {
    // selectRef.current.props.changeDefaultValue === options[2]
    console.log('selectRef.current', selectRef.current.props.defaultValue)
    console.log('the default value', options[2])

    selectRef.current.props.defaultValue = options[2]
    // selectRef.current = selectedOption.defaultValue
    // console.log('changeDefaultValue called')
  }

  return (
    <div>
      <br /> <br /> <br />
      <br />
      <Container size="xs">
        <Select
          ref={selectRef}
          onChange={() => {
            {
              handleChange(), changeDefaultValue()
            }
          }}
          options={options}
          defaultValue={options[0]}
        />{' '}
        <br />
        {/* <h3>{selectRef.current}</h3> */}
      </Container>
    </div>
  )
}
export { ReactSelect }
