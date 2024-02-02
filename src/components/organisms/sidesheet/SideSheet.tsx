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
import AddScheduleModalContainer from '../../../containers/sideSheetContainer/AddScheduleModalContainer'
import { useState } from 'react'

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
          <Button width="392px" height="56px" onClick={handleSchedule}>
            일정 등록하기
          </Button>
          {isOpenScheduleModal && (
            <AddScheduleModalContainer
              setIsOpenScheduleModal={setIsOpenScheduleModal}
            />
          )}
        </Box>
      </StyledSideSheetContainer>
    </>
  )
}
