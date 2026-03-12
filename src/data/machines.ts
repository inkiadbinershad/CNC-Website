export interface Machine {
  name: string;
  axis: string;
  travel: string;
  tolerance: string;
  image: string;
  material?: string;
}

export const machines: Machine[] = [
  {
    name: 'Haas VF-2',
    axis: '3-Axis',
    travel: "30\\\" x 16\\\" x 20\\\"",
    tolerance: '±0.0005"',
    image: '/assets/images/machines/haas-vf2.jpg',
    material: 'Aluminum, Steel, Plastics',
  },
  {
    name: 'Haas VF-4',
    axis: '3-Axis',
    travel: "50\\\" x 20\\\" x 25\\\"",
    tolerance: '±0.0005"',
    image: '/assets/images/machines/haas-vf4.jpg',
    material: 'Aluminum, Steel, Titanium',
  },
  {
    name: 'Mazak 5-Axis',
    axis: '5-Axis',
    travel: "20\\\" x 20\\\" x 20\\\"",
    tolerance: '±0.0002"',
    image: '/assets/images/machines/mazak-5axis.jpg',
  },
  {
    name: 'DMG Mori DMU 50',
    axis: '5-Axis',
    travel: '500 x 500 x 500mm',
    tolerance: '±0.003mm',
    image: '/assets/images/machines/dmg-mori-dmu50.jpg',
    material: 'Titanium, Inconel',
  },
  {
    name: 'Citizen Swiss L20',
    axis: '7-Axis',
    travel: '20mm x 200mm',
    tolerance: '±0.01mm',
    image: '/assets/images/machines/citizen-swiss-l20.jpg',
    material: 'Stainless Steel, Titanium',
  },
  {
    name: 'Okuma Genos L250',
    axis: '3-Axis',
    travel: '250mm x 500mm',
    tolerance: '±0.005mm',
    image: '/assets/images/machines/okuma-genos-l250.jpg',
  },
  {
    name: 'Makino A51NX',
    axis: '5-Axis',
    travel: "21.7\\\" x 22\\\" x 19.3\\\"",
    tolerance: '±0.0002"',
    image: '/assets/images/machines/makino-a51nx.jpg',
    material: 'Aluminum, Hard Metals',
  },
  {
    name: 'Haas ST-20 Lathe',
    axis: '2-Axis',
    travel: "16.5\\\" chuck, 22\\\" length",
    tolerance: '±0.0005"',
    image: '/assets/images/machines/haas-st20.jpg',
  },
  {
    name: 'Mazak Integrex',
    axis: '5-Axis Multi-Task',
    travel: '26\\\" x 26\\\" x 40\\\"',
    tolerance: '±0.0003"',
    image: '/assets/images/machines/mazak-integrex.jpg',
  },
  {
    name: 'Doosan Puma 2600',
    axis: '3-Axis',
    travel: '10\\\" chuck, 26\\\" length',
    tolerance: '±0.001"',
    image: '/assets/images/machines/doosan-puma2600.jpg',
  },
  {
    name: 'Mitsubishi M-V5',
    axis: '5-Axis',
    travel: '500 x 400 x 400mm',
    tolerance: '±0.002mm',
    image: '/assets/images/machines/mitsubishi-mv5.jpg',
  },
  {
    name: ' Haas UMC-750',
    axis: '5-Axis',
    travel: "30\\\" x 20\\\" x 24\\\"",
    tolerance: '±0.0004"',
    image: '/assets/images/machines/haas-umc750.jpg',
  },
  {
    name: 'Hurco VMX42i',
    axis: '3-Axis',
    travel: "42\\\" x 24\\\" x 24\\\"",
    tolerance: '±0.0005"',
    image: '/assets/images/machines/hurco-vmx42i.jpg',
  },
  {
    name: 'Tormach 1100MX',
    axis: '3-Axis',
    travel: "24\\\" x 13.8\\\" x 16.3\\\"",
    tolerance: '±0.001"',
    image: '/assets/images/machines/tormach-1100mx.jpg',
  },
  {
    name: 'Kyocera GS-10',
    axis: '4-Axis',
    travel: '10\\\" chuck',
    tolerance: '±0.005mm',
    image: '/assets/images/machines/kyocera-gs10.jpg',
  },
];

