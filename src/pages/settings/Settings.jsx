import SideBar from '../../components/sidebar/SideBar'
import './settings.css'
export default function Settings(){
    return(
        <>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update Account</span>
                        <span className="settingsDeleteTitle">Delete Account</span>
                    </div>
                    <form  className="settingsForm">
                        <label >Profile Picture</label>
                        <div className="settingsPP">
                            <img src="https://c.files.bbci.co.uk/FD41/production/_118933846_windows10.jpg" alt="" />
                            <label htmlFor="fileInput">
                                <i className='far fa-user-circle settingsPPIcon'></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:'none'}}/>
                        </div>
                        <label >Username</label>
                        <input type="text" placeholder='Sam'/>
                        <label >Email</label>
                        <input type="email" placeholder='sam@gmail.com' />
                        <label >Password</label>
                        <input type="password" placeholder='*****'/>
                        <button className="settingsSubmit">Update</button>
                    </form>
                </div>

                <SideBar/>
            </div>
        </>
    )
}