import "./NewUser.css";

const NewUser = () => {
    return (
        <div className="new-user-wrapper">
            <span className="title">New User</span>
            <div className="new-user-form">
                <form>
                    <div className="col">
                        <label for="fname" className="form-label">First Name</label>
                        <input type="text" id="fname" name="fname" className="form-input"></input>

                        <label for="lname" className="form-label">Last Name</label>
                        <input type="text" id="lname" name="lname" className="form-input"></input>

                        <label for="role" className="form-label">Role</label>
                        <input type="text" id="role" name="role" className="form-input"></input>
                        
                        <label for="gender" className="form-label">Gender</label>
                        <input type="radio" id="female" value="female" name="gender" className="form-input"></input>
                        <label for="female">Female</label>
                        <input type="radio" id="male" value="male" name="gender" className="form-input"></input>
                        <label for="male">Male</label>
                        <input type="radio" id="other" value="other" name="gender" className="form-input"></input>
                        <label for="other">Other</label>
                        
                        <label for="image" className="form-label">Upload Image</label>
                        <input type="text" id="image" name="image" className="form-input"></input>


                    </div>
                    <div className="col">
                        <label for="email" className="form-label">E-Mail</label>
                        <input type="text" id="email" name="email" className="form-input"></input>
                        <label for="phone" className="form-label">Phone</label>
                        <input type="text" id="phone" name="phone" className="form-input"></input>
                        <label for="address" className="form-label">Address</label>
                        <input type="text" id="address" name="address" className="form-input"></input>
                        <label for="date" className="form-label">Date of Birth</label>
                        <input type="text" id="date" name="date" className="form-input"></input>

                    </div>


                </form>
            </div>
        </div>
    )
}

export default NewUser;