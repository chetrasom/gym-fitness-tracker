import { Bars } from 'react-loader-spinner'

function Loading() {
    return (
        <Bars
            height="40"
            width="40"
            color="#f36100"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}

export default Loading