import {Component} from 'react'

import {
  Heading,
  Form,
  Input,
  Label,
  Container,
  Select,
  Button,
  Paragraph,
  Memecontainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    bgImg: '',
    onSubmit: false,
  }

  onChangeImg = event => {
    this.setState({bgImg: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSize = event => {
    this.setState({fontSize: event.target.value})
  }

  submitOf = event => {
    event.preventDefault()
    this.setState({onSubmit: true})
  }

  render() {
    const {topText, bottomText, fontSize, bgImg, onSubmit} = this.state
    return (
      <Container
        content="center"
        testid="meme"
        display="flex"
        shadow
        height={100}
      >
        <Container
          testid="meme"
          align="flex-start"
          display="flex"
          direction="column"
        >
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.submitOf}>
            <Container
              align="flex-start"
              display="flex"
              margin={10}
              direction="column"
            >
              <Label htmlFor="img">Image URL</Label>
              <Input value={bgImg} onChange={this.onChangeImg} id="img" />
            </Container>

            <Container
              align="flex-start"
              display="flex"
              margin={10}
              direction="column"
            >
              <Label htmlFor="top">Top Text</Label>
              <Input value={topText} onChange={this.onChangeTop} id="top" />
            </Container>

            <Container
              align="flex-start"
              display="flex"
              margin={10}
              direction="column"
            >
              <Label htmlFor="bottom">Bottom Text</Label>
              <Input
                value={bottomText}
                onChange={this.onChangeBottom}
                id="bottom"
              />
            </Container>

            <Label htmlFor="select">Font Size</Label>
            <Select
              id="select"
              onChange={this.onChangeSize}
              value={fontSize}
              selected
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.id} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Select>
            <Button type="submit">Generate</Button>
          </Form>
        </Container>

        {onSubmit && (
          <Memecontainer
            testid="meme"
            display="flex"
            direction="column"
            content="space-between"
            width={200}
            height={30}
            img={bgImg}
          >
            <Paragraph size={fontSize}>{topText}</Paragraph>
            <Paragraph size={fontSize}>{bottomText}</Paragraph>
          </Memecontainer>
        )}
      </Container>
    )
  }
}

export default MemeGenerator
