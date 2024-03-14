export function datetimeFormat(database_date) {
    const formattedDate = new Date(database_date).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    return formattedDate;
}

export function dateFormat(database_date) {
    const formattedDate = new Date(database_date + ' 00:00:00').toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return formattedDate;
}

export function getDaysOfTheMonth() {
    let days = [];
    for (let index = 1; index < 32; index++) days.push(index);

    return days;
}