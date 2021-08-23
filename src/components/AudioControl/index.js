import React, { useContext } from 'react';
import { DjContext, audioConfig } from '../../store';
import { Container, Track } from './styles';
import BpmControl from '../BpmControl';
import StepButton from '../StepButton';
import Play from '../Play';

export default function AudioControl() {
  const { audioStoreState } = useContext(DjContext);

  return (
    <>
      <BpmControl />
      <Play />
      <Container>
        { audioConfig.map((audio) => (
          <Track>
            <p>{audio.name}</p>
            { audioStoreState[audio.key].map((button, index) => (
              <StepButton
                trackName={audio.key}
                index={index}
              />
            ))}
          </Track>
        )) }
      </Container>
    </>
  );
}

/**
 * <AudioControl>
 *    <BPM> – control speed
 *    <Play Btn>
 *    <DrumGrid>
 *        <Track> // map out buttons for each row
    *        <OpenHat Track>
    *            <StepButton><StepButton><StepButton><StepButton>
    *        <ClosedHat Track>
    *        <Clap Track>
    *        <Kick Track>
    */
