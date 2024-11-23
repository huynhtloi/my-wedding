var event_date = document.getElementById("event_date").value;

const events = [
    {
      start: event_date,
      end: event_date
    }
];
new Calendar({
    id: "#color-calendar",
    theme: "basic",
    eventsData: events,
    customMonthValues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    customWeekdayValues: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    disableMonthYearPickers: true,
    disableDayClick: true,
    disableMonthArrowClick: true
}).setDate(event_date);
