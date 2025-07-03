import { Button, CircularProgress, ButtonProps } from '@mui/material';

interface ButtonLoadingProps extends ButtonProps {
  loading?: boolean;
  children: React.ReactNode;
}

const ButtonLoading = ({
  loading = false,
  children,
  ...props
}: ButtonLoadingProps) => {
  return (
    <Button
      {...props}
      disabled={loading || props.disabled}
      startIcon={
        loading ? (
          <CircularProgress size={20} color='inherit' />
        ) : (
          props.startIcon
        )
      }
    >
      {children}
    </Button>
  );
};

export default ButtonLoading;
