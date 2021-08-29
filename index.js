(function () {
  const todaysDate = new Date()

  if (todaysDate.getDay() === 0) return alert('today is Sunday ... no extra readings')

  todaysDate.setHours(0)
  todaysDate.setMinutes(0)
  todaysDate.setSeconds(0)
  todaysDate.setMilliseconds(0)

  const [todaysReading] = readings
    .filter(x => {
      const [dateString] = x.split(':')
      return new Date(dateString).getTime() === todaysDate.getTime()
    })

  if (todaysReading === undefined) return alert('sorry no reading available; might need to update list')

  const dateString = todaysReading.split(':')[0]
  const passages = todaysReading.replace(dateString + ': ', '')

  document.getElementById('app').innerHTML = `
    <div
      style="
        font-family: Arial;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 80vh;
      ">
      <h1>${dateString.replace(/^\w+, /g, '<br>')}</h1>
      <h2>${passages.replace(/; /g, '<br>')}</h2>
    </div>
  `
})()

