/**
 * component 설명 : 모달 컨테이너
 * 작업자 : 김연정
 * 수정일 : 2024/1/27
 */

import { ReactNode } from 'react'
import styled from 'styled-components'
import closeModalBtn from '../../assets/img/button/closeBtn.png'

const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`

const StyledModalWrap = styled.div<styleProps>`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #2c2c2e;
  border-radius: ${(props) => props.$radius};
  padding: 30px;
  @media (max-width: 1600px) {
    width: ${(props) => props.$minWidth};
    height: ${(props) => props.$minHeight};
  }
  overflow-y: ${(props) => props.overflow || 'scroll'};
  padding: ${(props) => props.$padding};
`

const StyledCloseBtn = styled.button`
  float: right;
  font-size: 1.2rem;
  border: none;
  background-color: transparent;
  img {
    cursor: pointer;
  }
`

interface styleProps {
  width?: string
  $minWidth?: string
  height?: string
  $top?: string
  $left?: string
  $minLeft?: string
  $minHeight?: string
  $padding?: string
  $radius?: string
  overflow?: string
}

interface props {
  onClose?: () => void
  children?: ReactNode
}

export function Modal({
  width = '18.75%',
  $minWidth = '22.5%',
  height = '640px',
  $minHeight = '640px',
  onClose,
  children,
  $padding,
  $radius = '20px',
  overflow,
}: styleProps & props) {
  const closeModal = () => {
    if (onClose) {
      onClose()
    }
  }

  // 모달 외부 클릭 시 모달 닫기
  const handleContainerClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // 모달 내부에서 발생한 클릭은 모달을 닫지 않도록 함
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <StyledModalContainer onClick={handleContainerClick}>
      <StyledModalWrap
        width={width}
        height={height}
        $minWidth={$minWidth}
        $minHeight={$minHeight}
        $padding={$padding}
        $radius={$radius}
        overflow={overflow}
      >
        <StyledCloseBtn onClick={closeModal}>
          <img src={closeModalBtn} />
        </StyledCloseBtn>
        {children}
      </StyledModalWrap>
    </StyledModalContainer>
  )
}
