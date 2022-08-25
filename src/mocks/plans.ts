import { IPlanItem } from 'types';

const plans: IPlanItem[] = [
  {
    name: 'Free',
    pros: ['100 pinned files', '1Gb', 'Bandwidth 1GB', '10,000 Requests'],
    cons: [
      'Dedicated Gateways',
      'Access to Submarining',
      'Short links',
      'Image Optimizations',
      'Streaming videominutes stored',
      'Streaming video minutes viewed',
    ],
    storage: 50 * 10 ** 6,
    price: 0,
  },
  {
    name: 'Basic',
    pros: [
      '20,000 pinned files',
      '50Gb',
      'Bandwidth 100GB',
      '100,000 Requests',
      '1 Dedicated Gateway',
      'Access to Submarining',
      '500 Short links',
      '5,000 Image Optimizations',
      '50 Streaming videominutes stored',
      '500 Streaming video minutes viewed',
    ],
    price: 20.0,
    storage: 20 * 10 ** 9,
  },
  {
    name: 'Premium',
    pros: [
      '100,000 pinned files',
      '250Gb',
      'Bandwidth 750GB',
      '1,000,000 Requests',
      '3 Dedicated Gateways',
      'Access to Submarining',
      '2,000 Short links',
      '50,000 Image Optimizations',
      '500 Streaming videominutes stored',
      '5,000 Streaming video minutes viewed',
    ],
    price: 100.0,
    storage: 100 * 10 ** 9,
  },
  {
    name: 'Enterprise',
    pros: [
      '1,000,000 pinned files',
      '2,500Gb',
      'Bandwidth 7500GB',
      '10,000,000 Requests',
      '10 Dedicated Gateways',
      'Access to Submarining',
      '20,000 Short links',
      '5,000,000 Image Optimizations',
      '5,000 Streaming videominutes stored',
      '50,000 Streaming video minutes viewed',
    ],
    price: 1000.0,
    storage: 1000 * 10 ** 9,
  },
];

export default plans;
