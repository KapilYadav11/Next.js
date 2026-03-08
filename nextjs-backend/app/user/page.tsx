import axios from 'axios';

export default async function User(){
    const response = await axios.get("http://localhost:3000/api/v1/user/details") // by this the frontend and backend are on the same server , that's next.js
    
    await new Promise(r => setTimeout(r, 5000));

    const data = response.data;
    return(
        <div className='flex flex-col justify-center h-screen'>
            <div className='flex justify-center'>
                <div className='border p-8 rounded'>
                    <div>
                         {data.name} <br/>

                    </div>
                         {data.email} 

                </div>

            </div>
          
           
           
        </div>
    )
}