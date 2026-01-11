const daysEl = document.getElementById("days");
const monthYearEl = document.getElementById("monthYear");

let date = new Date();

function renderCalendar() {
  daysEl.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();

  monthYearEl.textContent = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    daysEl.innerHTML += `<div></div>`;
  }

  for (let d = 1; d <= lastDate; d++) {
    const isToday =
      d === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    daysEl.innerHTML += `
      <div class="day ${isToday ? "today" : ""}">
        ${d}
      </div>
    `;
  }
}

document.getElementById("prev").onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

document.getElementById("next").onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

renderCalendar();

