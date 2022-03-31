import React from 'react'

const NewArrivals = () => {
  return (
    <>
    <div id="new-arrivals">
        <div className="new-arrival-wrapper flex-jus-cen flex-wrap">
            <div className="new-arrival-card flex-jus-cen flex-wrap">
                <img src="https://source.unsplash.com/500x500/?boot" alt="img"/>
                <div className="card-content">
                    <h3 className="sm-h text-center">New Arrivals</h3>
                    <h2 className="title md-h text-center">Summer Collection</h2>
                    <p className="info sm-text text-center">Check out our new Summer collection to sty styled in comming
                        season</p>
                </div>
            </div>
            <div className="new-arrival-card  flex-jus-cen flex-wrap">
                <img src="https://source.unsplash.com/500x500/?shoe" alt="img"/>
                <div className="card-content">
                    <h3 className="sm-h text-center">New Arrivals</h3>
                    <h2 className="title md-h text-center">Summer Collection</h2>
                    <p className="info sm-text text-center">Check out our new Summer collection to sty styled in comming
                        season</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewArrivals