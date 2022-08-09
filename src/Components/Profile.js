import React, { Component } from 'react'



import img from '../nadh.jpg'
export class Profile extends Component {
state={
    profil:{
        fullname:"Nidhal Rebhi",
        bio:"I am a cybersecurity & Web Dev",
        mypic:{img},
        profession:"I am still student now",

    }


}

  render() {
  
    return (
      <div>
        <div className="container d-flex justify-content-center">
  <div className="card p-3 py-4">
    <div className="text-center"> 
      <img src={img} width={100} className="rounded-circle" />
      <h3 className="mt-2">{this.state.profil.fullname}</h3>
      <span className="mt-1 clearfix">{this.state.profil.profession}</span>
      <div className="row mt-3 mb-3">
        <div className="col-md-4">
          <h5>Html</h5>
          <span className="num">Done</span>
        </div>
        <div className="col-md-4">
          <h5>Css</h5>
          <span className="num">Done</span>
        </div>
        <div className="col-md-4">
          <h5>JS</h5>
          <span className="num">Done</span>
        </div>
      </div>
      <hr className="line" />
      <small className="mt-4">{this.state.profil.bio}</small>
      
      <div className="profile mt-5">
        <button className="profile_button px-5">View profile</button>
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}

export default Profile