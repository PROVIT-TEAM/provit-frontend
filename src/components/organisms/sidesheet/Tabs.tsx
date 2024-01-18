import { useState } from "react";
import styled from "styled-components";
import colors from "../../../themes/colors";
import fontSizes from "../../../themes/fontSizes";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import Box from "../../layouts/Box";
import Flex from "../../layouts/Flex";
import AllSchedul from "./AllSchedul";
import PersonalSchedule from "./PersonalSchedule";
import StudySchedule from "./StudySchedule";

interface props {
  activeColor?: string;
  inactiveColor?: string;
  border?: string;
  active?: boolean;
}

const TabTitle = styled.button<props>`
  color: ${(props) => (props.active ? props.activeColor : props.inactiveColor)};
  font-size: ${fontSizes.lm};
  font-weight: 700;
  height: 40px;
  /* color: #fff; */
  background-color: transparent;
  border: none;
  border-bottom: ${(props) =>
    props.active ? `1px solid ${props.activeColor}` : "1px solid transparent"};
  cursor: pointer;
`;

const Bar = styled.div`
  width: 99%;
  border: 1px solid #8e8e9321;
  margin-top: -9px;
  margin-bottom: 8px;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [checkState, setCheckState] = useState<boolean>(false);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const checkBtn = () => {
    setCheckState((prev) => !prev);
  };

  return (
    <>
      <Box $marginBottom="8px">
        <Flex $gap="4%">
          <TabTitle
            onClick={() => changeTab("all")}
            active={activeTab === "all"}
            activeColor={colors.mainColor}
            inactiveColor={colors.label}
          >
            전체
          </TabTitle>
          <TabTitle
            onClick={() => changeTab("personal")}
            active={activeTab === "personal"}
            activeColor={colors.mainColor}
            inactiveColor={colors.label}
          >
            개인일정
          </TabTitle>
          <TabTitle
            onClick={() => changeTab("study")}
            active={activeTab === "study"}
            activeColor={colors.mainColor}
            inactiveColor={colors.label}
          >
            스터디
          </TabTitle>
        </Flex>
      </Box>
      <Bar />
      <Box $marginBottom="-3px">
        <Flex $justifyContent="flex-end" width="99%" $gap="2%">
          <TabTitle onClick={checkBtn} style={{ marginTop: "-6.5px" }}>
            {checkState ? (
              <Icon iconName="check" />
            ) : (
              <Icon iconName="nonCheck" />
            )}
          </TabTitle>
          <Text fontSize="14px" fontWeight="700">
            완료된 일정 포함
          </Text>
        </Flex>
      </Box>
      {activeTab === "all" && <AllSchedul />}
      {activeTab === "personal" && <PersonalSchedule />}
      {activeTab === "study" && <StudySchedule />}
    </>
  );
};

export default Tabs;
