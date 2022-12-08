import React from "react";
import styled from "styled-components";
import mark from "../../images/mark.svg";

interface Props {
  isChecked: boolean;
  handleClick: () => void;
}

interface CheckMarkProps {
  checked: boolean;
}

const CheckMark = styled.img<CheckMarkProps>`
  width: 15px;
  opacity: ${(props) => (props.checked ? 1 : 0)};
`;

const CustomCheckbox = styled.div<CheckMarkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  ${(props) => props.checked && `background-color: #ffca6e;`}
`;

function Checkbox({ isChecked, handleClick }: Props) {
  return (
    <CustomCheckbox onClick={handleClick} checked={isChecked}>
      <CheckMark src={mark} alt="" checked={isChecked} />
    </CustomCheckbox>
  );
}

export default Checkbox;
