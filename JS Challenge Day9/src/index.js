const clockTitle = document.querySelector(".js-clock");

function dDayClock() {
  const current = new Date();

  const currentMonth = current.getUTCMonth() + 1;
  const currentDate = current.getDate();
  const currentHour = current.getHours();
  const currentMinute = current.getMinutes();
  const currentSecond = current.getSeconds();

  let EVE_MONTH = 12;
  let EVE_DATE = 25;
  let EVE_HOUR = 0;
  let EVE_MINUTE = 0;
  let EVE_SECOND = 0;

  if (EVE_SECOND === 0) {
    if (EVE_MINUTE === 0) {
      if (EVE_HOUR === 0) {
        EVE_DATE -= 1;
        EVE_HOUR += 23;
        EVE_MINUTE += 59;
        EVE_SECOND += 59;
      } else {
        EVE_HOUR -= 1;
        EVE_MINUTE += 59;
        EVE_SECOND += 59;
      }
    } else {
      EVE_MINUTE -= 1;
      EVE_SECOND += 59;
    }
  }
  const differMonth = EVE_MONTH - currentMonth;
  const differDate = EVE_DATE - currentDate;
  const differHour = EVE_HOUR - currentHour;
  const differMinute = EVE_MINUTE - currentMinute;
  const differSecond = EVE_SECOND - currentSecond;

  let convertMon = 0;

  for (let i = 0; i < differMonth; i++) {
    if (
      currentMonth + i === 1 ||
      currentMonth + i === 3 ||
      currentMonth + i === 5 ||
      currentMonth + i === 7 ||
      currentMonth + i === 8 ||
      currentMonth + i === 10 ||
      currentMonth + i === 12
    )
      convertMon += 31;
    else convertMon += 30;
  }

  const finalDate = String(convertMon + differDate).padStart(2, "0");
  const finalHour = String(differHour).padStart(2, "0");
  const finalMinute = String(differMinute).padStart(2, "0");
  const finalSecond = String(differSecond).padStart(2, "0");

  clockTitle.innerText = `${finalDate}d ${finalHour}h ${finalMinute}m ${finalSecond}s`;
}
dDayClock();
setInterval(dDayClock, 1000);
