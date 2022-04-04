import React from 'react'

const Footer = () => {
  return (
  <>
    <div id="footer" className='flex-all-cen'>
        <div className="footer-icons flex-wrap flex-all-cen">
            <a href="https://github.com/Mahi24-prog/" target="_blank"><i className="fa fa-github md-text"></i></a>
            <a href="https://www.linkedin.com/in/mahendra-pawar-3513b3170/" target="_blank"><i className="fa fa-linkedin md-text"></i></a>
            <a href="https://www.instagram.com/mahi__24__/" target="_blank"><i className="fa fa-instagram md-text"></i></a>
        </div>
        <div className="content">
            <div className="text-center">
                <h3 className="md-text text-center">&copy 2022 Copyright : Created by Mahendra</h3>
            </div>
        </div>
    </div>
  </>  
  )
}

export default Footer