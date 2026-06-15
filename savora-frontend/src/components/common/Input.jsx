const Input = ({
  label,
  type,
  register,
  name,
  errors
}) => {

  return (

    <div className="mb-4">

      <label className="block mb-1">

        {label}

      </label>

      <input

        type={type}

        {...register(name)}

        className="
        w-full
        border
        rounded-lg
        px-4
        py-3
        "

      />

      {errors[name] && (

        <p className="text-red-500 text-sm">

          {errors[name].message}

        </p>

      )}

    </div>

  );

};

export default Input;