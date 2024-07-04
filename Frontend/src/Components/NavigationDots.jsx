import links from "../Constants/links.js";

const NavigationDots = ({active}) => {
  return (
    <div className={'absolute top-[50%] right-[20px] translate-y-[-50%] z-10 gap-[15px] hidden sm:flex justify-center items-center flex-col'}>
        {links.map((item, index) => (
          <a href={`#${item}`} key={index} className={`${active === item ? `bg-blue-900` : `bg-gray-300`} block w-[10px] h-[11px] cursor-pointer rounded-full`}/>
        ))}
    </div>
  )
}
export default NavigationDots