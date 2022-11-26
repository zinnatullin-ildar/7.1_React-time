export function getDayCaption(days) {
    if (days % 10 === 1 && days % 100 !== 11) return 'день';
    if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) return 'дня';
    else return 'дней';
}

export function getHoursCaption(hours) {
    if (hours % 10 === 1 && hours % 100 !== 11) return 'час';
    if (hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 >= 20)) return 'часа';
    else return 'часов';
}
