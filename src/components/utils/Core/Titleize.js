import warning from 'warning';

function titleize(string: String) {
    warning(
        typeof string === 'string' && string.length > 0,
        'Core: titleize(string) expects a non empty string argument.',
    );

    return string
        .split('-')
        .map(word => word.split(''))
        .map(letters => {
            const first = letters.shift();
            return [first.toUpperCase(), ...letters].join('');
        })
        .join(' ');
}

export default titleize