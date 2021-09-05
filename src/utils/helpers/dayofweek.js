import moment from "moment";

//Get list day of week
const GetDayOfWeek = () => {
  let listDayOfWeek = [];
  const weekStart = moment().startOf("week");
  const weekToDay = moment().isoWeekday();
  const weekEnd = moment().endOf("week");
  let i = weekToDay === weekEnd ? weekToDay - 1 : weekToDay;

  for (i; i <= 13; i++) {
    listDayOfWeek.push(moment(weekStart).add(i, "days"));
  }

  return listDayOfWeek;
};
export default GetDayOfWeek;
