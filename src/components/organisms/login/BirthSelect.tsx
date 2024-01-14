/**
 * component 설명 : 생년월일 select box
 * 작업자 : 김연정
 * 수정일 : 2024/1/14
 */

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CommonSelectBox } from "../../commonInput";

interface props {
  setBirth: Dispatch<SetStateAction<string>>;
}

export function BirthSelect({ setBirth }: props) {
  const currentYear = new Date().getFullYear();
  const [yearOption, setYearOption] = useState<number[]>([]);
  const [monthOption, setMonthOption] = useState<number[]>([]);
  const [dayOption, setDayOption] = useState<number[]>([]);
  const [selectYearValue, setSelectYearValue] = useState<string>("년");
  const [selectMonthValue, setSelectMonthValue] = useState<string>("월");
  const [selectDayValue, setSelectDayValue] = useState<string>("일");

  useEffect(() => {
    getYear();
    getMonth();
    getDate();
  }, []);

  useEffect(() => {
    if (
      selectYearValue !== "년" &&
      selectMonthValue !== "월" &&
      selectDayValue !== "일"
    ) {
      setBirth(`${selectYearValue}-${selectMonthValue}-${selectDayValue}`);
    }
  }, [selectYearValue, selectMonthValue, selectDayValue]);

  const getYear = () => {
    let year = [];
    for (let i = 1900; i <= currentYear; i++) {
      year.push(i);
    }
    setYearOption(year);
  };

  const getMonth = () => {
    let month = [];
    for (let i = 1; i <= 12; i++) {
      month.push(i);
    }
    setMonthOption(month);
  };

  const getDate = () => {
    let day = [];
    for (let i = 1; i <= 31; i++) {
      day.push(i);
    }
    setDayOption(day);
  };

  const handleYear = (event: any) => {
    setSelectYearValue(event.target.value);
  };

  const handleMonth = (event: any) => {
    setSelectMonthValue(event.target.value);
  };

  const handleDay = (event: any) => {
    setSelectDayValue(event.target.value);
  };

  return (
    <>
      <CommonSelectBox
        onChange={handleYear}
        text="년"
        data={yearOption}
        $marginRight="3%"
      />
      <CommonSelectBox
        onChange={handleMonth}
        text="월"
        data={monthOption}
        $marginRight="3%"
      />
      <CommonSelectBox onChange={handleDay} text="일" data={dayOption} />
    </>
  );
}
