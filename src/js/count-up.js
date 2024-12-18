import { CountUp } from 'countup.js/dist/countUp.min.js'

const countUpNumbers = [542, 27.9, 107, 5.3];
const targetId = ["countup_01", "countup_02", "countup_03", "countup_04"];
const countUpInstances = [];

for (let i = 0; i < countUpNumbers.length; i++) {
    let decimalPlaces = Number.isInteger(countUpNumbers[i]) ? 0 : 1; // 檢查是否為整數，設置小數點位數
    let countUp = new CountUp(targetId[i], countUpNumbers[i], {
        enableScrollSpy: true,
        decimalPlaces: decimalPlaces,
    });
    countUpInstances.push(countUp);
}

new CountUp("countup06", 10.4, {
    enableScrollSpy: true,
    decimalPlaces: 1,
});

new CountUp("countup07", 9.8, {
    enableScrollSpy: true,
    decimalPlaces: 1,
});

