import React from 'react'
import img1 from '../components/i1.png'
import img2 from '../components/i3.png'
const SIgn_img = () => {
    return (
        <>
            <div className="right_data mt-5" style={{ width: "100%" }}>
                <div className="sign_img mt-5">
                </div>
            </div>
    <div>
    <img src={img2} style={{ maxWidth: 200, maxHeight: 200 }} alt="" />
    <img src={img1} style={{ maxWidth: 200, maxHeight: 200 }} alt="" />
    </div>
        </>
    )
}

export default SIgn_img
