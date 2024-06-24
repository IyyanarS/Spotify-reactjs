import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import v1 from './v1.jpg'
import img6 from './img6.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img13 from './img13.jpg'
import leo1 from  './leo1.mp3'
import leo2 from  './leo2.mp3'
import leo3 from  './leo3.mp3'
import { Form } from 'react-router-dom'

export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
    
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: v1,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    }
    // {   
    //     id:4,
    //     name: "Mega Hits,",
    //     image: v1,
    //     desc:"Your weekly update of the most played tracks",
    //     bgColor:"#234e52"
    // }
    // {   
    //     id:5,
    //     name: "Happy Favorites",
    //     image: v1,
    //     desc:"Your weekly update of the most played tracks",
    //     bgColor:"#744210"
    // }
]

export const songsData = [
    {
        id:0,
        name: "Leo One",
        image: v1,
        file:leo1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Leo Two",
        image: v1,
        file:leo2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Leo Three",
        image: v1,
        file:leo3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Leo Four",
        image: v1,
        file:leo1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    }
    // {
    //     id:4,
    //     name: "Song Five",
    //     image: v1,
    //     file:leo2,
    //     desc:"Put a smile on your face with these happy tunes",
    //     duration:"3:10"
    // },
    // {
    //     id:5,
    //     name: "Song Six",
    //     image: v1 ,
    //     file:leo3,
    //     desc:"Put a smile on your face with these happy tunes",
    //     duration:"2:45"
    // },
    // {
    //     id:6,
    //     name: "Song Seven",
    //     image: v1,
    //     file:leo1,
    //     desc:"Put a smile on your face with these happy tunes",
    //     duration:"2:18"
    // },
    // {
    //     id:7,
    //     name: "Song Eight",
    //     image: v1,
    //     file:leo2,
    //     desc:"Put a smile on your face with these happy tunes",
    //     duration:"2:35"
    // }
]