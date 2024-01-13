import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Prevoius = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 2rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.7rem;
`;

export const Button = styled.button`
cursor: pointer;
font-size: 2rem !important;
outline: none;
border: 1px outset white;
color: #fff;
background-color: #000;
transition: all .4s ease;
border-radius: 50%;
margin: 1px;
display: flex;
justify-content: center;
align-items: center;
  &:hover {
    color: #fff !important;
    background-color:#6e6e6e; 
  }
  
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operation }) => operation && `    background: #ffdd00; color : #000; font-size:50px; &:hover{   background: ##ffdd00b5;
    color: #000;
  }`};
  ${({ zero_btn }) => zero_btn && `border-radius: 10%;`};

`;

// element.style {
//   border-radius: 0 50%  50% 0;
//   margin: 0 10px 0  0;
//   background: grey;
//   padding: 0;
// }