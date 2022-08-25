export const toLocaleFixed = (value: number, precision: number): string => {
  return value?.toLocaleString(undefined, {
    minimumFractionDigits: precision,
  });
};

export const formatSize = (number: number): string => {
  if (number <= 0) {
    return '0';
  }

  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
  ];

  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item =
    lookup
      .slice()
      .reverse()
      .find(i => number >= i.value) || lookup[0];

  return `${toLocaleFixed(number / item.value, 2).replace(regex, '$1')} ${
    item.symbol
  }B`;
};

export const stringEllipsis = (inputString: string, maxLen: number): string => {
  return inputString.length > maxLen
    ? `${inputString.slice(0, maxLen / 2)}...${inputString.slice(
        -(maxLen / 2),
      )}`
    : inputString;
};
