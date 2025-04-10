
const MarketTrades = ({ data }) => {
        return (
                <div className='flex w-full'>
                        <div className='flex w-full flex-col h-[276px] overflow-y-auto p-0 half-w-scroll'>
                                {
                                        data.map((data) => (
                                                <div key={data.id} className="flex py-1 px-4 ">
                                                        <div className={`flex justify-end ${data.status === "buy" ? "text-default-green" : "text-default-red"}`} style={{ "flex": "2 1 0%" }}>
                                                                {data.price}
                                                        </div>
                                                        <div className='flex' style={{ "flex": "3 1 0%" }}>
                                                                <div className='flex text-default-white pl-1'>{data.amount}</div>
                                                        </div>
                                                        <div className='flex justify-center' style={{ "flex": "2 1 0%" }}>
                                                                {data.time ?? "21:45:27"}

                                                        </div>
                                                </div>
                                        ))
                                }
                        </div>
                </div>
        )
}

export default MarketTrades