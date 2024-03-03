/**
 * component 설명 : 사이드시트 - 스톱워치
 * 작업자 : 김연정
 * 수정일 : 2024/1/15
 */

import Box from "../../layouts/Box";
import SideSheetBox from "../../common/sidesheet/SidesheetBox";
import { CategoryStatusTitle } from "../../common";
import Text from "../../atoms/Text";
import fontSizes from "../../../themes/fontSizes";
import colors from "../../../themes/colors";
import Button from "../../atoms/Button";
import Flex from "../../layouts/Flex";
import { useEffect, useRef, useState } from "react";

export function RecodeStudy() {
  const [running, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [recodeTime, setRecodeTime] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const startStopwatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      setRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  useEffect(() => {
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    setRecodeTime(`${hours}:${minutes}:${seconds}`);
  }, [time]);

  return (
    <>
      <SideSheetBox>
        <Box>
          <Box $marginBottom="14px">
            <CategoryStatusTitle
              state="진행중"
              category="독서"
              title="개인일정"
            />
          </Box>
          <Box $marginBottom="10px">
            <Text fontSize={fontSizes.ml} fontWeight="700">
              백앤드 개발 서적 독서
            </Text>
          </Box>
          <Box $marginBottom="14px">
            <Text fontSize={fontSizes.xm} fontWeight="700">
              {recodeTime}
            </Text>
          </Box>
          <Box $marginBottom="-14px">
            <Flex $gap="4%">
              <Button
                variant="$active"
                width="48%"
                height="48px"
                $backgroundColor={colors.gray05}
                $hoverColor={colors.gray04}
                onClick={startStopwatch}
              >
                {running ? "일시정지" : "재생"}
              </Button>
              <Button variant="$active" width="48%" height="48px">
                완료하기
              </Button>
            </Flex>
          </Box>
        </Box>
      </SideSheetBox>
    </>
  );
}
