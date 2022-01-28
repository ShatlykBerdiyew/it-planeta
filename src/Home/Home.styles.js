import styled from "styled-components";

export const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  position: absolute;
  width: 476px;
  height: 452px;
  left: calc(50% - 476px / 2);
  top: calc(50% - 452px / 2);
  overflow-x: scroll;

  border: 1px solid #e0e0e0;
  box-sizing: border-box;

  backdrop-filter: blur(50px);

  border-radius: 10px;

  .mail {
    padding: 15px 20px;

    width: 416px;
    height: 52px;
    left: 30px;
    top: 63px;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
  }

  .password {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 20px;

    width: 416px;
    height: 52px;
    left: 30px;
    top: 130px;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
  }

  .passwordConfirm {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 20px;

    width: 416px;
    height: 52px;
    left: 30px;
    top: 197px;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;

    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
  }

  .submit {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px 20px;

    width: 416px;
    height: 52px;
    left: 30px;
    top: 264px;

    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.8) 100%
    );
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 10px;

    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 119px;
      height: 18px;

      background: transparent;
      border: none;
      outline: none;

      font-family: Manrope;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 18px;

      letter-spacing: 0.02em;

      color: #1f1a2d;

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 15px;
    }
  }
`;
