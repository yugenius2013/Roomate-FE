import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined"
import BrokenHeart from "@mui/icons-material/HeartBrokenOutlined"
import { TitleBox } from "./TitleBox";
type IconBoxProps = {
    animalColor: 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'yellow' | 'rose' | 'sky';
  };
  
export const TypeEmoji=({animalColor }: IconBoxProps) => {
    const animalIconStyles = {
        yellow: {
            color : 'border-yellow-500', 
        },
        rose: {
            color : 'border-rose-500', 
        },
        orange: {
            color : 'border-orange-500', 
        },
        green: {
            color : 'border-green-500', 
        },
        sky: {
            color : 'border-sky-500', 
        },
        purple: {
            color : 'border-purple-500', 
        },
        gray: {
            color : 'border-gray-500', 
        },
        pink: {
            color : 'border-pink-600', 
        },
    }
    const heartIconStyles = {
        yellow: {
            color : 'text-yellow-500', 
        },
        rose: {
            color : 'text-rose-500', 
        },
        orange: {
            color : 'text-orange-500', 
        },
        green: {
            color : 'text-green-500', 
        },
        sky: {
            color : 'text-sky-500', 
        },
        purple: {
            color : 'text-purple-500', 
        },
        gray: {
            color : 'text-gray-500', 
        },
        pink: {
            color : 'text-pink-600', 
        },
    }
    const animalIconStyle = animalIconStyles[animalColor];
    const heartIconStyle = heartIconStyles[animalColor];
    return(
        <div>
            <TitleBox title={'이모티콘으로 보는 라이프 스타일'} animalColor={animalColor}/>
            <div className="flex flex-row p-4 text-center items-center justify-center">
                <div className="flex flex-col text-center mr-8 ">
                    <img src={process.env.PUBLIC_URL + '/morning.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">아침형</div>
                </div>
                <div className="flex flex-col contain mr-8 ">
                    <img src={process.env.PUBLIC_URL + '/nosmoking.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">비흡연</div>
                </div>
                <div className="flex flex-col contain ">
                    <img src={process.env.PUBLIC_URL + '/homelover.png'} alt="morning"  />
                    <div className="font-['700'] text-primary-gray">집순이</div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col text-center">
                    <div className={`w-40 mt-4 mr-4 border-4 ${animalIconStyle.color} rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/good.png'} alt="morning"  />
                    </div>
                    <div className="mr-3 mt-1 font-['700'] text-sm">이런 룸메와 잘 맞아요</div>
                    <div className="mr-4 font-['700']">
                        <div className="flex flex-row text-center  items-center justify-center mt-4">
                                <div className=" text-primary-orange"><FavoriteOutlined/></div>
                                <div className="ml-2">고릴라</div>
                        </div>
                        <div className="flex flex-row text-center items-center justify-center mt-1">
                            <div className=" text-primary-orange"><FavoriteOutlined/></div>
                            <div className="ml-2 ">고양이</div>
                        </div>
                        <div className="flex flex-row text-center items-center justify-center mt-1">
                            <div className=" text-primary-orange"><FavoriteOutlined/></div>
                            <div className="ml-2">강아지</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                <div className={`w-40 mt-4 mr-4 border-4 ${animalIconStyle.color} rounded-lg flex items-center justify-center p-1`}>
                        <img src={process.env.PUBLIC_URL + '/bad.png'} alt="morning"  />
                </div>
                    <div className="text-center mt-1 font-['700'] text-sm">이런 룸메와는 조금 힘들어요</div>
                    <div className="flex flex-row text-center font-['700'] items-center justify-center mt-4">
                        <div className={`${heartIconStyle.color}`}><BrokenHeart/></div>
                            <div className="ml-2">고릴라</div>
                    </div>
                    <div className="flex flex-row text-center font-['700'] items-center justify-center mt-1">
                        <div className={`${heartIconStyle.color}`}><BrokenHeart/></div>
                        <div className="ml-2 ">고양이</div>
                    </div>
                    <div className="flex flex-row text-center font-['700'] items-center justify-center mt-1">
                        <div className={`${heartIconStyle.color}`}><BrokenHeart/></div>
                        <div className="ml-2">강아지</div>
                    </div>
                    <div className="text-white">
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
                        <div>sfsdfs</div>
                    </div>
               
                
                </div>

            </div>
        </div>
    )
}