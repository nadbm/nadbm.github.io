import styled, { injectGlobal } from 'styled-components'
import Head from 'next/head'

const initStyle = () => {
  const hour = new Date().getHours()
  injectGlobal`
      body {
        color: ${hour > 19 || hour < 6 ? 'white' : 'black'};
        font-family: Roboto;
        margin: 0;
        margin-left: 20px;
        position: absolute; 
        top: 0;
        background: ${hour > 19 || hour < 6 ? 'black' : 'white'}};
      }
      h1 {
        font-size: 6em;
        margin-bottom: 10px;
        font-family: Open Sans;
        font-weight: light;
      }
      a {
        color: black;
        text-decoration: none;
        color: dodgerblue;
        &:hover {
          color: white;
          background: dodgerblue;
        }
      }
      h2 {
        font-weight: 300;
        margin: 0;
        margin-left: 5px;
        font-size: 1.5em;
        line-height: 1.2em;
      }
      ul {
          padding-left: 2em;
        margin-top: 5em;
        margin-left: 0;
        list-style: none;
        li {
            margin-bottom: 1em;
        }
      }
    `
}

const GPG = styled.div`
  font-weight: light;
  position: fixed;
  bottom: 10px;
  left: 10px;
`

export class IndexPage extends React.Component {
  componentDidMount() {
    initStyle()
  }
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300,400,700,900"
            rel="stylesheet"
          />
        </Head>
        <div>
          <h1>NADIM ISLAM</h1>
          <h2>Developer | Entrepreneur | Hacker</h2>
          <h2>
            Founder @ <a href="kn0x.io">KNØX</a>
          </h2>
          <ul>
            <li>
              <a href="mailto:nadim@kn0x.io">>_ email </a>
            </li>
            <li>
              <a href="https://github.com/nadbm">>_ github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nadimislam/">>_ linkedin</a>
            </li>
          </ul>
        </div>
        <GPG>B9D0 3F48 062C F067 D411 96C1 D36F DDC7 409D 8E0A</GPG>
      </div>
    )
  }
}
