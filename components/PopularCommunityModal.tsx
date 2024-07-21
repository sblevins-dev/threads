import React from 'react'

export default function PopularCommunityModal() {
    return (
        <div className="fixed bg-[#161616] max-w-[300px] rounded-lg p-4 w-full">
            <h1 className="font-medium text-sm mb-4">
                Popular Communities
            </h1>
            <ul className="p-1">
                {["ex", "classicWow", "r/instagram", "r/Nintendo", "r/Ama"].map((item, idx) => (
                    <li key={idx} className="p-2 flex flex-row items-center">
                        <div className="w-10 h-10 rounded-full bg-black mr-4">

                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-semibold">
                                {item}
                            </h1>
                            <span className="text-sm font-light">
                                92,000 members
                            </span>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
}
