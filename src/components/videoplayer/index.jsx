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
    BigPlayButton
} from 'video-react'

const Index = () => {
    return (
        <>
            <div className='row justify-content-center align-items-center vh-100 text-center'>
                <div className='col-5 m-2 justify-content-center row'>
                    <h5>Youtube player</h5>
                    <BaseReactPlayer url={'https://youtu.be/y7nA1BmU-Ec?si=cMXHFKQ7hd5INNtQ'} controls='true' />
                </div>
                <div className='col-7 m-2' style={{maxWidth: '720px', aspectRatio: '16/9'}}>
                    <h5>React player</h5>
                    <Player poster="/assets/poster.png" className='h-100'>
                        <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                        <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
                        <BigPlayButton position="center" />
                        <ControlBar>
                            <ReplayControl seconds={10} order={1.1} />
                            <ForwardControl seconds={10} order={1.1} />
                            <CurrentTimeDisplay order={4.1} />
                            <TimeDivider order={4.2} />
                            <VolumeMenuButton />
                            <VolumeMenuButton disabled />
                        </ControlBar>
                    </Player>
                </div>
            </div>
        </>
    )
}

export default Index