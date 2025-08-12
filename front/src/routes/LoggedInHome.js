import { Icon } from "@iconify/react/dist/iconify.js";
import IconText from "../components/shared/ico";
import TextWithHover from "../components/shared/TextWithHover";
import { useState } from "react";
import { Howl,Howler } from "howler";
import LoggedInContainer from "../containers/loggedInContainer";


const focusCardsdata = [
    {
        title: "Chill Vibes",
        description: "Relax and unwind with mellow tunes.",
        imgurl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Morning Acoustic",
        description: "Soothing guitar for calm mornings.",
        imgurl: "https://images.unsplash.com/photo-1508975558735-d3623e317f51?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Evening Lo-Fi",
        description: "Smooth beats for peaceful evenings.",
        imgurl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Rainy Day Chill",
        description: "Melancholic tracks for rainy moods.",
        imgurl: "https://images.unsplash.com/photo-1487956381380-4cc7f6d89f5e?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Cozy Café",
        description: "Coffee shop acoustic vibes.",
        imgurl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
    }
];

const topMixesCardsdata = [
    {
        title: "Top 50 Global",
        description: "The hottest songs worldwide.",
        imgurl: "https://images.unsplash.com/photo-1580656519539-632c0c4c7b38?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Top 50 India",
        description: "Trending hits across India.",
        imgurl: "https://images.unsplash.com/photo-1522120692535-7d83e5f99f14?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Viral Hits",
        description: "The most shared songs right now.",
        imgurl: "https://images.unsplash.com/photo-1488376734080-91c07f84cdee?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Pop Mix",
        description: "Global pop favorites, all in one place.",
        imgurl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Party Anthems",
        description: "Your go-to for dance parties.",
        imgurl: "https://images.unsplash.com/photo-1554147090-e1221a04a025?auto=format&fit=crop&w=800&q=60"
    }
];

const workoutCardsdata = [
    {
        title: "Beast Mode",
        description: "Heavy beats to fuel your workouts.",
        imgurl: "https://images.unsplash.com/photo-1583454110550-4d34828f3d59?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Cardio Power",
        description: "Fast-paced tracks to keep moving.",
        imgurl: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Gym Motivation",
        description: "Get in the zone and lift heavy.",
        imgurl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "HIIT Energy",
        description: "High-intensity beats for high effort.",
        imgurl: "https://images.unsplash.com/photo-1583454110552-f5889ebc3d1d?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Run Playlist",
        description: "Steady tempo for long runs.",
        imgurl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60"
    }
];

const moodBoosterCardsdata = [
    {
        title: "Happy Hits",
        description: "Put a smile on your face.",
        imgurl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Feel-Good Indie",
        description: "Uplifting indie tunes.",
        imgurl: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Dance Pop Fun",
        description: "Pop with a groove to make you move.",
        imgurl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Mood Booster",
        description: "Songs to lift your spirit.",
        imgurl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Sunny Day",
        description: "Bright music for brighter moods.",
        imgurl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    }
];

const retroCardsdata = [
    {
        title: "90s Classics",
        description: "Rewind to the golden decade.",
        imgurl: "https://images.unsplash.com/photo-1587929651402-ce54a4b3ed16?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Retro Bollywood",
        description: "Timeless Hindi hits from the past.",
        imgurl: "https://images.unsplash.com/photo-1587929371264-ff78d8d97185?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Old School Hip-Hop",
        description: "Golden age of rap and beats.",
        imgurl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Classic Love Songs",
        description: "Romantic tunes from earlier eras.",
        imgurl: "https://images.unsplash.com/photo-1532634896-26909d0d4b8c?auto=format&fit=crop&w=800&q=60"
    },
    {
        title: "Vinyl Vibes",
        description: "Analog sounds and nostalgia.",
        imgurl: "https://images.unsplash.com/photo-1583430174853-4b9a3f91f2a8?auto=format&fit=crop&w=800&q=60"
    }
];

    
const LoggedInHome=()=>{
    return(
        <LoggedInContainer curractive={"Home"}>
            <PlaylistView titletxt={"Focus"} cardsdata={focusCardsdata} />
            <PlaylistView titletxt={"Top Mixes"} cardsdata={topMixesCardsdata} />
            <PlaylistView titletxt={"Workout"} cardsdata={workoutCardsdata} />
            <PlaylistView titletxt={"Mood Booster"} cardsdata={moodBoosterCardsdata} />
            <PlaylistView titletxt={"Retro Vibes"} cardsdata={retroCardsdata} />
        </LoggedInContainer>
    )
}



const PlaylistView=({titletxt,cardsdata})=>{
    return (
        <div className="text-white mt-8 pt-0">
            <div className={`text-2xl font-semibold mb-5`}>{titletxt}</div> 
            <div className="w-full flex justify-between space-x-4">
                {
                    cardsdata.map((item)=>{
                        return <Card title={item.title} description={item.description} imgurl={item.imgurl}/>
                    })
                }

                
            </div>
               
         </div>
    );
}
const Card=({title,description,imgurl})=>{
    return (
        <div className="bg-black bg-opacity-40 w-1/5 rounded-lg px-4 py-2">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md"
                    src={imgurl}
                    alt="label"
                />
            
            </div>
            <div className="text-white text-sm py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
}
export default LoggedInHome;