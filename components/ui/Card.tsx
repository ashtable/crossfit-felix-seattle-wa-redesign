import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div
        className={`bg-white rounded-lg shadow-md p-6 text-center ${className}`}
        ref={ref}
        {...props}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
