import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const InputField = ({
  id,
  label,
  icon,
  type,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <div className="grid items-center gap-1.5 mb-4">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex flex-row items-center gap-2">
        {icon}
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-72"
        />
      </div>
    </div>
  );
};

export default InputField;
