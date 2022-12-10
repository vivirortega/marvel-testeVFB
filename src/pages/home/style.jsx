import styled from 'styled-components'

const Banner = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column-reverse;
  background: #000000 0% 0% no-repeat padding-box;

  img {
    opacity: 0.6;
  }

  h1 {
    font-size: 130px;
    font-family: Oswald, Arial, Helvetica, sans-serif;
    letter-spacing: 0px;
    color: #ffffff;
    font-weight: bold;
  }

  h1::after {
    content: '\. ';
    white-space: pre;
  }

  .title {
    width: 592px;
    height: 418px;
    margin-left: 135px;
  }
`
export { Banner }