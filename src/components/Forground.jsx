import React, { useRef } from 'react'
import Card from "./Card"
const Forground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: "true",
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: "true",
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
        },
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: "true",
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }
        }
    ];
    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
                {data.map((items, index) => (
                    <Card data={items} reference={ref} />
                ))}
            </div>
        </>
    )
}

export default Forground