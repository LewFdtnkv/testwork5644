export interface ButtonProps {
  children: React.ReactNode;
  classname: string;
  onClick?: () => void;
  disabled?: boolean;
}
