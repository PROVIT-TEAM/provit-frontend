import styled from 'styled-components'
import colors from '../../../themes/colors'
import fontSizes from '../../../themes/fontSizes'
import { useState } from 'react'

const StyledBox = styled.div`
  width: 286px;
  height: 124px;
  position: absolute;
  top: 125px;
  left: 26px;
  color: ${colors.gray02};
  background-color: ${colors.gray05};
  border-radius: 6px;
`
const StyledInput = styled.input`
  height: 48px;
  font-size: ${fontSizes.ml};
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid #666;
  background-color: #3a3a3c;
  /* padding-left: 5%; */
  text-indent: 3%;
  border: none;
  color: ${colors.white};
  &::placeholder {
    color: ${colors.disabled};
  }
  &:focus {
    outline: none;
  }
`
const StyledBar = styled.span`
  width: 100%;
  height: 2px;
  margin-bottom: 10px;
  display: block;
  background-color: #636366;
`
interface LabelProps {
  labelLenght?: string
}
const StyledLabel = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  min-width: 72px;
  width: ${(props) => props.labelLenght || '142px'};
  height: 25px;
  padding: 4px 8px;
  margin-left: 12px;
  background-color: #673932;
  border-radius: 8px;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`
const StyledPlusBtn = styled.span`
  height: 100%;
  margin-right: 5px; /* adjust the margin as needed */
  font-size: 20px;
  font-weight: 500;
  position: relative;
  top: -3px;
  cursor: pointer;
`
const StyledDelBtn = styled.span`
  height: 100%;
  margin-left: 8px;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  top: -3px;
  cursor: pointer;
`
interface CategoryModalProps {
  updateCategory: (text: string, background?: string, width?: string) => void
}
const CategoryModal = ({ updateCategory }: CategoryModalProps) => {
  const [categoryLabel, setCategoryLabel] = useState<string>('')
  const [createdLabel, setCreatedLabel] = useState<string>('')
  const [labelLenght, setLabelLenght] = useState<string>('')
  const [createdLabelLenght, setCreatedLabelLenght] = useState<string>('')
  const [labelColor, setLabelColor] = useState<string>('#673932')
  const handleLabel = (event: any) => {
    // console.log(event.target.value)
    setCategoryLabel(event.target.value)
    setLabelLenght(`${event.target.value.length * 11 + 36}px`)
  }
  const PlusIcon = () => (
    <svg
      width="14"
      height="13"
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
  )
  const CloseIcon = () => (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9775 1.73266C11.0519 1.65838 11.1108 1.57018 11.1511 1.47311C11.1913 1.37603 11.212 1.27198 11.2121 1.1669C11.2121 1.06181 11.1914 0.957753 11.1513 0.860655C11.1111 0.763557 11.0521 0.675326 10.9779 0.600998C10.9036 0.526669 10.8154 0.4677 10.7183 0.427458C10.6212 0.387215 10.5172 0.366486 10.4121 0.366455C10.307 0.366424 10.203 0.387091 10.1059 0.427277C10.0088 0.467463 9.92053 0.52638 9.8462 0.600664L6.07887 4.36866L2.31087 0.600664C2.1591 0.458915 1.9582 0.381675 1.75057 0.385246C1.54294 0.388817 1.34481 0.47292 1.19802 0.619804C1.05122 0.766688 0.967233 0.964862 0.963784 1.1725C0.960335 1.38013 1.03769 1.58099 1.17953 1.73266L4.94753 5.5L1.17953 9.26733C1.06817 9.37946 0.992452 9.52202 0.961898 9.67707C0.931343 9.83212 0.947317 9.99275 1.00781 10.1387C1.0683 10.2847 1.17062 10.4096 1.30188 10.4976C1.43314 10.5856 1.5875 10.6328 1.74553 10.6333C1.9502 10.6333 2.15487 10.5553 2.31087 10.3993L6.07887 6.63133L9.8462 10.3993C9.92039 10.4738 10.0086 10.5328 10.1056 10.5731C10.2027 10.6134 10.3068 10.6342 10.4119 10.6342C10.517 10.6342 10.621 10.6134 10.7181 10.5731C10.8152 10.5328 10.9033 10.4738 10.9775 10.3993C11.0519 10.325 11.1109 10.2368 11.1512 10.1397C11.1914 10.0426 11.2122 9.93846 11.2122 9.83333C11.2122 9.7282 11.1914 9.6241 11.1512 9.52698C11.1109 9.42986 11.0519 9.34163 10.9775 9.26733L7.2102 5.5L10.9775 1.73266Z"
        fill="white"
      />
    </svg>
  )
  const createLabel = () => {
    setCreatedLabel(categoryLabel)
    setCreatedLabelLenght(labelLenght)
    updateCategory(categoryLabel, labelColor)
  }
  const deleteLabel = () => {
    setCreatedLabel('')
  }

  return (
    <>
      <StyledBox>
        <StyledInput
          placeholder="ex. 사이드 프로젝트"
          onChange={handleLabel}
        ></StyledInput>
        <StyledBar></StyledBar>

        {createdLabel ? (
          <StyledLabel labelLenght={createdLabelLenght}>
            {createdLabel}
            <StyledDelBtn onClick={deleteLabel}>
              <CloseIcon />
            </StyledDelBtn>
          </StyledLabel>
        ) : (
          <StyledLabel labelLenght={labelLenght}>
            <StyledPlusBtn onClick={createLabel}>
              <PlusIcon />
            </StyledPlusBtn>
            {categoryLabel}
          </StyledLabel>
        )}
      </StyledBox>
    </>
  )
}

export default CategoryModal
