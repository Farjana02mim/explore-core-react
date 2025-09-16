export default function Friend({friend}){
    console.log(friend)
    const {name, email, phone} = friend;
    return(
        <div className="usersCard">
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
        </div>
    )
}