const j1={
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday"
}
let x=()=>{
    console.log("Hello World")
}
let y=()=>{
    console.log("This is wholesome environment")
}
let des=()=>{
      const{"1":first,"2":second}=j1
      console.log(first,second)
}

export default {x,y,des}