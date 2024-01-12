import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AlertError = ({ message }) => {
  return (
    <Alert
      variant="destructive"
      className="w-11/12 lg:w-3/12 flex flex-col items-center"
    >
      <AlertTitle>Error:</AlertTitle>
      <AlertDescription className="flex flex-row items-center gap-1 text-sm">
        {message}
      </AlertDescription>
    </Alert>
  );
};

export default AlertError;
