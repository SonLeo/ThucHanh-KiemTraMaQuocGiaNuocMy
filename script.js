function isUSZipCode(code) {
    const REGEX = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (REGEX.test(code)) {
        console.log(`The ${code} is the US Zip Code`);
    } else {
        console.log(`The ${code} is not the US Zip Code`);
    }
}

isUSZipCode('03201-2150');
isUSZipCode('7892');
