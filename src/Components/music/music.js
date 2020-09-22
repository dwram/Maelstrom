import React, { useRef, useState } from 'react'
import backgroundMusic from '../../media/background_music.mp3'
import InputSlider from './slider'

let music = {}
music.background = new Audio(backgroundMusic)
music.fight = new Audio()
let initialVolume = 0.3

export function BackgroundMusic() {
    console.log("rerender")
    const [musicVolume, setVolume] = useState(0.3)

    let AudioRef = useRef(null)
    const playMusic = function() {
        music.background.play()
        music.background.loop = true;
        music.background.volume = 0.0
    }
    const handleChange =  (e) => {
        music.background.volume = e
    }


    music.background.onload = playMusic()  

    const toggleSound = function() {
        music.background.paused ? music.background.play() : music.background.pause()
    }

    return (
        <div ref={AudioRef}>
            <InputSlider valueInc={handleChange}/>
            <button onClick={() => toggleSound()} style={{paddingTop: '20px', background: 'none', borderStyle: 'none', color: 'whitesmoke'}}>Toggle Music</button>
        </div>
    ) 
}