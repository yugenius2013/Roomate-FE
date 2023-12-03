import { Avatar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
type ChattingPageParams = {
    nickname : string;
}
export const Chatting = () => {
    const { nickname } = useParams<ChattingPageParams>();
    const [inputHeight, setInputHeight] = useState(60); // 초기값은 입력 부분의 높이
    const [msgInput, setMsgInput] = useState('');
    const message="안녕하세요! "
    
    //저는 모글리에 sdfsdf hdsjkfㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴhskdhfjsdhfsdfsdfskshdjkfhsdsfdfj
    const messageStyle = {
        maxWidth:' 70%',
        
        //`${message.length * 15}px`,  // 예시: 글자 수에 따라 동적으로 설정
      };

      useEffect(() => {
        const handleResize = () => {
          setInputHeight(window.innerHeight * 0.1); // 예시: 뷰포트 높이의 10%
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const handleInputChange = (e:any) => {
        // 여기에서 메시지 전송 로직을 구현하면 됩니다.
        // 메시지 변수에는 입력된 메시지가 들어 있습니다.
        
        setMsgInput(e.target.value)
      };
    
      const handleSendMessage = () => {
        // 여기에서 메시지 전송 로직을 구현하면 됩니다.
        // 메시지 변수에는 입력된 메시지가 들어 있습니다.
        console.log('전송된 메시지:', msgInput);
        setMsgInput(msgInput)
        setMsgInput('');
        
      };
    
      const buttonColor = msgInput == '' ? 'bg-zinc-100' : 'bg-primary-logo'
    
    return (
        <div className="flex flex-col items-center w-full ">
             <div className=" max-w-[413px]  h-[100px] w-full bg-primary-logo fixed top-0 flex items-center justify-center " style={{zIndex:200}}>
                <div className="font-['700'] text-3xl text-white">{nickname}님</div>
            </div>
            <div className="  max-w-[413px]  w-full fixed min-h-screen max-h-screen bg-white rounded-t-3xl mt-[52px] overflow-y-auto p-8" style={{zIndex:20000}}>
                    <div className="flex flex-col gap-y-6">
                        {/* 상대방 */}
                    <div className="flex flex-row items-center gap-2">
                      <Stack direction="row" spacing={2}>
                          <Avatar alt="Remy Sharp" sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                      </Stack>
{/* border-2 border-primary-logo */}
                      <div className="flex flex-row gap-2">
                      <div className="max-w-2/3 break-words bg-zinc-100  font-['600'] text-primary-bg rounded-3xl rounded-tl-md p-2 px-4" style={messageStyle}>{message}</div>
                      <div className="font-['600'] text-primary-gray text-xxs flex items-end ">오전 12:05</div>
                      </div>
                    </div>

                    {/* 나 */}
                    <div className="flex flex-row gap-2 justify-end">
                    <div className="font-['600'] text-primary-gray text-xxs flex items-end ">오전 12:05</div>
                       
                      <div className="max-w-2/3 break-word font-['600'] bg-primary-logo text-white rounded-3xl rounded-tr-md p-2 px-4" style={messageStyle}>{message}</div>
                      
                    </div>
                    </div>

                    {/* 메시지 입력 부분  */}  
                    <div className=" max-w-[413px] flex w-full justify-center items-center ml-2 ">
                    <div  className="flex justify-center items-center" style={{ position: 'fixed', bottom: 0, width: '100%', height: inputHeight,  padding: '10px', }}>
                        {/* 메시지 입력 컴포넌트 -form 형식*/}
                     {/* <form  onSubmit={handleSendMessage} className="max-w-[413px] flex flex-row justify-evenly w-full">
                     <input
                            name="msgInput"
                            value={msgInput}
                            onChange={(e) => setMsgInput(e.target.value)}
                            className="bg-zinc-100 h-100vh max-h-[52px]"
                            type="text"
                            placeholder="메시지를 입력하세요"
                            style={{ width: '80%',borderRadius: '20px', padding: '5px',  }}
                        />
                        
                        <div className="w-20 h-full rounded-2xl">
                        <button
                            type="submit"
                            className={`text-center ${buttonColor}`}
                            disabled={msgInput == '' ? true : false} // 입력값이 없으면 버튼 비활성화
                            style={{ marginLeft: '10px', padding: '8px 16px', borderRadius: '20px', color :'white', border: 'none' }}
                            >
                            <SendIcon/>
                        </button>
                        </div>
                     </form> */}
                      {/* 메시지 입력 컴포넌트 -input*/}
                 <div className="max-w-[413px] flex flex-row justify-evenly w-full">
                     <input
                            name="msgInput"
                            value={msgInput}
                            onChange={handleInputChange}
                            className="bg-zinc-100 h-100vh max-h-[52px]"
                            type="text"
                            placeholder="메시지를 입력하세요"
                            style={{ width: '80%',borderRadius: '20px', padding: '5px',  }}
                        />
                        
                        <div className="w-20 h-full rounded-2xl">
                        <button
                            onClick={handleSendMessage}
                            type="submit"
                            className={`text-center ${buttonColor}`}
                            disabled={msgInput == '' ? true : false} // 입력값이 없으면 버튼 비활성화
                            style={{ marginLeft: '10px', padding: '8px 16px', borderRadius: '20px',  color: 'white', border: 'none' }}
                            >
                            <SendIcon/>
                        </button>
                        </div>
                     </div> 
                        </div>
                        </div> 
                    </div> 
                </div>
                    
           
        
    )
}
