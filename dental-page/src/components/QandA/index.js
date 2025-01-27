import { useState } from "react";
import { QuestionDiv } from "./styled";
import { QuestionContent } from "./QuestionContent";
import { TitleSection } from "../FirstSect/styles";

const QandA=()=>{
    const [open,setOpen]=useState(null);
    return(
        <>
            <TitleSection>Preguntas frecuentes</TitleSection>
            <section className="flex flex-col justify-center items-center">
                {QuestionContent.map((qu)=>(
                    <div className="flex-col justify-center items-center w-2/3 mb-5" key={qu.id}>
                        <div onClick={()=>setOpen(open===qu.id ? null:qu.id)} className="flex justify-between px-5 bg-gray-200 text-gray-800 text-3xl font-normal font-serif cursor-pointer">
                            <p>{qu.question}</p>
                            {open === qu.id ?(
                            <span>-</span>  
                            ):<span>+</span>}
                        </div>
                        <div className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                            open === qu.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}>
                            <p  className="overflow-hidden text-lg text-justify font-normal font-serif">{qu.answer}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>

        
    )
}
export default QandA;