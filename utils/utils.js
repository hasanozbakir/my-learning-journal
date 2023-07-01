export function getBaseLength() {
    return window.innerWidth < 731 || window.innerWidth > 1057 ? 3: 2;
}

export function getUnitLength() {
    return window.innerWidth < 731 ? 3: window.innerWidth < 1381 ? 6: 8;
}