import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFlag,
  faSquareCheck,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import TaskInformation from "../../pop-ups/TaskInformation";

const ColumnViewTask = (props) => {
  return (
    <>
      <TaskInformation />
      <div className=" group cursor-pointer w-[100%] shadow-[0_2px_8px_rgba(0,0,0,0.18)] mt-[20px] p-2.5 rounded">
        <img
          src="https://s3-alpha-sig.figma.com/img/1ff2/08fc/84a00a92e59b4eaa4703234f3437659c?Expires=1685923200&Signature=UeMOqkV1w38scmGxoFI04AHpQNG969oOeo869JXVvs9qwUd5Z~9cnu0qaoNrXLzyV0vXqNm50lRfH3KS57MhgiinTWMWB3Typ8Xc1HLJmUv9FmfTMeNhfVbh6ej3~OA5Gy6CKy52bA0t8UtrcYw080a1oBBII6YvxRnX1Czhgjp77Q5h~mViPGynuTzd4qgYfaxI-fyEUVgoGm4FUfr2FGGifRe8qyhTRPjgrCcA1E5Pz7kJoes1qv~j5wec-u4WhpwzOHXaMo7Tf5x1a-u3X1ekHhsbbvXENOxUUUmAqnD8Nww-2iHjDJlDc5qAg5SGyyL-ryhXgM8yi4bfBuMUJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="work place"
          className="w-full rounded h-auto mb-4"
        />
        <div className="flex justify-between items-center mb-4">
          <p className="text-[12px] bg-[#EAF562] w-[25px] h-[25px] flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in">
            NM
          </p>
          <p className="text-[10px] text-[#534D60]">پروژه اول</p>
        </div>
        <div>
          <p className="text-xs mb-4">
            <FontAwesomeIcon className="text-gray-300" icon={faAlignRight} />{" "}
            .این یک تیتر برای این تسک است
          </p>
        </div>
        <div className="flex justify-end items-center gap-2 mb-4">
          <p className="text-[14px] text-gray-300 mr-2">
            <span>۵/۱۵ </span>
            <FontAwesomeIcon icon={faSquareCheck} />
          </p>
          <p className="text-[12px] flex gap-0.5">
            <span>مهر - فردا</span>
            <span>۵</span>
          </p>
          <FontAwesomeIcon className="text-[#FB0606]" icon={faFlag} />
        </div>
        <div className="flex items-center justify-end text-[12px] mb-4">
          <p className="bg-[#EEDFF6] pl-[10px] pr-[5px] py-[3px] mr-[15px] rounded-l-lg">
            پروژه
          </p>
          <p className="bg-[#BFFDE3] pl-[10px] pr-[5px] py-[3px] rounded-l-lg">
            درس
          </p>
        </div>
        <div className="flex justify-between items-center border-t-[1px] border-slate-300 border-solid h-[0] overflow-hidden group-hover:h-[40px] opacity-0 group-hover:opacity-100 transition-width duration-300 ease-in">
          <button>...</button>
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      </div>
    </>
  );
};
export default ColumnViewTask;
