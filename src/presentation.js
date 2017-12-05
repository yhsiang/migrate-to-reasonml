// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Code,
  Link,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Migrate to ReasonML
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary">
            LY Cheng @ Appier 2017/12/06
          </Text>
        </Slide>
        <Slide align="flex-start" bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Agenda
          </Heading>
          <List ordered start={1} type="1">
            <ListItem margin="90px 0 30px">Setting working environment</ListItem>
            <ListItem margin="30px 0">How to add Reason in your project</ListItem>
            <ListItem margin="30px 0">Reason for beginner</ListItem>
            <ListItem margin="30px 0">Compare ReasonReact and ReactJS</ListItem>
          </List>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Setting working environment 1
          </Heading>
          <div style={{margin: "50px 0 0" }}>
            <Code >
              $ npm install -g bs-platform
            </Code>
          </div>
          <div style={{margin: "50px 0 0" }}>
            <Text margin="0 0 20px">For editor support</Text>
            <Code >
              $ npm install -g https://github.com/reasonml/reason-cli/archive/3.0.1-bin-darwin.tar.gz
            </Code>
          </div>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Setting working environment 2
          </Heading>
          <div style={{margin: "50px 0 0" }}>
            <Text margin="0 0 20px">VSCode Extension</Text>
            <Code >
              Reason(freebroccolo.reasonml) 1.0.16
            </Code>
          </div>
          <div style={{margin: "50px 0 0" }}>
            <Code >
              $ yarn create react-app --scripts-version reason-scripts YOUR_APP_NAME
            </Code>
          </div>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Add Reason to your existing project
          </Heading>
          <List>
            <ListItem>CRA - Appier version (7.0.0)</ListItem>
            <ListItem>Webpack 2</ListItem>
            <ListItem>Webpack 1</ListItem>
          </List>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Reason for beginner
          </Heading>
          <Text>
            <Link href="https://reasonml.github.io/" target="blank">
              Official Website
            </Link>
          </Text>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            let
          </Heading>
          <List>
            <ListItem>Block scrope</ListItem>
            <ListItem>Immutable</ListItem>
          </List>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Type
          </Heading>
          <List>
            <ListItem>Block scrope</ListItem>
            <ListItem>Immutable</ListItem>
          </List>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Compare ReasonReact and ReactJS
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
