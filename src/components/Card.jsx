import cardImg from '../assets/card.svg'

export function Card(props){
  return(
    <div className="w-full h-[232px] flex flex-col justify-center items-center">
      <div className="w-full h-[178px] flex-1">
        test
      </div>
      <div className='flex-1'>
        <h1 className='text-base font-medium text-black leading-relaxed'>{props.title}</h1>
        <span className='text-sm font-medium text-light-gray'>Rs: {props.price}</span>
      </div>
    </div>
  )
}