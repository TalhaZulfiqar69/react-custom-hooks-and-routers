import React, { useState, useRef, useEffect } from 'react'
import Select from 'react-select'
import { Button, Container } from '@material-ui/core'

const options = [
  { value: 'Alpha beta', label: 'Alpha beta' },
  { value: 'The Mango Chips', label: 'The Mango Chips' },
  { value: 'Crown Candy', label: 'Crown Candy' },
  { value: 'The Elephant ignore', label: 'The Elephant ignore' },
  { value: 'Brown Chips', label: 'Brown Chips' },
  { value: 'The Huntsman hidden', label: 'The Huntsman hidden' },
  { value: 'Jackman', label: 'Jackman' },
  { value: 'The Killimonjaro', label: 'The Killimonjaro' },
]
const ReactSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [optionData, setOptionData] = useState([])

  const selectRef = useRef()
  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption })
  }

  const changeDefaultValue = () => {
    selectRef.current.props.defaultValue = options[2]
  }

  const sortDropdown = () => {
    const sortedOptions = options.sort((a, b) => {
      // Replace string with Regex
      const strippedA = a.label.replace(/The /g, '')
      const strippedB = b.label.replace(/The /g, '')

      let x = strippedA.toUpperCase()
      let y = strippedB.toUpperCase()
      return x > y ? 1 : x < y ? -1 : 0
    })
    setOptionData(sortedOptions)
  }
  useEffect(() => {
    sortDropdown()
  }, [])

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
          options={optionData}
          defaultValue={optionData[0]}
        />{' '}
        <br />
      </Container>
    </div>
  )
}
export { ReactSelect }
