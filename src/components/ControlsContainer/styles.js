import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 780px;
  margin: 0 auto;
`;

export const Panel = styled.div`
  position: absolute;
  background-color: #fff;
  height: 100vh;
  width: 500px;
  z-index: 2;
  right: 0;
  bottom: 0;
  overflow: scroll;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;

  @media (max-width: 800px) { 
    padding: 40px 80px 20px 20px;
    width: 100vw;
    bottom: 0;
    right: unset;
  }
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #000;
    content: '';
    height: 24px;
    width: 2px;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const CloseWrapper = styled.div`
  background: #fff;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  z-index: 4;
  padding: 24px;
  margin-bottom: 24px;

  @media (max-width:800px) {
    top: unset;
    bottom: 20px;
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
`;
