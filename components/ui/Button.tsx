import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const baseClasses = "font-bold py-2 px-4 rounded-lg transition-colors";
    const variantClasses = variant === 'primary'
      ? "bg-primary-red text-white hover:bg-red-700"
      : "bg-secondary-orange text-white hover:bg-orange-600";

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
