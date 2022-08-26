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
      `${Number(2500).toLocaleString()} File Optimizations`,
    ],
    price: 100.0,
    storage: 70 * 10 ** 9,
    productLink: 'https://buy.stripe.com/test_eVag0vgUZcdP40M3cf',
  },
  {
    name: 'Premium',
    pros: [
      '450Gb',
      'Bandwidth 450Gb',
      '360,000 Requests Limit',
      'Access to Submarining',
      `${Number(25000).toLocaleString()} File Optimizations`,
    ],
    price: 500.0,
    storage: 450 * 10 ** 9,
    productLink: 'https://buy.stripe.com/test_00g8y3awBelX54Q148',
    main: true,
  },
  {
    name: 'Enterprise',
    pros: [
      '3,000Gb',
      'Bandwidth 4,700Gb',
      '3,760,000 Requests Limit',
      'Access to Submarining',
      `${Number(2500000).toLocaleString()} File Optimizations`,
    ],
    price: 3000.0,
    storage: 3000 * 10 ** 9,
    productLink: 'https://buy.stripe.com/test_5kA6pVeMRb9L9l6149',
  },
];

export default plans;
