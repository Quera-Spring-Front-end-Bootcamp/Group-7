const Card = (props) => {
  return (
    <div className="z-10 bg-white drop-shadow-3xl rounded-[20px] p-[24px] ">
      {props.children}
    </div>
  );
};
export default Card;
