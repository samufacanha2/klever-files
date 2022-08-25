import { IPlanItem } from 'types';

const plans: IPlanItem[] = [
  {
    name: 'Free',
    pros: ['1Gb', 'Bandwidth 1Gb', '10,000 Requests Limit'],
    cons: ['Access to Submarining', 'File Optimizations'],
    storage: 1 * 10 ** 9,
    price: 0,
  },
  {
    name: 'Basic',
    pros: [
      '70Gb',
      'Bandwidth 100Gb',
      '100,000 Requests Limit',
      'Access to Submarining',
      '2,500 File Optimizations',
    ],
    price: 15.0,
    storage: 70 * 10 ** 9,
    productLink: 'https://buy.stripe.com/test_dR67tZ9sx0v7fJuaEG',
  },
  {
    name: 'Premium',
    pros: [
      '450Gb',
      'Bandwidth 450Gb',
      '360,000 Requests Limit',
      'Access to Submarining',
      '25000 File Optimizations',
    ],
    price: 75.0,
    storage: 450 * 10 ** 9,
    productLink: 'https://buy.stripe.com/test_6oE7tZfQV3Hj40McMN',
    main: true,
  },
  {
    name: 'Enterprise',
    pros: [
      '3,000Gb',
      'Bandwidth 4,700Gb',
      '3,760,000 Requests Limit',
      'Access to Submarining',
      '2,500,000 File Optimizations',
    ],
    price: 750.0,
    storage: 3000 * 10 ** 9,
    productLink: 'https://buy.stripe.com/test_eVa8y39sx6TveFqcMM',
  },
  {
    name: 'Custom',
    pros: [
      'Custom Total Storage',
      'Custom Bandwidth',
      'Custom Requests Limit',
      'Access to Submarining',
      'Custom File Optimizations',
    ],
    price: undefined,
    storage: 2500 * 10 ** 9,
    productLink: 'https://buy.stripe.com/test_eVa8y39sx6TveFqcMM',
  },
];

export default plans;
