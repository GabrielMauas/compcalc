'use client';

import { useState } from 'react';
import Image from 'next/image';
import AlertError from '@/components/alerterror';
import ResultCard from '@/components/resultcard';
import SocialIcon from '@/components/socialicon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FormCard from '@/components/formcard';
import { socials, tabs } from './mocks';

export default function Home() {
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState(null);
  const [error, setError] = useState(null);

  const [capitalValue, setCapitalValue] = useState(null);
  const [tasaValue, setTasaValue] = useState(null);
  const [tiempoValue, setTiempoValue] = useState(null);
  const [adicionValue, setAdicionValue] = useState(null);
  const [montofinalValue, setMontofinalValue] = useState(null);

  const inputs = [
    {
      key: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="12.5"
          viewBox="0 0 320 512"
        >
          <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
        </svg>
      ),
      label: 'Capital Inicial',
      placeholder: 'Ej: 1000',
      type: 'number',
      id: 'capital',
      value: capitalValue,
      setValue: setCapitalValue,
    },
    {
      key: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="17.5"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      ),
      label: 'Adición anual',
      placeholder: 'Ej: 1000',
      type: 'number',
      id: 'adicion',
      value: adicionValue,
      setValue: setAdicionValue,
    },
    {
      key: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="15"
          viewBox="0 0 384 512"
        >
          <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
        </svg>
      ),
      label: 'Tasa de Interés',
      placeholder: 'Ej: 10',
      type: 'number',
      id: 'tasa',
      value: tasaValue,
      setValue: setTasaValue,
    },
    {
      key: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="15"
          viewBox="0 0 384 512"
        >
          <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
        </svg>
      ),
      label: 'Años',
      placeholder: 'Ej: 10',
      type: 'number',
      id: 'tiempo',
      value: tiempoValue,
      setValue: setTiempoValue,
    },
    {
      key: 5,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="17"
          viewBox="0 0 576 512"
        >
          <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
        </svg>
      ),
      label: 'Monto Final',
      placeholder: 'Ej: 10.000',
      type: 'number',
      id: 'montofinal',
      value: montofinalValue,
      setValue: setMontofinalValue,
    },
  ];

  const handleSubmit = (e, filterId) => {
    e.preventDefault();

    let result;
    if (filterId === 'montofinal') {
      result =
        capitalValue * (1 + tasaValue / 100) ** tiempoValue +
        (adicionValue * ((1 + tasaValue / 100) ** tiempoValue - 1)) /
          (tasaValue / 100);
      setResultType('Moneda');
    } else if (filterId === 'tasa') {
      result =
        100 * ((montofinalValue / capitalValue) ** (1 / tiempoValue) - 1);
      setResultType('Tasa');
    } else if (filterId === 'tiempo') {
      result =
        Math.log(montofinalValue / capitalValue) /
        Math.log(1 + tasaValue / 100);
      setResultType('Tiempo');
    } else if (filterId === 'capital') {
      result =
        montofinalValue / (1 + tasaValue / 100) ** tiempoValue -
        (adicionValue * ((1 + tasaValue / 100) ** tiempoValue - 1)) /
          (tasaValue / 100);
      setResultType('Moneda');
    }

    if (isNaN(result)) {
      setError(true);
      return;
    } else {
      setResult(Math.round(result, 2));
      setError(false);
      return;
    }
  };

  const handleReset = (e) => {
    e.preventDefault();

    setCapitalValue('');
    setTasaValue('');
    setTiempoValue('');
    setAdicionValue('');
    setMontofinalValue('');

    setResult(null);
    setError(false);
  };

  return (
    <main className="flex flex-col items-center py-16 max-w-screen max-h-screen">
      <div className="flex flex-row items-center justify-center gap-2 mb-4">
        <Image
          src="/compcalclogo.svg"
          width={50}
          height={50}
          alt="CompCalc Logo"
        />
        <h1 className="text-4xl font-bold text-center">CompCalc</h1>
      </div>
      <p className="text-center text-xl mb-8">
        Calculadora de interés compuesto
      </p>
      <p className="text-center text-md mb-8 w-11/12 lg:w-6/12">
        El interés compuesto es el interés que se genera sobre el capital
        inicial más los intereses que se han acumulado en los periodos
        anteriores. Es decir, el interés compuesto es el interés sobre el
        interés.
      </p>

      <Tabs defaultValue="montofinal" className="w-11/12 lg:w-4/12">
        <TabsList className="grid w-full h-full grid-cols-2 grid-rows-2 gap-y-2 xl:grid-cols-4 xl:grid-rows-1">
          {tabs.map(({ key, label, id }) => (
            <TabsTrigger value={id} key={key}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(({ key, id, filterId2, description }) => (
          <TabsContent value={id} key={key}>
            <FormCard
              inputs={inputs}
              filterId={id}
              filterId2={filterId2}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              description={description}
            />
          </TabsContent>
        ))}
      </Tabs>

      {result && <ResultCard result={result} resultType={resultType} />}
      {error && <AlertError message={'Alguno de los campos está vacío'} />}

      <div className="flex items-center justify-between gap-6 p-1 text-sm pt-8">
        <p>Hecho por Gabriel Mauas</p>
        <div className="flex gap-2 items-center justify-between">
          {socials.map(({ key, icon, url }) => (
            <SocialIcon key={key} icon={icon} url={url} />
          ))}
        </div>
      </div>
    </main>
  );
}
