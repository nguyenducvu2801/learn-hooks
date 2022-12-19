import styles from './Sass.scss'

function Sass() {
    return (
        <>
            <h3>Learn Sass</h3>

            {/* Nested Sass */}
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">News</a></li>
                </ul>
            </nav>

            {/* Mixin Sass */}
            <button className="success">Succes</button>
            <button className="danger">Danger</button>
            <br />

            {/* Extend Sass */}
            <button className="register">Register</button>
            <div className="content">
                Sau thời gian này nếu không được bên mượn container liên hệ nhận lại,số tiền ký cược trong thỏa thuận mượn container này (nếu có)
                sẽ được coi là bị từ bỏ bởi bên mượn container và Ocean Network Express (Vietnam) Co., Ltd.sẽ có toàn quyền chiếm hữu, sử
                dụng và định đoạt số tiền đặt cọc mà không phải gửi bất kỳ thông báo nào cho bên mượn container
            </div>

            {/* If else */}
            <h1>SUNTECH.EDU.VN</h1>

            {/* For loop */}
            <div className="container">
                <div className="for-item-1">FOR-SLIDER-1</div>
                <div className="for-item-2">FOR-SLIDER-2</div>
                <div className="for-item-3">FOR-SLIDER-3</div>
                <div className="for-item-4">FOR-SLIDER-4</div>
                <div className="for-item-5">FOR-SLIDER-5</div>
            </div>

            {/* Each loop */}
            <div className="container">
                <div className="each-item-1">EACH-SLIDER-1</div>
                <div className="each-item-2">EACH-SLIDER-2</div>
                <div className="each-item-3">EACH-SLIDER-3</div>
                <div className="each-item-4">EACH-SLIDER-4</div>
                <div className="each-item-5">EACH-SLIDER-5</div>
            </div>

            {/* Function Sass */}
            <div className="functionContainer">FUNCTION IN SASS</div>
        </>
    )
}

export default Sass