import { ArrowRightIcon } from "@/public/Icons/ArrowRight"
import Link from "next/link"

export const Button = ({ text, link = "#" }) => {
    return (
        <div>
            <Link href={link} >
                <div className="flex flex-row gap-3 px-6 py-3 w-fit rounded-[12px] bg-gradient-to-r from-button_gradient_from to-button_gradient_to">
                    <p className="text-sm text-white">{text}</p>
                    <ArrowRightIcon />
                </div>
            </Link>
        </div>
    )
}
