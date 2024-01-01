"use client"
import Header from "@/Components/Header"
import axios from "axios"
import { useEffect, useState } from "react"

const page = () => {
  const [images, setImages]= useState([])
  const getImages = async () => {
try {
  const response = await  axios.get('https://picsum.photos/v2/list')
  const data = response.data
console.log(data);
setImages(data)
} catch (error) {
  console.error("Images Fetching Error");
}
}

useEffect(() => {
  getImages()
},[])

  return (
   <div className='py-10 text-center'>
   {/* <Header/> */}
   <button onClick={getImages} className="py-2 px-4 rounded-md bg-black text-white font-semibold ">Get Images</button>
   <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{
  images.map((img) => <div key={img.id}>
    <img className="rounded-md" src={img.download_url}/>
  </div>
    
    
)
}

   </div>
   </div>
  )}
export default page