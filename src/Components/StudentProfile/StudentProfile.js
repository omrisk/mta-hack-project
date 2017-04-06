import React from 'react';
import Avatar from 'material-ui/Avatar';
import StoreDialog from '../Store/StoreDialog';
import StudentProgress from './StudentProgress';


class StudentProfile extends React.Component {
    state = {
        profileImage: "https://image.ibb.co/dj3rVa/hair.png"
    };

    updateImage = (img) => {
        console.log(img);
        this.setState({profileImage: img});
    }

    render() {
        const {} = this.props;
        return (

            <div className="header">
                <div className="header-profile">
                    <Avatar className="student-avatar"
                            src={this.state.profileImage}
                    />

                    <h1 className="student-name"> Welcome Tal Zaidman </h1>
                </div>
                <div className="header-status">
                    <div className="progress-row">
                        <h3 className="level-number">Level 5</h3>
                        <StudentProgress className="level-progress"> </StudentProgress >
                    </div>

                    <div className="progress-row">
                        <h4 className="points-next-level"> XP 2 next lvl </h4>
                        <StudentProgress className="student-progress"> </StudentProgress >
                    </div>
                </div>
                <StoreDialog onPictureClicked={this.updateImage.bind(this)}/>
            </div>
        );
    }
}
;


export default StudentProfile;