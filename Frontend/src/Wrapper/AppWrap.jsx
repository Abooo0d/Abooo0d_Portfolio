import { SocialMedia, NavigationDots } from "../Components/index.js";
const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div
        id={idName}
        className={`app__container ${className} relative p-0 min-h-[100vh] overflow-hidden`}
      >
        <SocialMedia />
        <div className={"app__wrapper app__flex p-0"}>
          <Component />
          <div className={"absolute bottom-[20px] right-[20px]"}>
            <p className={"text-gray-500 text-xs"}>2024 Abooo0d</p>
            <p className={"text-gray-500 text-xs"}>All Rights Reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
export default AppWrap;
