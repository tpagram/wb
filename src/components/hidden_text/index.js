import React, { Component } from "react"
import styled from "styled-components"

const Word = styled.span.attrs({
  spellCheck: false
})`
  color: white;
  background: white;
  border-radius: 4px;
  // padding: 0 5px;
`

const Whitespace = styled.span`
  background: black;
`

class HiddenText extends Component {
  formatText = text => {
    return text.split(/(\s+)/).map((word, i) => {
      if (/ |\n/.test(word)) {
        return <Whitespace key={i}>{word}</Whitespace>
      } else {
        return <Word key={i}>{word}</Word>
      }
    })
  }

  render() {
    return (
      this.props.visible ? this.props.text : this.formatText(this.props.text)
    )
  }
}

export default HiddenText
