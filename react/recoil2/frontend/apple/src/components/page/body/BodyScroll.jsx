import React from 'react'
import { StyledScrollPage, BodyScrollWrap, CenterDiv, Check, Checkbox, ScrollH1, ScrollH2, Section3 } from '../../style/BodyScroll.styled'
import { ScrollContainer, ScrollPage, Animator, Sticky, Zoom, batch, MoveOut, Fade, StickyIn, FadeIn, ZoomIn, Move, MoveIn } from 'react-scroll-motion'
import iphone1 from "../../img/iphone1.png"
import iphone2 from "../../img/iphone2.png"
import iphone3 from "../../img/iphone3.png"
import iphone4 from "../../img/iphone4.png"

const BodyScroll = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
  const FadeUp = batch(Fade(), Sticky(), Move())

  return (
    <BodyScrollWrap>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <CenterDiv>

              <ScrollH1>iPhone</ScrollH1>
              <ScrollH2>Apple 사상 가장 강력한 카메라 시스템</ScrollH2>
              <Checkbox>
                <Check img={iphone1} />
                <Check img={iphone2} />
                <Check img={iphone3} />
                <Check img={iphone4} />
              </Checkbox>

            </CenterDiv>
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>

            <CenterDiv>

              <ScrollH1>iPhone</ScrollH1>
              <ScrollH2>날렵하게, 강력하게</ScrollH2>

            </CenterDiv>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <CenterDiv>
              <ScrollH1>Apple</ScrollH1>
              <ScrollH2>비교불가 성능, 시선 강탈 매력.</ScrollH2>
            </CenterDiv>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Section3>
            {/* <h1>Apple</h1> */}
            <h2>
              <Animator animation={MoveIn(-1000, 0)}>즐거운 코딩,</Animator>
              <Animator animation={MoveIn(1000, 0)}>원하는 만큼,</Animator>
              <Animator animation={MoveOut(1000, 0)}>스타벅스 출입증,</Animator>
              <Animator animation={MoveOut(-1000, 0)}>세련되게,</Animator>
            </h2>
          </Section3>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <ScrollH2>홈페이지에서 확인해주세요!</ScrollH2>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </BodyScrollWrap>
  )
}

export default BodyScroll
