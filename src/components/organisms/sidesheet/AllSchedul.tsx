/**
 * component 설명 : 사이드시트 - 전체 일정
 * 작업자 : 김연정
 * 수정일 : 2024/1/19
 */

import { useEffect, useState } from "react";
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
  {
    category: "독서",
    studyName: "PROVIT(스터디 이름)",
    state: "완료",
    title: "영화 감상 및 독후감 작성(일정 이름)",
    content: "센과 치히로의 행방불명(결과물 제목)",
    time: "3시간20분",
    link: "결과물 링크",
    date: "2023.1.1",
  },
  {
    category: "개발공부",
    studyName: "타입스크립트 스터디",
    state: "완료",
    title: "타입스크립트 공부",
    content: "우아한 타입스크립트 책 정독",
    time: "5시간30분",
    link: "결과물 링크",
    date: "2023.3.1",
  },
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

interface props {
  checkState?: boolean;
}

const AllSchedul = ({ checkState }: props) => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    if (checkState) {
      setData(dummyData.filter((item: any) => item.state !== "완료"));
    } else {
      setData(dummyData);
    }
  }, [checkState]);

  return (
    <>
      <Schedule data={data} />
    </>
  );
};

export default AllSchedul;
