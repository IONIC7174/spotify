import { Icon } from "@iconify/react/dist/iconify.js";
import IconText from "../components/shared/ico";
import TextWithHover from "../components/shared/TextWithHover";


const focusCardsdata=[{title:"dadwadwa",description:"dwadawdad awghvd awv daw vdgw",imgurl:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"},]
    


const Home=()=>{
 return(
    <div className="h-full w-full flex">{/* whole page */}
        <div className="h-full w-1/5 bg-black">{/* sidebar */}
            <div className="p-6">
                <span className="text-green-500 text-lg ">MUSICO </span>
            </div>
            <div className="py-2 pb-8">
                <IconText iconName={"material-symbols:home"} displayText={"Home"} active={true}/>
                <IconText iconName={"material-symbols:search"} displayText={"search"}/>
                <IconText iconName={"icomoon-free:books"} displayText={"Library"}/>
                
            </div>
            <div>
                <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"}/>
                <IconText iconName={"mdi:hearts"} displayText={"Liked Songs"}/>
            </div>
        </div>
        <div className="h-full w-4/5 bg-app-black  overflow-auto">{/*main page + nav bar */}
            <div className="navbar h-1/11 w-full bg-black bg-opacity-40 flex items-end "> 
                <div className="w-1/2"></div>
                    <div className="w-1/2 h-full flex items-center justify-end ">
                        <div className="w-3/5 h-full flex justify-around items-center">
                            <TextWithHover displayText={"Premium"}/>
                            <TextWithHover displayText={"Support"}/>
                            <TextWithHover displayText={"Download"}/>
                            <div className="h-1/2 border-r "></div>
                        </div>
                        <div className="w-2/5 h-full flex justify-around items-center">
                            <TextWithHover displayText={"Sign up"}/>
                            <div className="px-8 h-2/3 bg-white flex items-center justify-center rounded-full font-semibold cursor-pointer">Log in</div>
                        </div>
                    </div>
                
            </div>
            <div className="content p-8 overflow-auto">{/*below nav area */}
            <PlaylistView titletxt={"sounds"} cardsdata={focusCardsdata}/>
            <PlaylistView titletxt={"sounds"} cardsdata={focusCardsdata}/>
            <PlaylistView titletxt={"sounds"} cardsdata={focusCardsdata}/>
            </div>

        </div>
    </div>
 );
}

const PlaylistView=({titletxt,cardsdata})=>{
    return (
        <div className="text-white mt-8 pt-0">
            <div className="text-2xl font-semibold mb-5">{titletxt}</div> 
            <div className="w-full flex justify-between space-x-4">
                {
                    cardsdata.map((item)=>{
                        return <Card title={item.title} description={item.description} imgurl={item.imgurl}/>
                    })
                }

                {/*
                
                <Card title={"fdtya"} description={"dvghawvdawvdawv vdgavwgvdawhjdvjawjhdaw dwvdhad"  } imgurl={"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}/>
                <Card title={"fdtya"} description={"dvghawvdawvdawv vdgavwgvdawhjdvjawjhdaw dwvdhad"} imgurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"}/>
                <Card title={"fdtya"} description={"dvghawvdawvdawv vdgavwgvdawhjdvjawjhdaw dwvdhad"}imgurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"}/>
                <Card title={"fdtya"} description={"dvghawvdawvdawv vdgavwgvdawhjdvjawjhdaw dwvdhad"} imgurl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s"}/>
                <Card title={"fdtya"} description={"dvghawvdawvdawv vdgavwgvdawhjdvjawjhdaw dwvdhad"} imgurl={"https://shorthand.com/the-craft/raster-images/assets/5kVrMqC0wp/sh-unsplash_5qt09yibrok-4096x2731.jpeg"}/>
                
                
                */}
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
export default Home;