import { IPlanItem } from 'types';

const plans: IPlanItem[] = [
  {
    name: 'Free',
    pros: ['50Mb'],
    cons: ["Can't Minify"],
    storage: 50 * 10 ** 6,
    price: 0,
  },
  {
    name: 'Basic',
    pros: ['20Gb', 'Minify up to 200 files'],
    price: 9.99,
    storage: 20 * 10 ** 9,
  },
  {
    name: 'Premium',
    pros: ['100Gb', 'Minify up to 10000 files'],
    price: 19.99,
    storage: 100 * 10 ** 9,
  },
  {
    name: 'Enterprise',
    pros: ['1000Gb', 'Minify up to 10000000 files'],
    price: 99.99,
    storage: 1000 * 10 ** 9,
  },
];

export default plans;
