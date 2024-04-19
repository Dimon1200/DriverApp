const Map = (props: React.SVGProps<SVGSVGElement>) => {
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
                d="M13.625 29.667l-7.944-3.973a1.458 1.458 0 01-.806-1.303V8.692a1.458 1.458 0 012.11-1.304l6.64 3.32m0 18.958l8.75-4.375m-8.75 4.375V10.708m0 0l8.75-4.375m0 18.959l6.64 3.319a1.459 1.459 0 002.11-1.304V11.61a1.459 1.459 0 00-.806-1.304l-7.944-3.973m0 18.959V6.333"
            ></path>
        </svg>
    )
}

export default Map