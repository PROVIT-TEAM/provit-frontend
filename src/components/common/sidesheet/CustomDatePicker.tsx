import DatePicker from 'react-datepicker'
import { ko } from 'date-fns/locale/ko'
// import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import colors from '../../../themes/colors'
import { getMonth, getYear } from 'date-fns'

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

  &.react-datepicker {
    background-color: ${colors.gray04};
  }
`
const StyledDatePicker = styled(DatePicker)<StyleProp>`
  &.styled-datepicker {
    background-color: ${colors.gray04};
    color: white;
  }
`
const CustomHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray04};
  color: ${colors.white};
  height: 100%;
  margin-top: 8px;
  padding: 0 12px 0 24px;
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
      <StyledDatePicker
        dateFormat={date.dateFormat || 'yyyy.MM.dd'}
        locale={ko}
        selected={date.startDate}
        onChange={date.updateDate}
        startDate={date.startDate}
        endDate={date.endDate}
        selectsRange
        inline
        dateFormatCalendar={'yyyy.M'}
        className="styled-datepicker"

        // renderCustomHeader={({
        //   date,
        //   prevMonthButtonDisabled,
        //   nextMonthButtonDisabled,
        //   decreaseMonth,
        //   increaseMonth,
        // }) => (
        //   <CustomHeaderContainer>
        //     <div
        //       className="btn_month btn_month-prev"
        //       onClick={decreaseMonth}
        //       // disabled={prevMonthButtonDisabled}
        //     >
        //       <img src="/static/images/arrow-black-left.png" />
        //     </div>
        //     <div className="month-day">
        //       {getYear(date)}.{getMonth(date)}
        //     </div>

        //     <div
        //       className="btn_month btn_month-next"
        //       onClick={increaseMonth}
        //       // disabled={nextMonthButtonDisabled}
        //     >
        //       <img src="/static/images/arrow-black-right.png" />
        //     </div>
        //   </CustomHeaderContainer>
        // )}
      />
    </DatePickerContainer>
  )
}
