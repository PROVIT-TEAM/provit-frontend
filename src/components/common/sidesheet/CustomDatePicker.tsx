import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { ko } from 'date-fns/locale/ko'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'

interface DateProp {
  startDate: any
  endDate: any
  dateFormat?: string
  updateDate: (dates: any) => void
}
interface StyleProp {
  width?: string
  height?: string
  position?: string
  top?: string
  bottom?: string
  left?: string
  right?: string
}
const DatePickerContainer = styled.div`
  position: absolute;
  left: 85px;
`

export function CustomDatePicker({
  date,
  style,
}: {
  date: DateProp
  style?: StyleProp
}) {
  return (
    <DatePickerContainer>
      <DatePicker
        dateFormat={date.dateFormat || 'YYYY.MM.DD'}
        locale={ko}
        selected={date.startDate}
        onChange={date.updateDate}
        startDate={date.startDate}
        endDate={date.endDate}
        selectsRange
        inline
      />
    </DatePickerContainer>
  )
}
