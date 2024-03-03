/**
 * component 설명 : 사이드시트 - 스케줄 일정
 * 작업자 : 김연정
 * 수정일 : 2024/1/19
 */

import Box from '../../layouts/Box'
import SideSheetBox from '../../common/sidesheet/SidesheetBox'
import { CategoryStatusTitle } from '../../common'
import Text from '../../atoms/Text'
import fontSizes from '../../../themes/fontSizes'
import Icon from '../../atoms/Icon'
import styled from 'styled-components'
import colors from '../../../themes/colors'
import Button from '../../atoms/Button'
import Flex from '../../layouts/Flex'
import { Menu } from '../../common/sidesheet/Menu'
import { useState } from 'react'
import { ConfirmModal } from '../../modal'

const Span = styled.span<props>`
  font-size: ${fontSizes.mm};
  position: relative;
  top: -4.5px;
  left: 2%;
  color: ${(props) => props.color || '#fff'};
  margin-right: 6%;
`

const Date = styled.span<props>`
  font-size: ${fontSizes.mm};
  position: relative;
  top: 3px;
  color: ${(props) => props.color || '#fff'};
  float: right;
  text-align: right;
`

const StyledMenuBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

interface props {
  color?: string
}

interface dataProps {
  data?: any
}

export function Schedule({ data }: dataProps) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)
  const [itemState, setItemState] = useState<string>('')
  const [isOpenStartScheduleModal, setIsOpenStartScheduleModal] =
    useState<boolean>(false)

  const openMenu = (index: number, item: { state: string }) => {
    setOpenMenuIndex(index === openMenuIndex ? null : index)
    setItemState(item.state)
  }

  const handleStartSchedule = () => {
    setIsOpenStartScheduleModal(true)
  }

  const handleCloseStartScheduleModla = () => {
    setIsOpenStartScheduleModal(false)
  }
  return (
    <>
      {data?.map((item: any, index: number) => (
        <Box $marginBottom="8px" key={index}>
          <SideSheetBox>
            <Box style={{ position: 'relative' }}>
              <Box $marginBottom="17.5px">
                <CategoryStatusTitle
                  state={item.state}
                  category={item.category}
                  title={item.studyName}
                />
                <Flex $justifyContent="right" $marginTop="-27px">
                  <StyledMenuBtn onClick={() => openMenu(index, item)}>
                    <Icon iconName="menu" />
                  </StyledMenuBtn>
                </Flex>
                {openMenuIndex === index && <Menu itemState={itemState} />}
              </Box>
              <Box $marginBottom="24px">
                <Text fontSize={fontSizes.ml}>{item?.title}</Text>
                <Text fontSize={fontSizes.mm} color="#8E8E93">
                  {item?.content}
                </Text>
              </Box>
              <Box $marginBottom="-5px">
                {item.state !== '' ? (
                  <>
                    <Icon iconName="clock" />
                    <Span>{item?.time}</Span>
                    <Date color={colors.label}>{item?.date}</Date>
                  </>
                ) : (
                  <Button
                    width="100%"
                    height="32px"
                    variant="$active"
                    fontSize={fontSizes.mm}
                    fontWeight="500"
                    $marginBottom="12px"
                    onClick={handleStartSchedule}
                  >
                    시작하기
                  </Button>
                )}
                {item.state === '완료' && (
                  <>
                    <Icon iconName="clip" />
                    <Span>{item?.link}</Span>
                  </>
                )}
              </Box>
            </Box>
          </SideSheetBox>
        </Box>
      ))}
      {isOpenStartScheduleModal && (
        <ConfirmModal
          title1="일정을 시작하시겠습니까?"
          contnet="일정을 시작하시면 완료 후, 다른 일정을 시작할 수 있습니다."
          buttonTxt1="취소"
          buttonTxt2="시작하기"
          setShowConfirmModal={setIsOpenStartScheduleModal}
          handleAction={handleCloseStartScheduleModla}
        />
      )}
    </>
  )
}
