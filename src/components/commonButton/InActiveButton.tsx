import styled from "styled-components";

const StyledButton = styled.button<styleProps>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: ${(props) => props.$bgColor};
  margin-top: ${(props) => props.$marginTop};
  margin-right: ${(props) => props.$marginRight};
  cursor: ${(props) => props.cursor};
  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }
`;

interface props {
  text?: string;
  onClick?: () => void;
}

interface styleProps {
  $bgColor?: string;
  color?: string;
  $marginTop?: string;
  $width?: string;
  $height?: string;
  $hoverColor?: string;
  cursor?: string;
  $marginRight?: string;
}

export function InActiveButton({
  text,
  onClick,
  $bgColor,
  color,
  $marginTop,
  $width = "100%",
  $height = "56px",
  $hoverColor,
  cursor = "cursor",
  $marginRight,
}: props & styleProps) {
  const handleClickAction = () => {
    if (onClick) onClick();
  };
  return (
    <StyledButton
      onClick={handleClickAction}
      $bgColor={$bgColor}
      color={color}
      $marginTop={$marginTop}
      $width={$width}
      $height={$height}
      $hoverColor={$hoverColor}
      cursor={cursor}
      $marginRight={$marginRight}
    >
      {text}
    </StyledButton>
  );
}
