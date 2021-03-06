import React, { Component } from "react"
import { Header, Background, lightTheme, darkTheme } from "./styles"
import { ThemeProvider } from "styled-components"
import BlindText from "../blind_text"
import Footer from "../footer"
import ReactGA from 'react-ga';

class App extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      theme: lightTheme,
      wordCount: 0
    }
    ReactGA.initialize('UA-100035749-1');
    ReactGA.pageview('/editsober');
  }

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible })
  }

  toggleTheme = () => {
    if (this.state.theme === darkTheme) {
      this.setState({ theme: lightTheme })
    } else {
      this.setState({ theme: darkTheme })
    }
  }

  incrementWordCount = () => {
    this.setState({ wordCount: this.state.wordCount + 1 })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Background>
          <Header>
            Edit Sober
          </Header>
          <BlindText
            visible={this.state.visible}
            incrementWordCount={this.incrementWordCount}
          />
          <Footer
            toggleVisible={this.toggleVisible}
            toggleTheme={this.toggleTheme}
            visible={this.state.visible}
            wordCount={this.state.wordCount}
          />
        </Background>
      </ThemeProvider>
    )
  }
}

export default App
