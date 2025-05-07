const SignInput = ({ name, type, label }) => {
    return (
        <div className="flex mt-5 flex-col gap-2  ">
            <label className='font-semibold' htmlFor={name}>{label}</label>
            <input className="p-2 -mt-2 border-b outline-none border-blue-900 " name={name} id={name} type={type} />
        </div>
    );
};

export default SignInput;