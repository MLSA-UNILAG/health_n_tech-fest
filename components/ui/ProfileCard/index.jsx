export const ProfileCard = ({ speaker }) => {
    return (
        <div className=" w-[200px] border-t-[1px] border-l-[1px] border-r-4 border-b-4 rounded-3xl">
            <div >{speaker.image}</div>
            <div className="py-5 px-3 bg-profile rounded-br-3xl rounded-bl-3xl">
                <p className=" font-bold text-md">{speaker.name}</p>
                <p className=" text-[12px]">{speaker.description}</p>
            </div>
        </div>
    )
}
