//change time to day

// txt="once upon a time"
// res=txt.replace(/t.*e/,"day")
// console.log(res)

// --------------------------------------------------------------------------------------------------

// modifiers
// ------------

// case insensitivity modifier (i) its only detect first modifier content

// txt="once upon a TIME"
// res=txt.replace(/t.*e/i,"day")
// console.log(res)


// txt="once upon a TIME"
// res=txt.replace(/time/i,"day")
// console.log(res)

// global modifier (g) its detect multiple content to modifier

// txt="once upon a TIME to Time"
// res=txt.replace(/time/ig,"day")
// console.log(res)

// line dividing

// txt="\n once upon a TIME \n to Time"
// res=txt.replace(/time/ig,"day")
// console.log(res)

// -------------------------------------------------------------------------------------------------------------------

//brackets
// -------------

// match content

// txt=" once upon a time  to time"
// res=txt.match(/time/)
// console.log(res)

// match content multiple

// txt=" once upon a time  to time"
// res=txt.match(/time/g)
// console.log(res)

// match only ime

// txt=" once upon a lime a time  to time"
// res=txt.match(/ime/g)
// console.log(res)

// match only i , m and  e 

// txt=" once upon a lime a time  to time"
// res=txt.match(/[ime]/g)
// console.log(res)

// match except i,m and e

// txt=" once upon a lime a time  to time"
// res=txt.match(/[^ime]/g)
// console.log(res)

// match only small letters

// txt=" once upon a lime a time  to time "
// res=txt.match(/[a-z]/g)
// console.log(res)

// match only numeric numbers 0-9

// txt=" once upon a lime a time  to time 12"
// res=txt.match(/[0-9]/g)
// console.log(res)

// match only capital letters A to Z

// txt=" once upon a Lime a time  to time 12"
// res=txt.match(/[A-Z]/g)
// console.log(res)

//a-z include space

// txt=" once upon a lime a time  to time 12"
// res=txt.match(/[a-z ]/g)
// console.log(res)

//matches and rplace multiple content

// txt=" once upon a lime a time  to day 12"
// res=txt.replace(/(time|day)/g,"tomorrow")
// console.log(res)


// ------------------------------------------------------------------------------------------------------------

// metacharacters
// -----------------

// txt="there lived a ghost 100!@#"
// res=txt.match(/\w/g)
// console.log(res)


// txt="there lived a ghost 100!@#"
// res=txt.match(/\W/g)
// console.log(res)


// txt="there lived a ghost 100!@#"
// res=txt.match(/\s/g)
// console.log(res)


// txt="there lived a ghost 100!@#"
// res=txt.match(/\S/g)
// console.log(res)


// txt="there lived a ghost 100!@#"
// res=txt.match(/\d/g)
// console.log(res)



// txt="there lived a ghost 100!@#"
// res=txt.match(/\D/g)
// console.log(res)

// b changes beginning of a word used th will change

// txt="puth there lived a ghost 100!@#"
// res=txt.replace(/\bth/g,"no")
// console.log(res)

// B changes first th word

// txt="puth there lived a ghost 100!@#"
// res=txt.replace(/\Bth/g,"no")
// console.log(res)

// ---------------------------------------------------

// Quantifiers
// -------------

// n* - zero or more n's

// txt="access the possession of catchesss les"
// res=txt.match(/es*/g)
// console.log(res)

// n+ - atleast one n

// txt="access the possession of catchesss les"
// res=txt.match(/es+/g)
// console.log(res)


// n{x} - exactly x number of n's

// txt="access the possession of catchesss les"
// res=txt.match(/es{2}/g)
// console.log(res)

// n{x,y} - minimum x number of n's and maximum y number of n's

// txt="access the possession of catchesss les"
// res=txt.match(/es{0,2}/g)
// console.log(res)

// n{x,} - minimum x number of n's not maximum

// txt="access the possession of catchesss les"
// res=txt.match(/es{2,}/g)
// console.log(res)

// ^n- matches if a string starts with n

// txt="access the possession of catchesss les"
// res=txt.match(/^a/)
// console.log(res)

// n$- matches if a string ends with n

// txt="access the possession of catchesss les"
// res=txt.match(/es$/)
// console.log(res)

// a. - mathces with any single character

// txt="access the possession of catchesss les"
// res=txt.match(/a./)
// console.log(res)

// a.{2} - mathces with multiple character 

txt="access the possession of catchesss les"
res=txt.match(/a.{2}/)
console.log(res)



