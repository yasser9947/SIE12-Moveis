let array = [{name : "yasir"  , age  : 21 , gander : "male"},{name : "ali"  , age  : 12 , gander : "male"},
{name : "mohammed"  , age  : 35 , gander : "male"},{name : "khalid"  , age  : 99 , gander : "male"},
{name : "norah"  , age  : 31 , gander : "female"}
,{name : "areen"  , age  : 21 , gander : "female"},{name : "aseel"  , age  : 13 , gander : "female"},
{name : "sarah"  , age  : 27 , gander : "female"} , {name : "kholud"  , age  : 25 , gander : "female"}]

// console.log(maps)



let copy = array.map( (ele,i)  =>{

    return ele
})

// let crazyFilter = array.filter(ele =>{



// return (ele.gander == "female" && ele.age < 25  )
// })


console.log(copy)