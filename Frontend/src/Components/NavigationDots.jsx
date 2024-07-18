import links from "../Constants/links.js";

const NavigationDots = ({ active }) => {
  return (
    <div
      className={
        "absolute top-[50%] right-[20px] translate-y-[-50%] z-10 gap-[15px] hidden md:flex justify-center items-center flex-col"
      }
    >
      {links.map((item, index) => (
        <a
          href={`#${item}`}
          key={index}
          className={`${
            active === item
              ? `bg-cu-primary opacity-100`
              : `bg-gray-300 opacity-40`
          } block w-[4px] h-[25px] cursor-pointer rounded-full hover:bg-cu-primary duration-300 `}
        />
      ))}
    </div>
  );
};
export default NavigationDots;
