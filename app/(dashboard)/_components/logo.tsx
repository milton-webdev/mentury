import Image from "next/image"

export const Logo = () => {
    return (
        <Image 
            height={90}
            width={90}
            alt="Logo"
            src="/logo.svg"
        />
    )
}