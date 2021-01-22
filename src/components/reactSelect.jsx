import React, { useState, useRef } from 'react'
import Select from 'react-select'

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

  let selectRef = useRef(selectedOption)
  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption })
    selectRef.current = selectedOption.value
  }
  return (
    <div>
      <br /> <br /> <br />
      <Select onChange={handleChange} options={options} />
      <h3>{selectRef.current}</h3>
    </div>
  )
}
export { ReactSelect }
