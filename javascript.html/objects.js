let obj = {
    name:"sandeep",
    age:23,
    gender:"m",
    profile:"student",  
    favcar:"mustang",
}
console.log(obj)

let captain_america = {
    name:"steve roger",
    age:102,
    friends:["tony","thor","banner"],
    address:{
        country:"usa",
        state :"new york",
        city:{
            name:"brooklyn",
            pincode:892,
        },

        isavenger:true
    },
}
console.log(captain_america)

let friendsofcap = captain_america.friends[2]
console.log(friendsofcap)

let pincode = captain_america.address.city.pincode
console.log(pincode)
console.log(captain_america)

captain_america.isavenger = false

captain_america.movies = ["first avenger","winter soldier","civil war","infinty war"]
captain_america.bestfriend = "buckky"
delete captain_america.age
captain_america.friends.push("nat","client","sam")
console.log(captain_america)
captain_america.name = "steve"
captain_america.lastname = "roger"
captain_america.age = 108
for(let key in captain_america){
    console.log(key + ":" + captain_america[key])
}
