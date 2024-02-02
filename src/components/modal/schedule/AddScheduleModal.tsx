import React from 'react'
import { Modal } from '../Modal'
import Box from '../../layouts/Box'
import Flex from '../../layouts/Flex'
import Text from '../../atoms/Text'
import { AddScheduleForm } from '../../organisms/sidesheet/AddScheduleForm'

interface ScheduleModalProps {
  category?: string
  start?: string
  end?: string
  title?: string
  content?: string
  visibility?: string

  onClose: () => void
  handleCategory: (event: any) => void
  handleStartDate: (event: any) => void
  handleEndDate: (event: any) => void
  handleTitle: (event: any) => void
  handleContent: (event: any) => void
  handleVisibility: (event: any) => void
  handleRegist: () => void
}

export function AddScheduleModal({
  category,
  start,
  end,
  title,
  content,
  visibility,
  onClose,
  handleCategory,
  handleStartDate,
  handleEndDate,
  handleTitle,
  handleContent,
  handleVisibility,
  handleRegist,
}: ScheduleModalProps) {
  return (
    <>
      <Modal
        onClose={onClose}
        width="640px"
        height="535px"
        $minWidth="640px"
        $minHeight="535px"
      >
        <Box $marginTop="0px" $marginBottom="40px">
          <Flex $flexDirection="column" $alignItems="center">
            <Text fontSize="1rem" fontWeight="700">
              새로운 일정 등록
            </Text>
          </Flex>
        </Box>

        <AddScheduleForm
          category={category}
          start={start}
          end={end}
          title={title}
          content={content}
          visibility={visibility}
          handleCategory={handleCategory}
          handleStartDate={handleStartDate}
          handleEndDate={handleEndDate}
          handleTitle={handleTitle}
          handleContent={handleContent}
          handleVisibility={handleVisibility}
          handleRegist={handleRegist}
        ></AddScheduleForm>
      </Modal>
    </>
  )
}
