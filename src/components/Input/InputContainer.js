import React from 'react'
import PropTypes from 'prop-types'
import Input from '.'
import { isDuplicateName, removeExtraWhiteSpace } from '../../utils'

class InputContainer extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes = {
    addToList: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    updateInputValue: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
  };

  handleSubmit (e) {
    const currentValue = removeExtraWhiteSpace(this.props.inputValue)
    const people = this.props.list
    if (isDuplicateName(currentValue, people)) {
      alert(`${currentValue} already exists! Please type in a different name!`)
    } else {
      const addPerson = this.props.addToList
      addPerson(currentValue)
    }
    this.props.updateInputValue('')
    e.preventDefault()
  }

  render () {
    const placeholderText = 'Type and press Enter key to add to list'
    
    return (
      <Input
        handleSubmit={this.handleSubmit}
        handleChange={this.props.updateInputValue}
        value={this.props.inputValue}
        placeholderText={placeholderText}
      />
    )
  }
}

export default InputContainer
