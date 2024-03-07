/**
 * component 설명 : 사이드시트
 * 작업자 : 김연정
 * 수정일 : 2024/1/15
 *
 * 작업자 : 이원제
 * 수정일 : 2024/01/31
 * 수정사항 : 일정등록 버튼 추가
 */

import Box from '../../layouts/Box'
import colors from '../../../themes/colors'
import { Calender } from './Calender'
import { AchievementRate } from './AchievementRate'
import { RecodeStudy } from './RecodeStudy'
import Tabs from './Tabs'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import AddScheduleModalContainer from '../../../containers/sideSheetContainer/ScheduleModalContainer'
import { useState } from 'react'
import { PlusIcon } from '../../../assets/img/button/plus_icon'

const StyledSideSheetContainer = styled.div`
  width: 22.916%;
  height: 88vh;
  max-height: 88vh;
  background-color: ${colors.gray07};
  padding: 24px;
  overflow-y: scroll;
`

export function SideSheet() {
  const [isOpenScheduleModal, setIsOpenScheduleModal] = useState<boolean>(false)
  const handleSchedule = () => {
    setIsOpenScheduleModal(true)
  }
  return (
    <>
      <StyledSideSheetContainer>
        <Box $marginBottom="16px">
          <Calender />
        </Box>
        <Box $marginBottom="16px">
          <AchievementRate />
        </Box>
        <Box $marginBottom="20px">
          <RecodeStudy />
        </Box>
        <Box>
          <Tabs />
          <Button
            width="100%"
            height="56px"
            onClick={handleSchedule}
            $backgroundColor={colors.gray07}
          >
            <PlusIcon width="24" height="24" top="5px" marginright="10px" />
            추가하기
          </Button>
          {isOpenScheduleModal && (
            <AddScheduleModalContainer
              modaltitle="새로운 일정 등록"
              btntext="등록하기"
              setIsOpenScheduleModal={setIsOpenScheduleModal}
            />
          )}
        </Box>
      </StyledSideSheetContainer>
    </>
  )
}
