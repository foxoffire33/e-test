export default function(props){

    const handleChange = (event) => {
        console.log(event);
    }

    return(
        <>
        <td className="text-sm text-gray-800 whitespace-nowrap">
        {props.children}
        </td>
         <td className="flex px-6 py-0 text-sm text-gray-800 whitespace-nowrap">
            <input 
            type="number" 
            step="0.01" 
            className="form-input mr-2 form-input w-full text-gray-700 border-gray-300 rounded-sm px-3 py-2 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            id="exampleFormControlInput1" 
            placeholder="Override prediction" 
            onChange={handleChange}
            value={props.override}
            />
        </td>
        </>
    );
}