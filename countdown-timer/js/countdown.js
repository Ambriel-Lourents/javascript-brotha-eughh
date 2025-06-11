// Helper function to format time
const format = (t) => {
  return t < 10 ? "0" + t : t;
};

// Set the current year in an element with class "year"
const yearEl = document.querySelector(".year");
if (yearEl) {
  year.innerHTML = new Date().getFullYear();
}

// Countdown Class
class CountDown {
  constructor(expiredDate, onRender, onComplete) {
    this.expiredDate = expiredDate;
    this.onRender = onRender;
    this.onComplete = onComplete;

    this.update(); // Initial update
    this.start();  // Start the countdown
  }

  getTime() {
    const now = new Date().getTime();
    const timeRemaining = this.expiredDate.getTime() - now;

    return {
      total: timeRemaining,
      days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeRemaining / (1000 * 60)) % 60),
      seconds: Math.floor((timeRemaining / 1000) % 60)
    };
  }

  update() {
    const time = this.getTime();

    if (time.total <= 0) {
      clearInterval(this.intervalId);
      if (typeof this.onComplete === "function") {
        this.onComplete();
      }
    } else if (typeof this.onRender === "function") {
      this.onRender(time);
    }
  }

  start() {
    this.intervalId = setInterval(() => this.update(), 1000);
  }
}

const app = document.querySelector(".countdown-timer");
const message = document.querySelector(".message");
const heading = document.querySelector("h1");

// this is for when the timer should end (eg. New Years)
const expiredDate = new Date("December 31, 2025 00:00:00");

const countdown = new CountDown(
  expiredDate,
  (time) => {
    if (app) {
      app.innerHTML = `
        <div>${format(time.days)} Days</div>
        <div>${format(time.hours)} Hours</div>
        <div>${format(time.minutes)} Minutes</div>
        <div>${format(time.seconds)} Seconds</div>
      `;
    }
  },
  () => {
    if (message) message.innerHTML = "🎉 Happy New Year!";
    if (app) app.style.display = "none";
    if (heading) heading.innerText = "It's Time!";
  }
);
