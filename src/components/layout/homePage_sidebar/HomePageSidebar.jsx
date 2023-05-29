import "./HomePageSidebar_style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import AccordionBox from "../../mostlyUsed/AccordionBox/AccordionBox"
import { useContext } from "react"
import { UserContext } from "../../../context/provider"

const HomePageSidebar = () => {

    const { spaces } = useContext(UserContext);

    // const sections = [
    //     {
    //       title: 'Section 1',
    //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    //     },
    //     {
    //       title: 'Section 2',
    //       content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //     },
    //     {
    //       title: 'Section 3',
    //       content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    //     }
    //   ];

    return (
        <div className="w-[25%] min-w-[250px] border-l border-slate-500 pt-8 pr-8 pl-4 flex flex-col justify-between text-[14px]">
            <div className="flex flex-col gap-4" >
                <h1 className="headerTitle bg-clip-text text-[28px] font-extrabold mb-6">کوئرا تسک منیجر</h1>
                <div className="flex flex-row-reverse justify-between">
                    <p>ورک اسپیس ها</p>
                    <div className="flex flex-row-reverse gap-5">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
                <div className="flex flex-row-reverse items-center" >
                    <FontAwesomeIcon className="absolute mr-4 text-[20px]" icon={faMagnifyingGlass} />
                    <input className="bg-[#F6F7F9] rounded h-[40px] pr-12 w-full" />
                </div>
                <button className="bg-[#D3D3D3] hover:bg-[#c5c5c5] h-8 w-full flex items-center justify-center gap-2 rounded " > <p className="text-[13px]">ساختن اسپیس جدید</p>  <FontAwesomeIcon icon={faSquarePlus} /> </button>
                <AccordionBox sections={spaces} />
            </div>
            <div className="flex flex-col gap-5" >
                <div className="flex flex-row-reverse items-center gap-2" >
                    <div className="w-[35px] h-[35px] bg-[#EAF562] rounded-[50%] flex justify-center items-center text-[10px]" >MN</div>
                    <p> نیلوفر موجودی  </p>
                </div>
                <div className="flex flex-row-reverse mr-2 gap-2 opacity-60 items-center" >
                    <FontAwesomeIcon className="text-[20px]" icon={faDoorOpen} />
                    <p>خروج</p>
                </div>
            </div>
        </div>
    )
}

export default HomePageSidebar