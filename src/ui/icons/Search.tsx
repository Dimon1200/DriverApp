const Search = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 36 36"
            {...props}
        >
            <path
                stroke="#4B63E1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M31.5 31.5l-9-9m3-7.5a10.5 10.5 0 11-21 0 10.5 10.5 0 0121 0z"
            ></path>
        </svg>
    )
}

export default Search