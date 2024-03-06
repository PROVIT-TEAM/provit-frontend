import React, { ChangeEvent, useState } from 'react'
import { AddScheduleModal } from '../../components/modal/schedule'
import { NewScheduleModal } from '../../components/modal/schedule/NewScheduleModal'

interface props {
  modaltitle?: string
  btntext?: string
  setIsOpenScheduleModal?: React.Dispatch<React.SetStateAction<boolean>>
}
const AddScheduleModalContainer = ({
  modaltitle,
  btntext,
  setIsOpenScheduleModal,
}: props) => {
  const [category, setCategoryValue] = useState<string>('')
  const [title, setTitleValue] = useState<string>('')
  const [start, setStartValue] = useState<string>('')
  const [end, setEndValue] = useState<string>('')
  const [content, setContentValue] = useState<string>('')
  const [visibility, setVisibility] = useState<string>('')

  const handleRegist = () => {
    console.log(
      '\n startDate: ',
      start,
      '\n endDate: ',
      end,
      '\n title: ',
      title,
      '\n content: ',
      content,
      '\n visibility: ',
      visibility
    )
  }
  const handleCategory = (event: any) => {
    setCategoryValue(event.target.value)
  }
  const handleTitle = (event: any) => {
    setTitleValue(event.target.value)
  }
  const handleStartDate = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value
    console.log(selected)
    setStartValue(event.target.value)
  }
  const handleEndDate = (event: any) => {
    setEndValue(event.target.value)
  }
  const handleContent = (event: any) => {
    setContentValue(event.target.value)
  }
  const handleVisibility = (event: any) => {
    setVisibility('true')
  }
  const onCloseModal = () => {
    if (setIsOpenScheduleModal) setIsOpenScheduleModal(false)
  }

  return (
    <>
      {/* <AddScheduleModal
        modaltitle={modaltitle}
        category={category}
        start={start}
        end={end}
        title={title}
        content={content}
        onClose={onCloseModal}
        handleCategory={handleCategory}
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
        handleTitle={handleTitle}
        handleContent={handleContent}
        handleVisibility={handleVisibility}
        handleRegist={handleRegist}
      ></AddScheduleModal> */}
      <NewScheduleModal
        data={{ category, start, end, title, content, visibility }}
        handler={{
          onClose: onCloseModal,
          handleCategory: handleCategory,
          handleStartDate: handleStartDate,
          handleEndDate: handleEndDate,
          handleTitle: handleTitle,
          handleContent: handleContent,
          handleVisibility: handleVisibility,
          handleRegist: handleRegist,
        }}
        text={{ modaltitle, btntext }}
      />
    </>
  )
}

export default AddScheduleModalContainer
