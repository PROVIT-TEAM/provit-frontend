import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../layouts/Flex";

const StyledSelectbox = styled.div`
  cursor: pointer;
  width: 96px;
  height: 48px;
  z-index: 10;
  text-align: center;
  vertical-align: middle;
  background: #3a3a3c;
  border-radius: 8px;
  vertical-align: middle;
  line-height: 48px;
`;

const StyledSelectedLabel = styled.span`
  display: inline-block;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondaryHolder};
`;

type UlProps = {
  dropActive?: boolean;
};

const StyledOptionList = styled.ul<UlProps>`
  list-style-type: none;
  overflow-y: scroll;
  border-radius: 8px;
  background: #3a3a3c;
  max-height: ${(props) => (props?.dropActive ? "164px" : "0")};
  margin: 8px auto;
  padding: 0px;
  &::-webkit-scrollbar {
    // scrollbar
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    // scrollbar의 배경부분 설정
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    // scrollbar의 bar 부분 설정
    border-radius: 8px 8px;
    background: gray;
  }
  &::-webkit-scrollbar-button {
    // scrollbar의 상하단 위/아래 이동 버튼
    width: 0;
    height: 0;
  }
`;
const StyledOptionItem = styled.li`
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding-left: 4px;
  color: ${(props) => props.theme.colors.secondaryHolder};
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const DateSelect = (props: any) => {
  const today = new Date();
  const MAX = today.getFullYear();
  const MIN = MAX - 60;
  const years = [...Array(MAX - MIN + 1)].map((v, i) => i + MIN);
  const months = [...Array(12)].map((v, i) => i + 1);
  const days = [...Array(31)].map((v, i) => i + 1);

  const { date, setDate } = props;
  const [dropActive, setDropActive] = useState({
    year: false,
    month: false,
    day: false,
  });

  const onDropClick = (event: any) => {
    setDropActive({ ...dropActive, [event.target.id]: true });
  };
  const onItemClick = (event: any) => {
    setDate({
      ...date,
      [event.target.closest("ul").id]: event.target.value,
    });
    setDropActive({ ...dropActive, [event.target.closest("ul").id]: false });
  };

  return (
    <Flex flexDirection="row" gap="8px">
      <StyledSelectbox>
        {date.year ? (
          <StyledSelectedLabel id="year" color="white" onClick={onDropClick}>
            {date.year}
          </StyledSelectedLabel>
        ) : (
          <StyledSelectedLabel id="year" onClick={onDropClick}>
            년
          </StyledSelectedLabel>
        )}

        <StyledOptionList id="year" dropActive={dropActive.year}>
          {years.map((item: any) => (
            <StyledOptionItem key={item} value={item} onClick={onItemClick}>
              {item}
            </StyledOptionItem>
          ))}
        </StyledOptionList>
      </StyledSelectbox>

      <StyledSelectbox>
        {date.month ? (
          <StyledSelectedLabel id="month" color="white" onClick={onDropClick}>
            {date.month}
          </StyledSelectedLabel>
        ) : (
          <StyledSelectedLabel id="month" onClick={onDropClick}>
            월
          </StyledSelectedLabel>
        )}

        <StyledOptionList id="month" dropActive={dropActive.month}>
          {months.map((item: any) => (
            <StyledOptionItem key={item} value={item} onClick={onItemClick}>
              {item}
            </StyledOptionItem>
          ))}
        </StyledOptionList>
      </StyledSelectbox>

      <StyledSelectbox>
        {date.day ? (
          <StyledSelectedLabel id="day" color="white" onClick={onDropClick}>
            {date.day}
          </StyledSelectedLabel>
        ) : (
          <StyledSelectedLabel id="day" onClick={onDropClick}>
            일
          </StyledSelectedLabel>
        )}

        <StyledOptionList id="day" dropActive={dropActive.day}>
          {days.map((item: any) => (
            <StyledOptionItem key={item} value={item} onClick={onItemClick}>
              {item}
            </StyledOptionItem>
          ))}
        </StyledOptionList>
      </StyledSelectbox>
    </Flex>
  );
};

export default DateSelect;
