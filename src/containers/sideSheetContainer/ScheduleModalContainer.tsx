import React, { useState } from 'react'
import { ScheduleModal } from '../../components/modal/schedule/ScheduleModal'

interface props {
  modaltitle?: string
  btntext?: string
  setIsOpenScheduleModal?: React.Dispatch<React.SetStateAction<boolean>>
}
const ScheduleModalContainer = ({
  modaltitle,
  btntext,
  setIsOpenScheduleModal,
}: props) => {
  const [category, setCategoryValue] = useState<string>('')
  const [title, setTitleValue] = useState<string>('')
  const [start, setStartValue] = useState<string>('')
  const [end, setEndValue] = useState<string>('')
  const [content, setContentValue] = useState<string>('')
  const [visibility, setVisibility] = useState<boolean>(false)

  const handleRegist = () => {
    console.log(
      '\n category: ',
      category,
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
  const handleCategory = (category: string) => {
    setCategoryValue(category)
  }
  const handleTitle = (event: any) => {
    setTitleValue(event.target.value)
  }
  const handleDates = (dates: string[]) => {
    setStartValue(dates[0])
    setEndValue(dates[1])
  }
  const handleContent = (event: any) => {
    setContentValue(event.target.value)
  }
  const handleVisibility = (event: any) => {
    setVisibility(!visibility)
  }
  const onCloseModal = () => {
    if (setIsOpenScheduleModal) setIsOpenScheduleModal(false)
  }

  return (
    <>
      <ScheduleModal
        data={{ category, start, end, title, content, visibility }}
        handler={{
          onClose: onCloseModal,
          handleCategory: handleCategory,
          handleDates: handleDates,
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

export default ScheduleModalContainer
