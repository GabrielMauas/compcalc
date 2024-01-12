import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
} from '@/components/ui/card';
import InputField from '@/components/inputfield';
import { Button } from '@/components/ui/button';

const FormCard = ({
  inputs,
  filterId,
  filterId2,
  handleSubmit,
  handleReset,
  description,
}) => {
  return (
    <Card className=" flex flex-col items-center justify-between mb-8 hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-col items-center justify-center gap-2">
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {inputs
          .filter(({ id }) => id != filterId && id != filterId2)
          .map(
            ({
              icon,
              label,
              placeholder,
              id,
              type,
              ref,
              key,
              value,
              setValue,
            }) => (
              <InputField
                icon={icon}
                label={label}
                placeholder={placeholder}
                type={type}
                ref={ref}
                id={id}
                key={key}
                value={value}
                setValue={setValue}
              />
            )
          )}
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center gap-2">
        <Button
          onClick={(e) => handleSubmit(e, filterId)}
          className="flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path
              fill="#ffffff"
              d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
            />
          </svg>
          Calcular
        </Button>
        <Button variant="link" onClick={(e) => handleReset(e)}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};
export default FormCard;
