const BackDrop = (props) => {
  return (
    <>
      <div className="fixed left-0 top-0 w-screen h-screen bg-black opacity-50"></div>
      <div className="fixed rounded left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
        {props.children}
      </div>
    </>
  );
};
export default BackDrop;
