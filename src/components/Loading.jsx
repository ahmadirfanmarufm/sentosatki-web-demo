const Loading = () => {
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-secondary-800"></div>
            <div className="ml-4 text-primary-secondary-800 font-semibold">Loading...</div>
        </div>
    )
}

export default Loading;