import clsx from 'clsx';

const variantClasses = {
    primary: 'bg-cred hover:bg-cred/90 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
};

const baseClass = 'cursor-pointer px-4 py-2 rounded-full text-sm font-[500] transition-colors duration-200';

const Button = ({ type = 'button', variant = 'primary', onClick, className, children, ...props }) => {
    return (
        <button type={type} onClick={onClick} className={clsx(baseClass, variantClasses[variant], className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
