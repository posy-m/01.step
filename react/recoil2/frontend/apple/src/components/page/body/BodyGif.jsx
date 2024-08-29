import React, { useEffect, useState } from 'react'
import { BodyGifWrap, BodyGifImg, GifText, GifSmallText } from '../../style/BodyGif.styled'


const BodyGif = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      const hours = ('0' + today.getHours()).slice(-2);
      const minutes = ('0' + today.getMinutes()).slice(-2);
      const seconds = ('0' + today.getSeconds()).slice(-2);

      setTimeString(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <BodyGifWrap>
      <BodyGifImg />
      <GifText>Apple 이벤트</GifText>
      <GifSmallText>한국 시간 {timeString}</GifSmallText>
    </BodyGifWrap>
  )
}

export default BodyGif
