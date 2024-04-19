const Close = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 28 28"
            {...props}
        >
            <path
                stroke="#171717"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21L21 7M7 7l14 14"
            ></path>
        </svg>
    )
}

export default Close