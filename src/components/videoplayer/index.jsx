import React from 'react'
import BaseReactPlayer from 'react-player/youtube'
import { 
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    VolumeMenuButton, 
    BigPlayButton} from 'video-react'

const Index = () => {
    return (
        <>
            <div className='d-flex justify-content-evenly align-items-center vh-100'>
                <BaseReactPlayer url={'https://youtu.be/FIohiDJ2RLM?si=si5Rq2hYlT8hXVQT'} controls='true' />
                {/* <BaseReactPlayer url={'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'} controls='true' /> */}
                <Player poster="/assets/poster.png">
                    <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                    <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
                    <BigPlayButton position="center" />
                    <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <VolumeMenuButton />
                        <VolumeMenuButton disabled />
                    </ControlBar>
                </Player>
            </div>
        </>
    )
}

export default Index