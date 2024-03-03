import styled from 'styled-components'

interface IconSizeProps {
  width?: string
  height?: string
  top?: string
  marginleft?: string
  marginright?: string
}

const StyledSpan = styled.span<IconSizeProps>`
  position: relative;
  top: ${(props) => props.top || undefined};
  margin-left: ${(props) => props.marginleft || undefined};
  margin-right: ${(props) => props.marginright || undefined};
`

export const PlusIcon = ({
  width,
  height,
  top,
  marginleft,
  marginright,
}: IconSizeProps) => {
  return (
    <StyledSpan top={top} marginleft={marginleft} marginright={marginright}>
      <svg
        width={width || '14'}
        height={height || '13'}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.87868 5.7V1.03334C7.87868 0.821164 7.79439 0.617681 7.64436 0.467652C7.49433 0.317623 7.29085 0.233337 7.07868 0.233337C6.86651 0.233337 6.66302 0.317623 6.51299 0.467652C6.36296 0.617681 6.27868 0.821164 6.27868 1.03334V5.7H1.61201C1.39984 5.7 1.19636 5.78429 1.04633 5.93432C0.896297 6.08435 0.812012 6.28783 0.812012 6.5C0.812012 6.71218 0.896297 6.91566 1.04633 7.06569C1.19636 7.21572 1.39984 7.3 1.61201 7.3H6.27868V11.9667C6.27868 12.1788 6.36296 12.3823 6.51299 12.5324C6.66302 12.6824 6.86651 12.7667 7.07868 12.7667C7.29085 12.7667 7.49433 12.6824 7.64436 12.5324C7.79439 12.3823 7.87868 12.1788 7.87868 11.9667V7.3H12.5453C12.7575 7.3 12.961 7.21572 13.111 7.06569C13.2611 6.91566 13.3453 6.71218 13.3453 6.5C13.3453 6.28783 13.2611 6.08435 13.111 5.93432C12.961 5.78429 12.7575 5.7 12.5453 5.7H7.87868Z"
          fill="white"
        />
      </svg>
    </StyledSpan>
  )
}
