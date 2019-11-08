import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  .product-list { 
    max-width: 700px;
    margin: 20px auto 0;
    padding: 0 20px;
  }

  .product-list article { 
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .product-list article p { 
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  .product-list article a {
    height: 42px;
    border-radius: 5px;
    padding: 7px;
    border: 2px solid #da552f;
    background: none;
    margin-top: 10px;
    color: #da552f;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-list article a:hover {
    background: #da552f;
    color: #fff;
  }

  .product-list .actions { 
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .product-list .actions button { 
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background: #da552f;
    color: #fff;
    font-size: 16px;
    font-weight:bold;
  }

  .product-list .actions button:hover { 
    cursor: pointer;
    opacity: 0.7;
  }

  .product-list .actions button[disabled] { 
    cursor: default;
    opacity: 0.5;
  }
`;