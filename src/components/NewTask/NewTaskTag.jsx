import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const DUMMY_TAGS = [
  { tagName: "درس", tagColor: "bg-[#ff0000]", id: "tag1" },
  { tagName: "مشق", tagColor: "bg-[#ffff00]", id: "tag2" },
  { tagName: "ورزش", tagColor: "bg-[#ff00ff]", id: "tag3" },
];
const NewTaskTag = (props) => {
  const tagInputRef = useRef();
  const [isTypeing, setIsTyping] = useState(false);
  const [tagNames, setTagNames] = useState(DUMMY_TAGS);
  const [searchedTags, setSearchedTags] = useState([]);

  const tagsHnadler = (e) => {
    if (e.target.id === "tags-menu__backdrop") {
      props.onClickTags({ val: "noPriority" });
      e.stopPropagation();
    }
  };

  const inputChangeHandler = () => {
    setIsTyping(true);

    const newTags = tagNames.filter((tag) => {
      if (tagInputRef.current.value.trim() !== "") {
        return tag.tagName.includes(tagInputRef.current.value);
      }
    });

    setSearchedTags(newTags);
  };
  const inputFocusHandler = () => {
    setIsTyping(true);
  };
  const tagFormSubmitHandler = (e) => {
    e.preventDefault();
    setTagNames((prevState) => {
      return [
        {
          tagName:
            tagInputRef.current.value !== ""
              ? tagInputRef.current.value
              : "تگ جدید",
          tagColor: "bg-[#ffff00]",
          id: Math.random(),
        },
        ...tagNames,
      ];
    });
    setIsTyping(false);
    setTimeout(() => {
      tagInputRef.current.value = "";
    }, 0);
  };
  return (
    <>
      <div
        className="fixed z-1 left-0 top-0 w-screen h-screen bg-white opacity-10"
        onClick={tagsHnadler}
        id="tags-menu__backdrop"
      ></div>
      <div className="bg-white w-[220px]  z-10 absolute bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-3 bottom-[35px] left-[-55px]">
        <form
          className="bg-[#E9E9E9] flex justify-between items-center relative mb-2"
          onSubmit={tagFormSubmitHandler}
        >
          <input
            onChange={inputChangeHandler}
            onFocus={inputFocusHandler}
            ref={tagInputRef}
            type="text"
            id="new-task__tagInput"
            placeholder="جستجو یا ساختن تگ"
            className=" placeholder:text-xs w-full p-1 pr-[30px] bg-transparent"
          />
          <p className="w-[30px] h-[30px] flex justify-center items-center absolute right-0 top-0 bg-transparent text-slate-500">
            <FontAwesomeIcon icon={faSearch} />
          </p>
        </form>
        {isTypeing && (
          <p className="text-xs my-1 text-center text-[#3D3D3D]">
            برای ساختن تگ جدید اینتر بزنید
          </p>
        )}
        <ul className="h-auto max-h-[120px] overflow-y-auto ">
          {!isTypeing &&
            tagNames.map((tag) => (
              <li
                className="flex justify-between items-center w-full"
                key={tag.id}
              >
                <button className="text-slate-300">...</button>
                <p
                  className={`${tag.tagColor} rounded-md py-1 px-2 text-sm mb-2`}
                >
                  {tag.tagName}
                </p>
              </li>
            ))}
          {isTypeing &&
            searchedTags.map((tag) => (
              <li
                className="flex justify-between items-center w-full"
                key={tag.id}
              >
                <button className="text-slate-300">...</button>
                <p
                  className={`${tag.tagColor} rounded-md py-1 px-2 text-sm mb-2`}
                >
                  {tag.tagName}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default NewTaskTag;
