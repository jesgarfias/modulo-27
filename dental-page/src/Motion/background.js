const ChangeBg=()=>{
    return{
        inactive:{
            backgraundColor:"#111",
        },
        active:{
            backgraundColor:"#70abc7",
            scale:1.1,
            transition:{
                type:'tween',
                duration:1.2,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }
}
export default ChangeBg;