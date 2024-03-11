import React, { useState } from 'react'
import Flex from '../../layouts/Flex'
import { Modal } from '../Modal'
import Box from '../../layouts/Box'
import Text from '../../atoms/Text'
import styled from 'styled-components'
import colors from '../../../themes/colors'
import CategoryModal from './CategoryModal'
import Label from '../../atoms/Label'
import { Input } from '../../atoms/Input'
import Button from '../../atoms/Button'
import fontSizes from '../../../themes/fontSizes'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { format, getDate, getDay, getMonth, getYear } from 'date-fns'
import { CustomDatePicker } from '../../common/sidesheet/CustomDatePicker'

interface ScheduleDataProp {
  category?: string
  start?: string
  end?: string
  title?: string
  content?: string
  visibility?: boolean
}
interface ModalHandlerProp {
  onClose: () => void
  handleCategory: (event: any) => void
  handleDates: (event: any) => void
  handleTitle: (event: any) => void
  handleContent: (event: any) => void
  handleVisibility: (event: any) => void
  handleRegist: () => void
}
interface ModalTextProp {
  modaltitle?: string
  btntext?: string
}
interface categoryLabelProps {
  text?: string
  color?: string
  backgroundColor?: string
  width?: string
  height?: string
}

export function ScheduleModal({
  data,
  handler,
  text,
}: {
  data: ScheduleDataProp
  handler: ModalHandlerProp
  text: ModalTextProp
}) {
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
    handler.handleCategory(text)
  }
  const [getMoment, setMoment] = useState(moment())
  const today: any = getMoment
  const [datepicker, isOpenDatePicker] = useState<boolean>()
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const optionss: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }
  const updateDate = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
    handler.handleDates(dates)
  }
  const datePickerHandler = () => {
    isOpenDatePicker(!datepicker)
  }

  return (
    <>
      <Modal
        onClose={handler.onClose}
        width="640px"
        height="535px"
        $minWidth="640px"
        $minHeight="535px"
        overflow="none"
      >
        <Box $marginTop="0px" $marginBottom="40px">
          <Flex $flexDirection="column" $alignItems="center">
            <Text fontSize="1rem" fontWeight="700">
              {text.modaltitle || 'PROVIT'}
            </Text>
          </Flex>
        </Box>

        <Box $marginBottom="16px">
          <Flex>
            <StyledCategory
              onClick={handleCategoryBox}
              id="category"
              width={categoryLabel.width}
              color={categoryLabel.color}
              background={categoryLabel.backgroundColor}
              onChange={handler.handleCategory}
            >
              {categoryLabel.text}
            </StyledCategory>
            {categoryBox && (
              <CategoryModal updateCategory={updateCategory}></CategoryModal>
            )}
            <StyledDateLabel
              width="102px"
              height="32px"
              onClick={datePickerHandler}
            >
              <Text fontSize={fontSizes.mm} fontWeight="500">
                {startDate
                  ?.toLocaleDateString('ko-KR', optionss)
                  .replaceAll('. ', '.')
                  .slice(0, -1) || today.format('yyyy.MM.DD')}
              </Text>
            </StyledDateLabel>

            <StyledSeperator>-</StyledSeperator>

            <StyledDateLabel
              width="102px"
              height="32px"
              onClick={datePickerHandler}
            >
              <Text fontSize={fontSizes.mm} fontWeight="500">
                {endDate
                  ?.toLocaleDateString('ko-KR', optionss)
                  .replaceAll('. ', '.')
                  .slice(0, -1) || today.format('yyyy.MM.DD')}
              </Text>
            </StyledDateLabel>
          </Flex>
        </Box>
        {datepicker && (
          <CustomDatePicker
            date={{
              startDate,
              endDate,
              dateFormat: undefined,
              updateDate,
            }}
          />
        )}

        <Box>
          <Flex $flexDirection="column">
            <Label>제목</Label>
            <Input
              type="text"
              name="title"
              placeholder="일정 이름을 입력해주세요."
              value={data.title}
              onChange={handler.handleTitle}
            ></Input>

            <Label>상세 설명(선택)</Label>
            <StyledTextArea
              placeholder="일정에 대한 설명을 적어주세요. 없다면 비워주셔도 됩니다."
              value={data.content}
              onChange={handler.handleContent}
            ></StyledTextArea>

            <Flex>
              <StyledCheckBox
                type="checkbox"
                checked={data.visibility}
                onChange={handler.handleVisibility}
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
              onClick={handler.handleRegist}
            >
              {text.btntext}
            </Button>
          </Flex>
        </Box>
      </Modal>
    </>
  )
}

interface StyledSelectProp {
  width?: string
  height?: string
  background?: string
  color?: string
}
const StyledCategory = styled.div<StyledSelectProp>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || '16px'};
  background-color: ${(props) => props.background || colors.gray05};
  color: ${(props) => props.color || colors.gray02};
  font-size: ${fontSizes.mm};
  font-weight: 500;
  padding: 8px;
  border: none;
  border-radius: 6px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledDateLabel = styled.div<StyledSelectProp>`
  width: ${(props) => props.width};
  height: ${(props) => props.height || '16px'};
  background-color: ${(props) => props.background || colors.gray05};
  color: ${(props) => props.color || colors.gray02};
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
