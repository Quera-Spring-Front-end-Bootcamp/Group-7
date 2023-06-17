import classes from "./RequesWaitingPage.module.css";
const RequesWaitingPage = (props) => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-white/5 z-50  flex justify-center items-center">
      <div className={classes.spinner}></div>
    </div>
  );
};
export default RequesWaitingPage;
