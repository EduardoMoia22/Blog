export function Container(props){
  return(
    <div className="w-[370px] max-w-[90%] mx-auto p-2">
      {props.children}
    </div>
  )
}