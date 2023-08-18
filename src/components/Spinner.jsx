
import { RotatingLines } from  'react-loader-spinner'


const Spinner = () => {
    return (
        <section style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center"}}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </section>
    )
}

export default Spinner