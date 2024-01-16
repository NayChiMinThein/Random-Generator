import { BallTriangle } from 'react-loader-spinner'

const Preloader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <BallTriangle
            height={105}
            width={120}
            radius={5}
            color="#fff"
            ariaLabel="ball-triangle-loading"
            visible={true}
        />
    </div>
  )
}

export default Preloader