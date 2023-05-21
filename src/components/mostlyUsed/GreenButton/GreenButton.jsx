
const GreenButton = ({text, width = auto, height = auto, onClick}) => {
    return(
        <>
        <button onClick={onClick} className="bg-[#208D8E] text-white rounded-md text-center hover:bg-[#1b797a]" style={{width: width, height: height}} >{text}</button>
        </>
    )
}

export default GreenButton