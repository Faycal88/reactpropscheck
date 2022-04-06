import React from "react";
import propTypes from "prop-types";


export default function FullName(props) {
    return {
        props  // cheking the props type wich i could not establish ?!
    } ?
        (
            <div>
                {props.children}
                <h1>Hello {props.fullName} you are a {props.bio} and a {props.profession}</h1>
                <button onClick={() => { props.func(props.fullName) }}>Alert your Name</button>
            </div>
        ) : (
            <div>
            <h1>Login First</h1>
        </div> 
        );
    }
    


FullName.defaultProps = {
    fullName: "Your name here",
    bio: "Your bio here",
    profession: "Your profession here"
};

FullName.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    func:propTypes.func
};