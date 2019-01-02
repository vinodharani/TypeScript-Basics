var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 0] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 1] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 2] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 3] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 4] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 5] = "SAT";
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 6] = "SUN";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.MON;
if (day === DaysOfTheWeek.MON) {
    console.log("Got to go to work");
}
