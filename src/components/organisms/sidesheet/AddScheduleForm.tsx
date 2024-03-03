import styled from 'styled-components'
import Box from '../../layouts/Box'
import Flex from '../../layouts/Flex'
import Label from '../../atoms/Label'
import { Input } from '../../atoms/Input'
import colors from '../../../themes/colors'
import Button from '../../atoms/Button'
import { useState } from 'react'
import fontSizes from '../../../themes/fontSizes'
import CategoryModal from '../../modal/schedule/CategoryModal'

interface StyledSelectProp {
  width?: string
  height?: string
  background?: string
  color?: string
}
const StyledSelect = styled.select<StyledSelectProp>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || '48px'};
  background-color: ${colors.gray05};
  color: ${colors.gray02};
  font-weight: bold;
  padding: 8px;
  border: none;
  border-radius: 6px;
  margin: 0px 8px 0px 0px;
`
const StyledText = styled.span`
  position: relative;
  margin-left: 10px;
  top: 1px;
  font-size: 14px;
  color: ${colors.white};
`
const StyledSpan = styled.span`
  color: ${colors.disabled};
  margin-left: 10px;
  size: 12px;
`
const StyledCheckBox = styled.input`
  margin-left: 1.7px;
  width: 18.33px;
  height: 18.33px;
  border-radius: 50%;
  border: 2px solid ${colors.disabled};
  appearance: none;
  cursor: pointer;
  &:checked {
    background-color: ${colors.mainColor};
    border-color: ${colors.mainColor};
  }
  &:checked::before {
    content: '✔';
    color: white;
    position: relative;
    top: -3px;
    left: 2px;
  }
`

const StyledCategory = styled.div<StyledSelectProp>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || '16px'};
  background-color: ${(props) => props.background || colors.gray05};
  color: ${(props) => props.color || colors.gray02};
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  border: none;
  border-radius: 6px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledSeperator = styled.span`
  color: ${colors.gray03};
  size: 14px;
  font-weight: 500;
  line-height: 1.8;
  margin-right: 5px;
`
const StyledTextArea = styled.textarea`
  height: 176px;
  border-radius: 6px;
  border: none;
  outline: none;
  resize: none;
  background-color: ${colors.gray05};
  font-size: ${fontSizes.ml};
  font-weight: 400;
  color: ${colors.white};
  margin-bottom: 8px;
  padding: 8px;
`

interface ScheduleProps {
  category?: string
  start?: string
  end?: string
  title?: string
  content?: string
  visibility?: string
  handleCategory: (event: any) => void
  handleStartDate: (event: any) => void
  handleEndDate: (event: any) => void
  handleTitle: (event: any) => void
  handleContent: (event: any) => void
  handleVisibility: (event: any) => void
  handleRegist: () => void
}
interface categoryLabelProps {
  text?: string
  color?: string
  backgroundColor?: string
  width?: string
  height?: string
}
export function AddScheduleForm({
  category,
  start,
  end,
  title,
  content,
  visibility,
  handleCategory,
  handleStartDate,
  handleEndDate,
  handleTitle,
  handleContent,
  handleVisibility,
  handleRegist,
}: ScheduleProps) {
  const [categoryBox, setCategoryBox] = useState(false)
  const [categoryLabel, setCategoryLabel] = useState<categoryLabelProps>({
    text: '분류',
    color: '',
    backgroundColor: '',
    width: '41px',
    height: '16px',
  })
  const handleCategoryBox = () => {
    setCategoryBox(!categoryBox)
  }
  const updateCategory = (
    text: string,
    background?: string,
    width?: string
  ) => {
    setCategoryLabel({
      text: text,
      color: 'white',
      backgroundColor: background,
      width: width,
    })
  }

  return (
    <>
      <Box $marginBottom="16px">
        <Flex>
          <StyledCategory
            onClick={handleCategoryBox}
            id="category"
            width={categoryLabel.width}
            color={categoryLabel.color}
            background={categoryLabel.backgroundColor}
          >
            {categoryLabel.text}
          </StyledCategory>
          {categoryBox && (
            <CategoryModal updateCategory={updateCategory}></CategoryModal>
          )}

          <StyledSelect
            name="start"
            width="102px"
            height="32px"
            value={start}
            onChange={handleStartDate}
          >
            <option value="">시작일</option>
            <option value="2024.01.28">2024.01.19</option>
            <option value="2024.01.29">2024.01.29</option>
            <option value="2024.01.30">2024.01.30</option>
          </StyledSelect>

          <StyledSeperator>-</StyledSeperator>

          <StyledSelect
            name="end"
            width="102px"
            height="32px"
            value={end}
            onChange={handleEndDate}
          >
            <option value="">종료일</option>
            <option value="2024.01.28">2024.01.19</option>
            <option value="2024.01.29">2024.01.29</option>
            <option value="2024.01.30">2024.01.30</option>
          </StyledSelect>
        </Flex>
      </Box>

      <Box>
        <Flex $flexDirection="column">
          <Label>제목</Label>
          <Input
            type="text"
            name="title"
            placeholder="일정 이름을 입력해주세요."
            value={title}
            onChange={handleTitle}
          ></Input>

          <Label>상세 설명(선택)</Label>
          <StyledTextArea
            placeholder="일정에 대한 설명을 적어주세요. 없다면 비워주셔도 됩니다."
            value={content}
            onChange={handleContent}
          ></StyledTextArea>

          <Flex>
            <StyledCheckBox
              type="checkbox"
              value={visibility}
              onChange={handleVisibility}
            />
            <StyledText>
              나만 보기
              <StyledSpan>
                나만 보기를 체크하시면 다른 사람은 확인할 수 없어요.
              </StyledSpan>
            </StyledText>
          </Flex>
          <Button
            width="100%"
            height="56px"
            $marginTop="32px"
            onClick={handleRegist}
          >
            등록하기
          </Button>
        </Flex>
      </Box>
    </>
  )
}
