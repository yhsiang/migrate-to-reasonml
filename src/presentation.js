// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Code,
  Link,
  Image,
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

const codeLet = `  {
    let a: int = 1;
    let b: int = 2;
    a+b;
  }
  /* not accessible a,b here */
`;

const codeImmutable = `  let a = 1;
  let a = 1;
`;

const codeNoNested = `  type post = {
    title: string
  };
  /* You can't do this */
  type posts = {
    list({
      title: string
    })
  };
`;

const codeVariant = `  type hands =
    | Left
    | Right;
`;

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
            <ListItem>CRA - Appier version (7.0.2)</ListItem>
            <ListItem>
              Webpack 2
              <div style={{margin: "5px 0 0"}}>
                <div style={{margin: "0 0 10px"}}><Code>$ yarn add bs-loader reason-react</Code></div>
                <CodePane lang="javascript" source={`{
  test: /\\.(re|ml)$/, use: 'bs-loader'
}
/* bsconfig.json */
{
  "name": "react-scripts-appier",
  "sources": [
    "src"
  ],
  "bs-dependencies": [
    "reason-react"
  ],
  "reason": {
    "react-jsx": 2
  },
  "bsc-flags": [
    "-bs-super-errors"
  ],
  "refmt": 3
}`} textSize={14}/>
              </div>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Webpack 1</Text>
          <div style={{margin: "0 0 10px"}}><Code>$ yarn add bs-loader reason-react</Code></div>
          <div style={{margin: "15px 0 20px"}}>
            <CodePane lang="javascript" source={`{
  ...
  "package-specs": {
    "module": "commonjs",
    "in-source": true
  },
  "suffix": ".bs.js",
  ...
}`} textSize={16}/>
          </div>
          <div style={{margin: "0 0 10px"}}><Code>$ bsb -make-world -w</Code></div>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Reason for beginner
          </Heading>
          <Text margin="50px 0 0">
            <Link href="https://reasonml.github.io/" target="blank">
              Official Website
            </Link>
          </Text>
          <div style={{margin: "50px 0 0"}}>
            <Image src={require("./images/architecture.jpg")}/>
            source: http://2ality.com/2017/11/about-reasonml.html
          </div>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            let
          </Heading>
          <List>
            <ListItem>
              Block scrope
              <div style={{margin: "30px 0 30px"}}>
                <CodePane lang="reason" source={codeLet} textSize={24}/>
              </div>
            </ListItem>
            <ListItem>
              Immutable
              <div style={{margin: "30px 0 30px"}}>
                <CodePane margin="20x 0 0" lang="reason" source={codeImmutable} textSize={24}/>
              </div>
            </ListItem>
          </List>
        </Slide>
        <Slide align="flex-start" bgColor="primary" fill>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Type
          </Heading>
          <List>
            <ListItem>
              No Nested
              <div style={{margin: "30px 0 30px"}}>
                <CodePane margin="20x 0 0" lang="reason" source={codeNoNested} textSize={22}/>
              </div>
            </ListItem>
            <ListItem>
              Variant (ENUM, Sum type)
              <div style={{margin: "30px 0 30px"}}>
                <CodePane margin="20x 0 0" lang="reason" source={codeVariant} textSize={24}/>
              </div>
            </ListItem>
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
