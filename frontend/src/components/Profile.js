import React, { useContext } from "react"
import { Pubuser } from "../App"

const Profile = () => {
  const user = useContext(Pubuser)
  return (
    <>
      <section className="vh-100" style={{ "backgroundColor": "#9de2ff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card" style={{ "borderRadius": "15px" }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder" className="img-fluid"
                        style={{ "width": "180px", "borderRadius": "10px" }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">{user.username}</h5>
                      <p className="mb-2 pb-1" style={{ "color": "#2b2a2a" }}>{user.email}</p>
                      <p className="small text-muted mb-1">Author id = {user.id}</p>

                      <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ "backgroundColor": "#efefef" }}>

                        <div>
                          <p className="small text-muted mb-1">Blogs</p>
                          <p className="mb-0">41</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile