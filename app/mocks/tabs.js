const tabs = [
  {
    key: 1,
    label: 'Monto Final',
    id: 'montofinal',
    filterId2: null,
    description:
      'Calcula el monto final de una inversión a partir de su capital inicial, tasa de interés, tiempo y aportes adicionales.',
  },
  {
    key: 2,
    label: 'Tiempo',
    id: 'tiempo',
    filterId2: 'adicion',
    description:
      'Calcula el tiempo que tomará alcanzar un monto final a partir de su capital inicial y la tasa de interés.',
  },
  {
    key: 3,
    label: 'Tasa',
    id: 'tasa',
    filterId2: 'adicion',
    description:
      'Calcula la tasa de interés necesaria para alcanzar cierto monto final a partir del capital inicial y el tiempo.',
  },
  {
    key: 4,
    label: 'Capital Inicial',
    id: 'capital',
    filterId2: 'adicion',
    description:
      'Calcula el capital inicial necesario para alcanzar un monto final a partir de la tasa de interés y el tiempo.',
  },
];

export default tabs;
