export interface InputProps {
  placeholderText?: string;
  classname?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
