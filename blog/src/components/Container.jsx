export function Container(props){
  return(
    <div className="w-[370px] max-w-[90%] mx-auto">
      {props.children}
    </div>
  )
}