import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import {motion} from 'framer-motion'

const Card = ({ data, reference }) => {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} dragTransition={{bounceStiffness: 100, bounceDamping: 10}} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden px-10 py-10">
                <FaFileAlt />
                <p className='text-sm leading-tight mt-5'>{data.desc}</p>
                <div className="footer absolute bottom-0 w-full h-10 left-0 mb-12">
                    <div className='flex justify-between items-center py-3 px-8'>
                        <h5>{data.filesize}</h5>
                        <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                            {data.close ? <IoClose size=".9em" color='#fff' /> : <MdOutlineFileDownload size=".9em" color='#fff' />}
                        </span>
                    </div>
                    {
                        data.tag.isOpen && (
                        <div className={`tag w-full py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
                            <h3 className='text-md '>{data.tag.tagTitle}</h3>
                        </div>
                        )
                    }

                </div>
            </motion.div>
        </>
    )
}

export default Card