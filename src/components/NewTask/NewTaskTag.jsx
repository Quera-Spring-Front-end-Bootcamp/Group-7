import { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import NewTaskTagsMenu from "./NewTaskTagsMenu";
import TagsContext from "../../context/tags-context";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../context/auth-context";

const NewTaskTag = ({
  taskTags,
  onAddNewTag,
  taskId,
  onClickTags,
  moreStyles = {},
}) => {
  const { sendServerRequest: addNewTags } = useHttp();
  const authCtx = useContext(AuthContext);
  const tagsCtx = useContext(TagsContext);
  const tagInputRef = useRef();
  const [isTypeing, setIsTyping] = useState(false);
  const [searchedTags, setSearchedTags] = useState([]);

  const tagsHnadler = (e) => {
    if (e.target.id === "tags-menu__bgClose") {
      onClickTags(false);
      e.stopPropagation();
    }
  };

  const inputChangeHandler = () => {
    setIsTyping(true);

    const newTags = tagsCtx.tagNames.filter((tag) => {
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

    const fetchedTagsHandler = (result) => {
      tagsCtx.addTag({
        tagName: result.data.tag.name,
        color: result.data.tag.color,
        id: result.data.tag._id,
      });
      onAddNewTag({
        tagName: result.data.tag.name,
        color: result.data.tag.color,
        id: result.data.tag._id,
      });
      setIsTyping(false);
      setTimeout(() => {
        tagInputRef.current.value = "";
      }, 0);
    };

    addNewTags(
      {
        url: "http://localhost:3000/api/tags",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": authCtx.accessToken,
        },
        body: {
          name: tagInputRef.current.value,
          color: "#C3EDC0",
          taskId: taskId,
        },
      },
      fetchedTagsHandler
    );
  };
  return (
    <>
      <div
        className="fixed z-10 bg-black left-0 top-0 w-screen h-screen opacity-80"
        onClick={tagsHnadler}
        id="tags-menu__bgClose"
      ></div>
      <div
        style={moreStyles}
        className="bg-white w-[220px] z-50 absolute bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.16)] rounded-lg p-3 bottom-0 left-0"
      >
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
        <ul className="h-auto">
          {!isTypeing &&
            tagsCtx.tagNames.map((tag) => (
              <li
                className="flex justify-between items-center w-full"
                key={tag._id}
              >
                <div className="group/tag text-slate-300 relative ">
                  ...
                  <NewTaskTagsMenu clickedTag={tag} />
                </div>
                <p
                  className={`rounded-md py-1 px-2 text-sm mb-2`}
                  style={{ backgroundColor: tag.color }}
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
                <div className=" group/tag text-slate-300 relative">
                  ...
                  <NewTaskTagsMenu clickedTag={tag} />
                </div>
                <p
                  className={`rounded-md py-1 px-2 text-sm mb-2`}
                  style={{ backgroundColor: tag.tagColor }}
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
