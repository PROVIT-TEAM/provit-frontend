import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../../themes/colors'
import Label from '../../atoms/Label'

interface LabelColor {
  code: string
  name: string
}
const labelColors: LabelColor[] = [
  { code: '#EB144C', name: '빨간색' },
  { code: '#FF6900', name: '주황색' },
  { code: '#FCB900', name: '노란색' },
  { code: '#00D084', name: '초록색' },
  { code: '#0693E3', name: '파란색' },
  { code: '#BA68C8', name: '보라색' },
  { code: '#F78DA7', name: '분홍색' },
]

interface ComponentProp {
  labelColor: string
  setLabelColor: (color: string) => void
}
const LabelColorMenu = (prop: ComponentProp) => {
  // 선택된 색상 상태
  const [selectedColor, setSelectedColor] = useState<LabelColor | null>(null)

  // 색상 선택 핸들러
  const selectColor = (color: LabelColor) => {
    setSelectedColor(color)
    prop.setLabelColor(color.code)
  }

  return (
    <>
      <MenuContainer>
        <Label variant="medium">색상</Label>
        <Styledul>
          {labelColors.map((color, index) => (
            <Styledli key={index} onClick={() => selectColor(color)}>
              <ColorPreview color={color.code} />
              <ColorName>{color.name}</ColorName>
            </Styledli>
          ))}
        </Styledul>
      </MenuContainer>
    </>
  )
}

const MenuContainer = styled.div`
  padding: 8px;
  width: 186px;
  height: 247px;
  position: absolute;
  left: 255px;
  color: ${colors.gray02};
  background-color: ${colors.gray05};
  border-radius: 8px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
`
const Styledul = styled.ul`
  margin-top: 6px;
`
const Styledli = styled.li`
  display: flex;
  align-items: center;
  width: 170px;
  height: 22px;
  margin: 0px 0px 4px 0px;
  padding: 2px 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.gray04};
    cursor: pointer;
  }
`
interface PreviewProp {
  color?: string
}
const ColorPreview = styled.div<PreviewProp>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${(props) => props.color || null};
`
const ColorName = styled.span`
  margin-left: 6px;
  font-size: 12px;
  color: ${colors.white};
`
export default LabelColorMenu
