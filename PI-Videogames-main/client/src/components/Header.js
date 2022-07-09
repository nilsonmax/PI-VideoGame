import video from '../asset/video.mp4'
export const Header = () => {
    return (
        <div className='header'>
            <div className="wrapper">
                <video src={video} autoPlay loop muted className="wrapper__video">
                </video>
            </div>
        </div>
    );
}