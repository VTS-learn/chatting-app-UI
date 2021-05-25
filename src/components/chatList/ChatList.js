import React , {useState , useRef } from 'react';
import SearchBar from './SearchBar';
import ChatListCard from './ChatListCard';
import styled from '../../static/css/chatList.module.css';
import { Timeline } from 'react-gsap';

const ChatList = () => {

    const ref = useRef(null);

    const [ searchVal , setSearchVal ] = useState("");

    const filtering_val = (e) => {
        setTimeout(() => {
            setSearchVal(e.target.value);
        }, 300); 
    }


    return (
        <div className="chatlist" ref={ref}>
             <SearchBar onChangeFun={filtering_val}/>

            <div className={styled.chatingCardList}  >
                <div className="main-div">
                    <Timeline>

                        { 
                            chatUserPersonList.filter(theArray => theArray.name.includes(searchVal)).map((iteam , index) =>{
                                    return  <ChatListCard 
                                                key={index}
                                                index={index} 
                                                id={iteam.id}
                                                img={iteam.img}
                                                name={iteam.name}
                                                text={iteam.text}
                                                unread={iteam.unread}
                                                lastTime={iteam.lastTime}
                                            />
                            }) 
                        } 

                    </Timeline>

                </div>
            </div>
             
        </div>
    )
}

export default ChatList;





// dummy data

const chatUserPersonList = [
    {
        id:1,
        img: "https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg",
        name: "Ronald J. Brown",
        text:"Fusce in quam magna. Vestibulum pellentesque tincidunt ligula,",
        unread: 0,
        lastTime: new Date("May 3, 2021 15:42:59")
    },
    {
        id:2,
        img: "https://wallpaperaccess.com/full/2580788.jpg",
        name: "Alpha R. Smith",
        text:"Nullam nec urna mi. Donec et elit arcu. Vivamus bibendum vulputate malesuada.",
        unread: 0,
        lastTime: new Date("May 3, 2021 10:32:09")
    },
    {
        id:3,
        img: "https://i.pinimg.com/originals/1d/be/8e/1dbe8ea5d528120b197e9585b1463d67.jpg",
        name: "Delia S. Patterson",
        text:"In commodo porta semper.",
        unread: 2,
        lastTime:new Date("May 3, 2021 10:00:09")
    },
    {
        id:4,
        img: "https://i.pinimg.com/originals/d7/4a/d0/d74ad0989ebc34b28dfbbbcebf53226d.jpg",
        name: "Debbie B. Lincoln",
        text:"Quisque vel diam ac lorem ultricies tincidunt non sit amet lectus. Donec in pulvinar nibh, in commodo felis.",
        unread: 1,
        lastTime:new Date("May 3, 2021 09:19:00")
    },
    {
        id:5,
        img: "https://pm1.narvii.com/7428/f8215caf995868c88d50e2f69c41ad917843c969r1-1366-2048v2_hq.jpg",
        name: "Rosemarie A. Hernandez",
        text:"Donec pulvinar dolor ut tincidunt blandit.",
        unread: 0,
        lastTime:new Date("May 3, 2021 08:08:00")
    },
    {
        id:6,
        img: "http://www.handsomeboymodel.com/wp-content/uploads/2019/08/Rohan_movie.jpg",
        name: "Richard B. Frampton",
        text:"Suspendisse potenti.",
        unread: 0,
        lastTime: new Date("May 1, 2021 15:22:22")
    },
    {
        id:7,
        img: "https://wallpapercave.com/wp/wp2352455.jpg",
        name: "Linda T. Bishop",
        text:"Donec eleifend velit ligula, consectetur laoreet enim consequat sed.",
        unread: 0,
        lastTime: new Date("Apr 4, 2021 14:11:11")
    },
    {
        id:8,
        img: "https://i.pinimg.com/564x/45/3b/be/453bbe01d0d4afefb6fc978c0140f424.jpg",
        name: "James M. Moreno",
        text:"Quisque ac blandit arcu.",
        unread: 12,
        lastTime: new Date("Apr 4, 2021 12:00:00")
    },
    {
        id:9,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOUUaTouRb0aOg5Y8Bq6oAsKOuj60DHPvWg&usqp=CAU",
        name: "Gary C. Braggs",
        text:"Maecenas a molestie turpis, eget ullamcorper felis. Sed tincidunt diam ac felis mollis feugiat.",
        unread: 321,
        lastTime: new Date("Apr 4, 2021 10:44:44")
    },
    {
        id:10,
        img: "https://data.whicdn.com/images/229505723/original.jpg",
        name: "Maira M. Loftis",
        text:"Sed convallis nunc sem, quis consequat elit feugiat nec.",
        unread: 0,
        lastTime: new Date("Apr 3, 2021 17:33:11")
    },
    {
        id:11,
        img: "https://c0.wallpaperflare.com/preview/797/985/316/i-can-see-new-man-photographer.jpg",
        name: "Margarito D. Ealey",
        text:"Etiam viverra in nunc eget interdum. Sed sit amet commodo sem, vel ullamcorper sapien. ",
        unread: 0,
        lastTime: new Date("Apr 3, 2021 15:10:33")
    },
    {
        id:12,
        img: "https://cdn.pixabay.com/photo/2020/04/21/10/26/handsome-5072535_1280.jpg",
        name: "Terry K. Watts",
        text:"Praesent eu pellentesque odio",
        unread: 0,
        lastTime: new Date("Apr 1, 2021 10:50:33")
    },
    {
        id:13,
        img: "https://swall.teahub.io/photos/small/108-1086788_handsome-boy-wallpaper-hd.jpg",
        name: "Gary S. Goddard",
        text:"Nullam ut eros a dui elementum commodo eu non felis.",
        unread: 0,
        lastTime: new Date("Mar 22, 2021 15:10:13")
    },
    {
        id:14,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNNYd6kjkJlYJPePTw5WE15gj06INUBU5aQ&usqp=CAU",
        name: "Kelly K. Smith",
        text:"Quisque ullamcorper justo lacus, eget sodales lectus elementum ac.",
        unread: 0,
        lastTime: new Date("Mar 21, 2021 12:10:13")
    },
    {
        id:15,
        img: "https://www.babycouture.in/pub/media/catalog/product/cache/0b315228ed332efca91f606c91ba025b/m/y/my-handsome-boy-blue-suit-set8.jpg",
        name: "Lee W. McDermott",
        text:"Fusce lorem enim, rhoncus eget volutpat at, tincidunt quis arcu.",
        unread: 1,
        lastTime: new Date("Apr 3, 2021 13:50:33")
    }
]
