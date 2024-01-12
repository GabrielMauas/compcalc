const tabs = [
  {
    key: 1,
    label: 'Monto Final',
    id: 'montofinal',
    filterId2: null,
    description:
      'Calcula el monto final de una inversión a partir de su capital inicial, rentabilidad, tiempo y aportes adicionales.',
  },
  {
    key: 2,
    label: 'Tiempo',
    id: 'tiempo',
    filterId2: 'adicion',
    description:
      'Calcula el tiempo que tomará alcanzar un monto final a partir de su capital inicial y la rentabilidad.',
  },
  {
    key: 3,
    label: 'Rentabilidad',
    id: 'tasa',
    filterId2: 'adicion',
    description:
      'Calcula la rentabilidad necesaria para alcanzar cierto monto final a partir del capital inicial y el tiempo.',
  },
  {
    key: 4,
    label: 'Inversión Inicial',
    id: 'capital',
    filterId2: 'adicion',
    description:
      'Calcula la inversión inicial necesaria para alcanzar un monto final a partir de la tasa de interés y el tiempo.',
  },
];

export default tabs;
