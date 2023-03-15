import styled from 'styled-components';

const Container = styled.table`
  width: 90%;
  margin: 0 auto 0 auto;
  border-top: 2px solid #eee;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  svg:hover {
    cursor: pointer;
  }

  svg {
    color: #7159c1;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  td {
    overflow: auto;
    overflow-y: hidden;
    cursor: pointer;
  }
  td::-webkit-scrollbar-thumb {
    background-color: #7159c1ee;
    opacity: 0.3;
    border-radius: 50px;
    height: 20px;
    cursor: pointer;
  }
  td::-webkit-scrollbar {
    background-color: #cccccccc;
    height: 10px;
    cursor: pointer;
  }
  img {
    height: 60px;
  }
  strong {
    cursor: default;
    color: #333;
    word-break: keep-all;
    display: block;
    max-width: 20vh;
    line-break: auto;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid darkgoldenrod;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
  .btn-n {
    padding: 0;
    margin: 0 2px;
  }
`;

export default Container;
