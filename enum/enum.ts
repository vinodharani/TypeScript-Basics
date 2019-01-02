enum DaysOfTheWeek {
    MON = 1, TUE, WED, THU, FRI, SAT, SUN
}

// when you assign a value to MON, the other days takes a value of 2, 3, 4 etc
// or you can manually assign a value by using the = 

let day : DaysOfTheWeek;

day = DaysOfTheWeek.MON;

if (day === DaysOfTheWeek.MON) {
    console.log("Got to go to work")
}