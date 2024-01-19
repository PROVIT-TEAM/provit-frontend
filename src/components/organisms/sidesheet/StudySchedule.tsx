/**
 * component 설명 : 사이드시트 - 스터디 일정
 * 작업자 : 김연정
 * 수정일 : 2024/1/19
 */

import { Schedule } from "./Schedule";

const dummyData = [
  {
    category: "개발공부",
    studyName: "자바스크립트 스터디",
    state: "진행중",
    title: "자바스크립트 공부",
    content: "자바스크립트 딥다이브 정독",
    time: "6시간30분",
    link: "결과물 링크",
    date: "2023.2.1",
  },
];

const StudySchedule = () => {
  return (
    <>
      <Schedule data={dummyData} />
    </>
  );
};

export default StudySchedule;
