import General from "./general";

const Preview = (props) => {
    const info = props.info;
    return(
        <div className="general">
            <div className="Name">
            {info.Name}
            </div>
            <div className="Email">
            {info.email}
            </div>
            <div className="PhoneNumber">
            {info.phoneNumber}
            </div>
            <div className="Address">
            {info.address}
            </div>

        </div>
    )
}

export default Preview;