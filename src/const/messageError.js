export default function messageError(errors) {
    let keys = Object.keys(errors);
    let complement = keys.length > 1
        ? (keys.length === 2 ? ' (y un error más)' : ' (y ' + (keys.length - 1) + ' errores más)')
        : '';
    return errors[keys[0]] + complement;
}