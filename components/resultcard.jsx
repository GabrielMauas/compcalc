import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { icons } from '../app/mocks';

const ResultCard = ({ result, resultType }) => {
  return (
    <Alert className="w-11/12 lg:w-3/12 flex flex-col items-center border-1 border-[#68d391] shadow-[0px_0px_20px_1px_#68d391] hover:shadow-[0px_0px_25px_5px_#68d391] transition-all duration-300">
      <AlertTitle>Resultado:</AlertTitle>
      <AlertDescription className="flex flex-row items-center gap-1 text-xl font-bold">
        {' '}
        {icons.find(({ label }) => label === resultType).icon}
        {result.toLocaleString('es-DE')}{' '}
        {(resultType === 'Tiempo' && 'años') ||
          (resultType === 'Tasa' && 'anual')}
      </AlertDescription>
    </Alert>
  );
};

export default ResultCard;
