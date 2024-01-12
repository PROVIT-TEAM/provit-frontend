import styled from "styled-components";

const StyledSelect = styled.select<props>`
  width: 31%;
  height: 45px;
  margin: 0 auto;
  display: inline-block;
  border-radius: 8px;
  border: none;
  background-color: #3a3a3c;
  color: #8e8e93;
  margin-bottom: 20px;
  padding-left: 4%;
  margin-right: ${(props) => props.$marginRight};
`;

interface props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
  data?: any;
  $marginRight?: string;
}
export function CommonSelectBox({ onChange, text, data, $marginRight }: props) {
  const handleSelectValue = (event: any) => {
    onChange(event);
  };
  return (
    <StyledSelect onChange={handleSelectValue} $marginRight={$marginRight}>
      <option value={text}>{text}</option>
      {data.map((item: number) => (
        <option key={item} value={item.toString()}>
          {item}
        </option>
      ))}
    </StyledSelect>
  );
}
