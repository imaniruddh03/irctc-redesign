import React from 'react'

const elements = [{
    head:"Company",
    l1:"Updates",
    l2:"Career",
    l3:"Capabilities",
    l4:"Products",
    l5:"Contact Us"
}]





const foorelement = () => {
  return (
    <>
    {elements.map((items, index)=>{
        return(
            <div className='flex flex-col gap-5'>
                <h4 className=' text-blue-500 w-fit cursor-pointer'>{items.head}</h4>
                <ul className=' text-white  w-fit flex flex-col gap-2'>
                    <li className='cursor-pointer'>{items.l1}</li>
                    <li className='cursor-pointer'>{items.l2}</li>
                    <li className='cursor-pointer'>{items.l3}</li>
                    <li className='cursor-pointer'>{items.l4}</li>
                    <li className='cursor-pointer'>{items.l5}</li>
                </ul>
            </div>
        )
    })}
    </>
  )
}

export default foorelement
