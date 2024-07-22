import { revalidatePath } from "next/cache";

export default function Records(){

    // fetch data from dp

    async function postData(formData){
        const data = formData.get("origin_country_code");

        // send data

        //display non cached data to show real time changes
        revalidatePath('')
    }

    return(

        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">    
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origin_country_code">Origin Country Code</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="origin country code" name="origin_country_code" type="text" />
                </div>
            </form>

            <div>
                {}
            </div>
        </div>
    )
}