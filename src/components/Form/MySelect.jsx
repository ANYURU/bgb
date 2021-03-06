export const MySelect = ({ useField, className, label, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <div className="flex flex-col mt-2">
        <label htmlFor={props.id || props.name} className='block font-bold text-2sm dark:text-white'>{label}</label>
        <select {...field} {...props} className={`${className} ${meta.touched && meta.error && "ring-1 ring-red-500"}`}/>
        {meta.touched && meta.error ? (
          <div className="error text-red-600 text-xs">{meta.error}</div>
        ) : null}
      </div>
    );
  };