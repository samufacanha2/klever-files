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

  return `${(number / item.value).toFixed(2).replace(regex, '$1')} ${
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

export const doIf = async (
  success: () => any,
  failure: () => any,
  condition: () => boolean,
  timeoutMS = 5000,
  intervalMS = 100,
): Promise<void> => {
  let interval: any;

  const IntervalPromise = new Promise(resolve => {
    const interval = setInterval(() => {
      if (condition()) {
        resolve(
          (() => {
            success();
            clearInterval(interval);
            clearTimeout(timeout);
          })(),
        );
      }
    }, intervalMS);
  });

  let timeout: any;

  const TimeoutPromise = new Promise(resolve => {
    timeout = setTimeout(() => {
      resolve(
        (() => {
          failure();
          clearInterval(interval);
        })(),
      );
    }, timeoutMS);
  });

  await Promise.race([IntervalPromise, TimeoutPromise]);
};

export const asyncDoIf = async (
  success: () => any,
  failure: () => any,
  condition: () => Promise<boolean>,
  tries = 10,
): Promise<void> => {
  const array = Array.from({ length: tries }, (_, i) => i);

  for (const i of array) {
    console.log(i);
    const result = await condition();
    if (result) {
      success();
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  failure();
  return;
};
