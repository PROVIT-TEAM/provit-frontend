import { createGlobalStyle } from 'styled-components'
import colors from '../themes/colors'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ol, ul {
    list-style: none;
  }
  select:focus {
    outline: none;
  }

  /* date picker style */
  .react-datepicker {
    background-color: ${colors.gray04};
    border: none;
    border-radius: 8px;
  }
  .react-datepicker__header {
    background-color: ${colors.gray04};
    border-bottom: none;

  }
  .react-datepicker__current-month {
    margin: 6px 0px;
  }
  .react-datepicker__navigation--next {
    margin-top: 5px;
    right: 60px;
  }
  .react-datepicker__navigation--previous {
    margin-top: 5px;
    left: 60px;
  }
  .react-datepicker__day--outside-month {
      cursor: default;
      visibility: hidden;
  }
  .react-datepicker__month {
    margin-top: 0px;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected
  {
  background-color: ${colors.mainColor};
  border-radius: 50%;

  &:hover {
    border-radius: 50%;
    background-color: ${colors.mainColor};
    }
  }
/* day: 주말 */
.react-datepicker__day:nth-child(1){ 
    color:red;
}
.react-datepicker__day:nth-child(7){
    color:#8685FF;
}

/* day-name: 요일 */
.react-datepicker__day-name:nth-child(1){
    color: #FF5555;
}
.react-datepicker__day-name:nth-child(7){
    color:#8685FF;
}
  
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header, 
  .react-datepicker__day-name,
  .react-datepicker__day{
    color: white;
  }
`
