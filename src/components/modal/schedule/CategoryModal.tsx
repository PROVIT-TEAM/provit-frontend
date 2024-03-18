import styled from 'styled-components'
import colors from '../../../themes/colors'
import fontSizes from '../../../themes/fontSizes'
import { useState } from 'react'
import { PlusIcon } from '../../../assets/img/button/plus_icon'
import { CloseIcon } from '../../../assets/img/button/close_icon'
import Icon from '../../atoms/Icon'
import LabelColorMenu from '../../common/sidesheet/LabelColorMenu'

const StyledBox = styled.div`
  width: 290px;
  height: 124px;
  position: absolute;
  top: 130px;
  left: 29px;
  color: ${colors.gray02};
  background-color: ${colors.gray05};
  border-radius: 8px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
`
const StyledInput = styled.input`
  height: 48px;
  font-size: ${fontSizes.ml};
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid #666;
  background-color: #3a3a3c;
  padding-left: 5%;
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
  width: 90%;
  height: 1px;
  margin-bottom: 10px;
  display: block;
  background-color: #636366;
  position: relative;
  left: 14px;
`
interface LabelProps {
  labelLenght?: string
  background?: string
}
const StyledLabel = styled.div<LabelProps>`
  display: flex;
  align-items: center;
  min-width: 72px;
  width: ${(props) => props.labelLenght || '142px'};
  height: 25px;
  padding: 4px 8px;
  margin-left: 12px;
  background-color: ${(props) => props.background || '#673932'};
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
const StyledMenuBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
const Styledli = styled.li`
  display: flex;
  align-items: center;
  padding-right: 13px;
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
  const [colormenu, setOpenColorMenu] = useState<boolean>(false)
  const handleLabel = (event: any) => {
    // console.log(event.target.value)
    setCategoryLabel(event.target.value)
    setLabelLenght(`${event.target.value.length * 11 + 36}px`)
  }

  const createLabel = () => {
    setCreatedLabel(categoryLabel)
    setCreatedLabelLenght(labelLenght)
    updateCategory(categoryLabel, labelColor)
  }
  const deleteLabel = () => {
    setCreatedLabel('')
  }
  const openColorMenu = () => {
    setOpenColorMenu(!colormenu)
  }
  const changeColor = (color: string) => {
    setLabelColor(color)
    updateCategory(categoryLabel, color)
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
          <ul>
            <Styledli>
              <StyledLabel
                labelLenght={createdLabelLenght}
                background={labelColor}
              >
                {createdLabel}
                <StyledDelBtn onClick={deleteLabel}>
                  <CloseIcon />
                </StyledDelBtn>
              </StyledLabel>

              <StyledMenuBtn
                onClick={openColorMenu}
                style={{ marginLeft: 'auto' }}
              >
                <Icon iconName="menu" />
              </StyledMenuBtn>
            </Styledli>
            {colormenu && (
              <LabelColorMenu
                labelColor={labelColor}
                setLabelColor={changeColor}
              />
            )}
          </ul>
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
