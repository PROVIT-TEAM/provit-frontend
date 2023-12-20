import styled from "styled-components";

const StyledButton = styled.button<styleProps>`
  width: 100%;
  height: 56px;
  color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${(props) => props.$bgColor};
  margin-top: ${(props) => props.$marginTop};
`;

interface props {
  text?: string;
}

interface styleProps {
  $bgColor?: string;
  color?: string;
  $marginTop?: string;
}

export function InActiveButton({
  text,
  $bgColor,
  color,
  $marginTop,
}: props & styleProps) {
  return (
    <StyledButton $bgColor={$bgColor} color={color} $marginTop={$marginTop}>
      {text}
    </StyledButton>
  );
}
